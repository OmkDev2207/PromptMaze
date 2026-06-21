import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { prompts } from '@/lib/data/prompts';

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://promptmaze.vercel.app';
  const currentDate = new Date().toISOString().split('T')[0];

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  // Append all prompts
  prompts.forEach((p) => {
    xml += `
  <url>
    <loc>${baseUrl}/prompt/${p.slug}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`;
  });

  xml += '\n</urlset>';

  // Write statically to public directory during build
  try {
    const publicDir = path.join(process.cwd(), 'public');
    if (fs.existsSync(publicDir)) {
      fs.writeFileSync(path.join(publicDir, 'prompts-sitemap.xml'), xml, 'utf-8');
    }
  } catch (e) {
    console.error('Failed to write prompts-sitemap.xml:', e);
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
