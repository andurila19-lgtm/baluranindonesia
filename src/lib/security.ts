import crypto from 'node:crypto';

// In-memory brute force & rate limit tracker
interface RateLimitRecord {
  attempts: number;
  lockedUntil: number;
}
const rateLimitMap = new Map<string, RateLimitRecord>();

const MAX_ATTEMPTS = 5;
const LOCKOUT_TIME_MS = 15 * 60 * 1000; // 15 menit

export function checkRateLimit(clientId: string): { allowed: boolean; remainingAttempts: number; retryAfterSec?: number } {
  const now = Date.now();
  const record = rateLimitMap.get(clientId);

  if (!record) {
    return { allowed: true, remainingAttempts: MAX_ATTEMPTS };
  }

  if (record.lockedUntil > now) {
    const retryAfterSec = Math.ceil((record.lockedUntil - now) / 1000);
    return { allowed: false, remainingAttempts: 0, retryAfterSec };
  }

  if (record.lockedUntil > 0 && record.lockedUntil <= now) {
    rateLimitMap.delete(clientId);
    return { allowed: true, remainingAttempts: MAX_ATTEMPTS };
  }

  return { allowed: true, remainingAttempts: Math.max(0, MAX_ATTEMPTS - record.attempts) };
}

export function recordFailedAttempt(clientId: string): { locked: boolean; retryAfterSec?: number } {
  const now = Date.now();
  const record = rateLimitMap.get(clientId) || { attempts: 0, lockedUntil: 0 };
  record.attempts += 1;

  if (record.attempts >= MAX_ATTEMPTS) {
    record.lockedUntil = now + LOCKOUT_TIME_MS;
    rateLimitMap.set(clientId, record);
    return { locked: true, retryAfterSec: Math.ceil(LOCKOUT_TIME_MS / 1000) };
  }

  rateLimitMap.set(clientId, record);
  return { locked: false };
}

export function resetRateLimit(clientId: string) {
  rateLimitMap.delete(clientId);
}

// Sanitasi input ketat (Anti-SQL Injection / NoSQL Injection / XSS)
export function sanitizeInput(value: unknown): string {
  if (typeof value !== 'string') return '';
  return value
    .replace(/[<>]/g, '') // Strip HTML tags
    .replace(/(\$where|\$regex|\$gt|\$ne|\$or|\$and)/gi, '') // Anti-NoSQL operator injection
    .replace(/('|"|;|--|\/\*|\*\/)/g, '') // Anti-SQL special tokens
    .trim();
}

// Secret key untuk signing session HMAC
const SESSION_SECRET = process.env.ADMIN_SESSION_SECRET || 'baluran-indonesia-secure-secret-key-2026-xyz';

export function createSessionToken(username: string): string {
  const payload = JSON.stringify({
    u: username,
    exp: Date.now() + 60 * 60 * 1000, // 1 jam expiry
    nonce: crypto.randomBytes(16).toString('hex'),
  });
  const b64Payload = Buffer.from(payload).toString('base64url');
  const signature = crypto.createHmac('sha256', SESSION_SECRET).update(b64Payload).digest('base64url');
  return `${b64Payload}.${signature}`;
}

export function verifySessionToken(token: string | undefined | null): boolean {
  if (!token || !token.includes('.')) return false;
  const [b64Payload, signature] = token.split('.');
  if (!b64Payload || !signature) return false;

  const expectedSig = crypto.createHmac('sha256', SESSION_SECRET).update(b64Payload).digest('base64url');
  const sigBuffer = Buffer.from(signature);
  const expectedBuffer = Buffer.from(expectedSig);

  if (sigBuffer.length !== expectedBuffer.length || !crypto.timingSafeEqual(sigBuffer, expectedBuffer)) {
    return false;
  }

  try {
    const payload = JSON.parse(Buffer.from(b64Payload, 'base64url').toString('utf8'));
    if (!payload.exp || Date.now() > payload.exp) {
      return false; // Expired
    }
    return true;
  } catch {
    return false;
  }
}

// Constant-time credential check untuk menghindari Timing Attacks
export function timingSafeVerify(input: string, target: string): boolean {
  const inputHash = crypto.createHash('sha256').update(input).digest();
  const targetHash = crypto.createHash('sha256').update(target).digest();
  return crypto.timingSafeEqual(inputHash, targetHash);
}
