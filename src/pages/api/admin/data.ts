import type { APIRoute } from 'astro';
import { verifySessionToken } from '../../../lib/security';
import { createClient } from '@sanity/client';

export const prerender = false;

const client = createClient({
  projectId: process.env.PUBLIC_SANITY_PROJECT_ID || '7ox4kuc2',
  dataset: process.env.PUBLIC_SANITY_DATASET || 'production',
  token: process.env.SANITY_API_TOKEN || 'skLaYJo6mRQU2kCkw5lavyXehPFy1uNlrOmoYaavfPZGbZ4QLHmkJr4FbSjPhfq4dacplttQfeW9nA2ZKOKP8kpd2cwQiVU5TuQwa3mIZYRV0nv2cODlowzUR7A5GlmrIPBNq8hg99QKUuEbESJprYw6gfUs6sHQoz9yQbfqU3kyXAMIA7Kb',
  apiVersion: '2024-01-01',
  useCdn: false,
});

export const GET: APIRoute = async ({ request, cookies }) => {
  const token =
    cookies.get('baluran_admin_session')?.value ||
    request.headers.get('authorization')?.replace('Bearer ', '');

  // Anti-IDOR / Unauthorized Access
  if (!verifySessionToken(token)) {
    return new Response(
      JSON.stringify({ success: false, message: 'Sesi tidak valid atau telah berakhir.' }),
      { status: 401, headers: { 'Content-Type': 'application/json' } }
    );
  }

  try {
    const [siteSettings, packages, destinations, fleet, testimonials, faqs] = await Promise.all([
      client.fetch(`*[_type == "siteSettings"][0]`),
      client.fetch(`*[_type == "tourPackage"] | order(order asc)`),
      client.fetch(`*[_type == "destination"] | order(order asc)`),
      client.fetch(`*[_type == "fleet"] | order(order asc)`),
      client.fetch(`*[_type == "testimonial"]`),
      client.fetch(`*[_type == "faq"] | order(order asc)`),
    ]);

    return new Response(
      JSON.stringify({
        success: true,
        data: {
          siteSettings: siteSettings || {},
          packages: packages || [],
          destinations: destinations || [],
          fleet: fleet || [],
          testimonials: testimonials || [],
          faqs: faqs || [],
        },
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (err: any) {
    return new Response(
      JSON.stringify({ success: false, message: 'Gagal mengambil data dari database.', error: err.message }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
