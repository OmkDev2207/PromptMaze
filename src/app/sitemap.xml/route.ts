import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://promptmaze.vercel.app';

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${baseUrl}/professions-sitemap.xml</loc>
  </sitemap>
  <sitemap>
    <loc>${baseUrl}/prompts-sitemap.xml</loc>
  </sitemap>
  <sitemap>
    <loc>${baseUrl}/guides-sitemap.xml</loc>
  </sitemap>
</sitemapindex>`.trim();

  // Write statically to public directory during build
  try {
    const publicDir = path.join(process.cwd(), 'public');
    if (fs.existsSync(publicDir)) {
      fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), xml, 'utf-8');
    }
  } catch (e) {
    console.error('Failed to write sitemap.xml:', e);
  }

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
}
export const dynamic = 'force-static';
export const revalidate = 86400; // 24 hours
