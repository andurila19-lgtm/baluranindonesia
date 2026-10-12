import type { APIRoute } from 'astro';
import {
  checkRateLimit,
  recordFailedAttempt,
  resetRateLimit,
  createSessionToken,
  timingSafeVerify,
  sanitizeInput,
} from '../../../lib/security';

export const prerender = false;

const VALID_USERNAME = process.env.ADMIN_USERNAME || 'admin';
const VALID_PASSWORD = process.env.ADMIN_PASSWORD || 'BaluranSuperAdmin#2026!';

export const POST: APIRoute = async ({ request, cookies }) => {
  const clientIp = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || '127.0.0.1';

  // 1. Rate Limiting Check (Anti-DDOS & Anti-Brute Force)
  const rateLimit = checkRateLimit(clientIp);
  if (!rateLimit.allowed) {
    return new Response(
      JSON.stringify({
        success: false,
        message: `Terlalu banyak percobaan gagal. Akses dibekukan selama ${rateLimit.retryAfterSec} detik untuk alasan keamanan.`,
        retryAfter: rateLimit.retryAfterSec,
      }),
      { status: 429, headers: { 'Content-Type': 'application/json' } }
    );
  }

  let body: any;
  try {
    body = await request.json();
  } catch {
    return new Response(
      JSON.stringify({ success: false, message: 'Payload tidak valid.' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }

  // 2. Bot Honeypot Check (Anti-Bot Automated Exploit)
  if (body.website_url_trap && body.website_url_trap.trim() !== '') {
    recordFailedAttempt(clientIp);
    return new Response(
      JSON.stringify({ success: false, message: 'Akses ditolak.' }),
      { status: 403, headers: { 'Content-Type': 'application/json' } }
    );
  }

  const username = sanitizeInput(body.username);
  const password = typeof body.password === 'string' ? body.password : '';

  // 3. Verifikasi Kredensial dengan Constant-time comparison (Anti-Timing Attack)
  const isUsernameValid = timingSafeVerify(username, VALID_USERNAME);
  const isPasswordValid = timingSafeVerify(password, VALID_PASSWORD);

  if (!isUsernameValid || !isPasswordValid) {
    const attempt = recordFailedAttempt(clientIp);
    return new Response(
      JSON.stringify({
        success: false,
        message: attempt.locked
          ? `Batas 5x percobaan terlampaui. Akses dibekukan selama ${attempt.retryAfterSec} detik.`
          : 'Username atau Password salah.',
      }),
      { status: 401, headers: { 'Content-Type': 'application/json' } }
    );
  }

  // Sukses login: reset counter brute force
  resetRateLimit(clientIp);

  // Buat cryptographic session token
  const sessionToken = createSessionToken(username);

  cookies.set('baluran_admin_session', sessionToken, {
    path: '/',
    httpOnly: true,
    secure: import.meta.env.PROD,
    sameSite: 'strict',
    maxAge: 3600, // 1 jam
  });

  return new Response(
    JSON.stringify({
      success: true,
      token: sessionToken,
      message: 'Login berhasil.',
    }),
    { status: 200, headers: { 'Content-Type': 'application/json' } }
  );
};
