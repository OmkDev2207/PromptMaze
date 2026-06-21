import { NextResponse } from 'next/server';

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

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
}
export const dynamic = 'force-static';
export const revalidate = 86400; // 24 hours
