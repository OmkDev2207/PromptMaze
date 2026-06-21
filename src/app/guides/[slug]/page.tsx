import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getGuideBySlug, getGuides, guides } from '@/lib/data/guides';
import { getPromptsByProfession } from '@/lib/data/prompts';
import { professions, getProfessionBySlug } from '@/lib/data/professions';
import { parseMarkdown } from '@/lib/utils/markdown';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import AdSenseSlot from '@/components/ui/AdSenseSlot';
import ReadingProgress from '@/components/ui/ReadingProgress';
import TableOfContents from '@/components/ui/TableOfContents';
import ContinueReading from '@/components/layout/ContinueReading';
import Newsletter from '@/components/ui/Newsletter';
import { Calendar, Clock, ArrowLeft, ChevronRight, Sparkles, HelpCircle } from 'lucide-react';

interface GuidePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return guides.map((g) => ({
    slug: g.slug,
  }));
}

export async function generateMetadata({ params }: GuidePageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) return {};

  return {
    title: `${guide.title} | PromptMaze Guides`,
    description: guide.description,
    alternates: {
      canonical: `/guides/${guide.slug}`,
    },
    openGraph: {
      title: `${guide.title} | PromptMaze Guides`,
      description: guide.description,
      url: `https://promptmaze.com/guides/${guide.slug}`,
      type: 'article',
      publishedTime: guide.publishedAt,
    },
  };
}

