import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { guides } from '@/lib/data/guides';

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://promptmaze.vercel.app';
  const currentDate = new Date().toISOString().split('T')[0];

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  // Append all guides
  guides.forEach((g) => {
    xml += `
  <url>
    <loc>${baseUrl}/guides/${g.slug}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`;
  });

  xml += '\n</urlset>';

  // Write statically to public directory during build
  try {
    const publicDir = path.join(process.cwd(), 'public');
    if (fs.existsSync(publicDir)) {
      fs.writeFileSync(path.join(publicDir, 'guides-sitemap.xml'), xml, 'utf-8');
    }
  } catch (e) {
    console.error('Failed to write guides-sitemap.xml:', e);
  }

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
}
export const dynamic = 'force-static';
export const revalidate = 86400;
