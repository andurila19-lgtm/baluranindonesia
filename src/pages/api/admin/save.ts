import type { APIRoute } from 'astro';
import { verifySessionToken, sanitizeInput } from '../../../lib/security';
import { createClient } from '@sanity/client';

export const prerender = false;

const client = createClient({
  projectId: process.env.PUBLIC_SANITY_PROJECT_ID || '7ox4kuc2',
  dataset: process.env.PUBLIC_SANITY_DATASET || 'production',
  token: process.env.SANITY_API_TOKEN || 'skLaYJo6mRQU2kCkw5lavyXehPFy1uNlrOmoYaavfPZGbZ4QLHmkJr4FbSjPhfq4dacplttQfeW9nA2ZKOKP8kpd2cwQiVU5TuQwa3mIZYRV0nv2cODlowzUR7A5GlmrIPBNq8hg99QKUuEbESJprYw6gfUs6sHQoz9yQbfqU3kyXAMIA7Kb',
  apiVersion: '2024-01-01',
  useCdn: false,
});

const ALLOWED_TYPES = new Set(['tourPackage', 'destination', 'fleet', 'siteSettings', 'faq', 'testimonial']);

export const POST: APIRoute = async ({ request, cookies }) => {
  const token =
    cookies.get('baluran_admin_session')?.value ||
    request.headers.get('authorization')?.replace('Bearer ', '');

  // 1. Validasi Sesi (Anti-IDOR)
  if (!verifySessionToken(token)) {
    return new Response(
      JSON.stringify({ success: false, message: 'Sesi tidak sah atau telah kadaluarsa.' }),
      { status: 401, headers: { 'Content-Type': 'application/json' } }
    );
  }

  let body: any;
  try {
    body = await request.json();
  } catch {
    return new Response(
      JSON.stringify({ success: false, message: 'Format data tidak valid.' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }

  const { docId, docType, fields } = body;

  // 2. Validasi Whitelist Tipe Dokumen (Anti-Arbitrary Mutation)
  if (!ALLOWED_TYPES.has(docType)) {
    return new Response(
      JSON.stringify({ success: false, message: 'Tipe dokumen tidak diizinkan.' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }

  // 3. Validasi ID Dokumen (Anti-Path Traversal & Injection)
  if (!docId || typeof docId !== 'string' || !/^[a-zA-Z0-9_\-\.]+$/.test(docId)) {
    return new Response(
      JSON.stringify({ success: false, message: 'Format ID dokumen tidak valid.' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }

  // 4. Sanitasi semua field (Anti-XSS & Anti-Injection)
  const sanitizedFields: Record<string, any> = {};
  for (const [key, val] of Object.entries(fields || {})) {
    // Abaikan metadata sistem
    if (key.startsWith('_')) continue;

    if (typeof val === 'string') {
      sanitizedFields[key] = sanitizeInput(val);
    } else if (typeof val === 'number') {
      sanitizedFields[key] = isNaN(val) ? 0 : val;
    } else if (Array.isArray(val)) {
      sanitizedFields[key] = val.map((item) => (typeof item === 'string' ? sanitizeInput(item) : item));
    } else if (typeof val === 'boolean') {
      sanitizedFields[key] = val;
    }
  }

  try {
    // 5. Eksekusi mutasi aman ke Sanity secara headless
    const updated = await client.patch(docId).set(sanitizedFields).commit();

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Perubahan berhasil disimpan.',
        updatedId: updated._id,
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (err: any) {
    return new Response(
      JSON.stringify({ success: false, message: 'Gagal memperbarui data di server.', error: err.message }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