export default async function GuideDetailPage({ params }: GuidePageProps) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) {
    notFound();
  }

  const p = getProfessionBySlug(guide.professionSlug || '');

  // Get related guides (exclude current one)
  const relatedGuides = getGuides()
    .filter((g) => g.id !== guide.id && (g.professionSlug === guide.professionSlug || !g.professionSlug))
    .slice(0, 3);

  // Get related prompts
  const relatedPrompts = getPromptsByProfession(guide.professionSlug || 'teachers').slice(0, 4);

  // Related professions for linking
  const relatedProfessions = professions
    .filter((prof) => prof.slug !== guide.professionSlug)
    .slice(0, 4);

  const breadcrumbs = [
    { label: 'AI Guides', href: '/guides' },
    { label: guide.title },
  ];

  const parsedHtml = parseMarkdown(guide.content);

  // Structured Data (JSON-LD Article)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    'headline': guide.title,
    'description': guide.description,
    'inLanguage': 'en',
    'datePublished': guide.publishedAt,
    'wordCount': guide.content.split(/\s+/).length,
    'author': {
      '@type': 'Organization',
      'name': 'PromptMaze Team',
      'url': 'https://promptmaze.com',
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'PromptMaze',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://promptmaze.com/logo.png',
      },
    },
  };

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* JSON-LD Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Reading Progress Indicator */}
      <ReadingProgress />

      <Breadcrumbs items={breadcrumbs} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-6">
        
        {/* Main Content Area (Left/Middle Col) */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          
          {/* Mobile TOC: Only shows on mobile */}
          <div className="block lg:hidden">
            <TableOfContents />
          </div>

          <article className="rounded-3xl border border-zinc-200/80 bg-white p-6 shadow-sm sm:p-10 dark:border-zinc-800/80 dark:bg-zinc-900/40 backdrop-blur-md">
            
            {/* Header info */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-zinc-400 dark:text-zinc-500">
              <span className="inline-flex items-center gap-1">
                <Clock className="h-3.5 w-3.5 text-violet-500" />
                {guide.readTimeMinutes} Min Read
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700"></span>
              <span className="inline-flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5 text-violet-500" />
                {guide.publishedAt}
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700"></span>
              <span className="rounded-full bg-violet-50 dark:bg-violet-950/20 px-2 py-0.5 text-[10px] uppercase tracking-wider text-violet-600 dark:text-violet-400">
                {guide.difficulty}
              </span>
            </div>

            {/* Title - Single H1 */}
            <h1 className="mt-4 text-3xl font-black tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl leading-tight">
              {guide.title}
            </h1>
            <p className="mt-4 text-lg text-zinc-500 dark:text-zinc-400 leading-relaxed font-medium">
              {guide.description}
            </p>

            <hr className="my-8 border-zinc-200/80 dark:border-zinc-800/80" />

            {/* AdSense Top slot */}
            <AdSenseSlot slot="guide-article-top" variant="banner" />

            {/* Markdown rendered HTML body */}
            <div
              className="prose prose-zinc max-w-none dark:prose-invert mt-6
                prose-h2:text-xl prose-h2:font-extrabold prose-h2:text-zinc-900 dark:prose-h2:text-zinc-50 prose-h2:mt-8 prose-h2:mb-4 prose-h2:border-b prose-h2:border-zinc-200/60 dark:prose-h2:border-zinc-800/60 prose-h2:pb-2
                prose-h3:text-lg prose-h3:font-bold prose-h3:text-zinc-800 dark:prose-h3:text-zinc-100 prose-h3:mt-6 prose-h3:mb-2
                prose-p:text-sm prose-p:leading-relaxed prose-p:text-zinc-600 dark:prose-p:text-zinc-400
                prose-code:bg-zinc-100 dark:prose-code:bg-zinc-950 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-violet-600 dark:prose-code:text-violet-400 prose-code:font-mono prose-code:text-xs prose-code:font-semibold
                prose-pre:bg-zinc-50 dark:prose-pre:bg-zinc-950 prose-pre:border dark:prose-pre:border-zinc-800/80 prose-pre:p-4 prose-pre:rounded-2xl"
              dangerouslySetInnerHTML={{ __html: parsedHtml }}
            />

            {/* AdSense Bottom slot */}
            <AdSenseSlot slot="guide-article-bottom" variant="in-content" />

            {/* Tags */}
            <div className="mt-12 flex flex-wrap gap-2 border-t border-zinc-200/80 pt-6 dark:border-zinc-800/80">
              {guide.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-lg bg-zinc-50 border border-zinc-200 px-3 py-1 text-xs font-semibold text-zinc-500 dark:bg-zinc-900 dark:border-zinc-800 dark:text-zinc-400"
                >
                  #{tag}
                </span>
              ))}
            </div>

          </article>

          {/* Back button */}
          <div className="flex">
            <Link
              href="/guides"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-zinc-500 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to all guides
            </Link>
          </div>
        </div>

        {/* Sidebar Panel (Right Col) */}
        <div className="flex flex-col gap-6">
          
          {/* Table of Contents: Desktop Only */}
          <div className="hidden lg:block">
            <TableOfContents />
          </div>

          {/* Guide Metadata / Info */}
          <div className="rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-sm dark:border-zinc-800/80 dark:bg-zinc-900/40 backdrop-blur-md">
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
              Prerequisites & Context
            </h3>
            <div className="mt-4 space-y-4">
              {guide.professionSlug && (
                <div>
                  <span className="block text-[10px] font-bold text-zinc-400 uppercase">Target Audience</span>
                  <Link
                    href={`/${guide.professionSlug}`}
                    className="mt-1 inline-flex items-center gap-1 text-sm font-bold text-violet-600 hover:underline dark:text-violet-400 capitalize"
                  >
                    {p ? p.name : guide.professionSlug} Hub
                    <ChevronRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              )}
              <div>
                <span className="block text-[10px] font-bold text-zinc-400 uppercase">Setup Required</span>
                <p className="mt-1 text-xs font-medium text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  Requires access to an advanced LLM like ChatGPT (GPT-4o), Claude 3.5 Sonnet, or Gemini 1.5 Pro.
                </p>
              </div>
            </div>
          </div>

          {/* AdSense Sidebar Top slot */}
          <AdSenseSlot slot="guide-detail-sidebar-top" variant="sidebar" />

          {/* AdSense Sidebar Bottom slot */}
          <AdSenseSlot slot="guide-detail-sidebar-bottom" variant="sidebar" />

          {/* Newsletter Signup widget */}
          <div className="rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-sm dark:border-zinc-800/80 dark:bg-zinc-900/40 backdrop-blur-md">
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
              Weekly Newsletter
            </h3>
            <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
              Get battle-tested ChatGPT prompts and engineering guides delivered directly to your inbox.
            </p>
            <div className="mt-4">
              <Newsletter />
            </div>
          </div>

          {/* Related Guides List */}
          <div className="rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-sm dark:border-zinc-800/80 dark:bg-zinc-900/40 backdrop-blur-md">
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
              Related Tutorials
            </h3>
            <div className="mt-4 flex flex-col gap-4">
              {relatedGuides.map((item) => (
                <Link
                  key={item.id}
                  href={`/guides/${item.slug}`}
                  className="group flex flex-col gap-1 rounded-xl p-2 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors"
                >
                  <h4 className="text-xs font-bold text-zinc-850 group-hover:text-violet-600 dark:text-zinc-200 dark:group-hover:text-violet-400 transition-colors line-clamp-1">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-zinc-500 line-clamp-2 dark:text-zinc-400">
                    {item.description}
                  </p>
                </Link>
              ))}
              {relatedGuides.length === 0 && (
                <p className="text-xs text-zinc-400 italic">No other related guides published.</p>
              )}
            </div>
          </div>

        </div>
        
      </div>

      {/* Continue Reading Recommendation Grid (6-12 pages) */}
      <ContinueReading
        prompts={relatedPrompts}
        guides={relatedGuides}
        professions={relatedProfessions}
        title="More AI Resources for You"
        subtitle="Keep exploring to master prompts, models, and workflows."
      />

    </div>
  );
}
