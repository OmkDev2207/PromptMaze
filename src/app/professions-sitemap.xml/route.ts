import { NextResponse } from 'next/server';
import { professions } from '@/lib/data/professions';
import { categories } from '@/lib/data/categories';

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://promptmaze.com';
  const currentDate = new Date().toISOString().split('T')[0];

  // Core URLs
  const coreUrls = [
    `${baseUrl}/`,
    `${baseUrl}/guides`,
    `${baseUrl}/generator`,
    `${baseUrl}/search`,
    `${baseUrl}/about`,
    `${baseUrl}/privacy`,
    `${baseUrl}/terms`
  ];

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  // Append core pages
  coreUrls.forEach((url) => {
    xml += `
  <url>
    <loc>${url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>`;
  });

  // Append professions
  professions.forEach((p) => {
    xml += `
  <url>
    <loc>${baseUrl}/${p.slug}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>`;
  });

  // Append categories
  categories.forEach((c) => {
    xml += `
  <url>
    <loc>${baseUrl}/${c.professionSlug}/${c.slug}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;
  });

  xml += '\n</urlset>';

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
}
export const dynamic = 'force-static';
export const revalidate = 86400;
