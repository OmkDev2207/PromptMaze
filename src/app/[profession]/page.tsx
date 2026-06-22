import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getProfessionBySlug, professions } from '@/lib/data/professions';
import { getCategoriesByProfession } from '@/lib/data/categories';
import { getPromptsByProfession } from '@/lib/data/prompts';
import { getGuidesByProfession } from '@/lib/data/guides';
import { generatePSEOContent } from '@/lib/utils/pSEO';
import { parseMarkdown } from '@/lib/utils/markdown';
import PromptCard from '@/components/prompt/PromptCard';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import AdSenseSlot from '@/components/ui/AdSenseSlot';
import ContinueReading from '@/components/layout/ContinueReading';
import Newsletter from '@/components/ui/Newsletter';
import CollapsibleSEOText from '@/components/ui/CollapsibleSEOText';
import { GraduationCap, Code, Megaphone, Users, BookOpen, BarChart3, Compass, Sparkles, ArrowRight, HelpCircle, ChevronRight } from 'lucide-react';

interface HubProps {
  params: Promise<{
    profession: string;
  }>;
}

export async function generateStaticParams() {
  return professions.map((p) => ({
    profession: p.slug,
  }));
}

export async function generateMetadata({ params }: HubProps): Promise<Metadata> {
  const { profession: professionSlug } = await params;
  const p = getProfessionBySlug(professionSlug);
  if (!p) return {};

  const cats = getCategoriesByProfession(p.slug).map(c => c.name.toLowerCase()).join(', ');
  const title = `${p.name} AI Prompts (2026) | Best ChatGPT Prompts for ${p.name}`;
  const description = `Discover 100+ AI prompts for ${p.name.toLowerCase()} including ${cats}. Optimize your workflows and master prompt engineering today.`;

  return {
    title,
    description,
    alternates: {
      canonical: `/${p.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://promptmaze.vercel.app/${p.slug}`,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

export default async function ProfessionHub({ params }: HubProps) {
  const { profession: professionSlug } = await params;
  const p = getProfessionBySlug(professionSlug);
  if (!p) {
    notFound();
  }

  const categories = getCategoriesByProfession(p.slug);
  const prompts = getPromptsByProfession(p.slug);
  const guides = getGuidesByProfession(p.slug);

  // Generate 1,800+ words of content using our programmatic SEO utility
  const pseo = generatePSEOContent(p.slug, p.name);
  const parsedIntro = parseMarkdown(pseo.introduction);
  const parsedBeginner = parseMarkdown(pseo.beginnerSection);
  const parsedAdvanced = parseMarkdown(pseo.advancedSection);
  const parsedNiche = parseMarkdown(pseo.nicheSection);

  // Recommendations for ContinueReading grid
  const relatedPrompts = prompts.filter(pr => pr.featured).slice(0, 4);
  const relatedGuides = guides.slice(0, 3);
  const relatedProfessions = professions
    .filter((prof) => prof.id !== p.id)
    .slice(0, 4);

  const getIcon = (id: string, className = "h-8 w-8") => {
    switch (id) {
      case 'teachers': return <GraduationCap className={className} />;
      case 'developers': return <Code className={className} />;
      case 'marketers': return <Megaphone className={className} />;
      case 'recruiters': return <Users className={className} />;
      case 'students': return <BookOpen className={className} />;
      case 'accountants': return <BarChart3 className={className} />;
      default: return <Compass className={className} />;
    }
  };

  const breadcrumbs = [{ label: p.name }];

  // FAQ Schema (JSON-LD)
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': pseo.faqs.map((f) => ({
      '@type': 'Question',
      'name': f.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': f.answer,
      },
    })),
  };

  // CollectionPage Schema (JSON-LD)
  const collectionJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    'name': `${p.name} AI Prompts (2026) | Best ChatGPT Prompts for ${p.name}`,
    'description': p.description,
    'url': `https://promptmaze.vercel.app/${p.slug}`,
    'hasPart': prompts.slice(0, 10).map((pr) => ({
      '@type': 'HowTo',
      'name': pr.title,
      'description': pr.description,
    })),
  };

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* FAQ Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {/* CollectionPage Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />

      <Breadcrumbs items={breadcrumbs} />

      {/* Header Banner - Restyled for Premium SaaS Aesthetics */}
      <div className={`mt-4 overflow-hidden rounded-3xl bg-gradient-to-br ${p.gradient} p-8 text-white shadow-xl sm:p-12 relative`}>
        {/* Subtle decorative background glow */}
        <div className="absolute -right-10 -bottom-10 h-64 w-64 rounded-full bg-white/10 blur-3xl pointer-events-none" />
        
        {['teachers', 'developers', 'marketers', 'writers', 'emails'].includes(p.id) && (
          <img 
            src={`/images/${p.id}_banner.png`} 
            alt={`${p.name} Banner`} 
            className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay pointer-events-none"
          />
        )}
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold backdrop-blur-sm">
              <Sparkles className="h-3 w-3 fill-white" />
              Programmatic SEO Profession Hub
            </div>
            {/* Exactly one H1 per page */}
            <h1 className="mt-4 text-3xl font-black sm:text-5xl tracking-tight leading-tight">
              Best ChatGPT Prompts for {p.name}
            </h1>
            <p className="mt-4 text-sm sm:text-base text-white/90 leading-relaxed font-semibold">
              {p.longDescription || p.description}
            </p>
          </div>
          <div className="hidden md:flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 text-white shadow-inner">
            {getIcon(p.id, "h-12 w-12")}
          </div>
        </div>
      </div>

      {/* AdSense Top slot */}
      <AdSenseSlot slot={`${p.id}-hub-top`} variant="banner" />

      {/* Word Count & Stats Badge for SEO */}
      <div className="mt-6 flex flex-wrap gap-3 text-[10px] sm:text-xs font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">
        <span className="rounded-xl bg-white border border-zinc-200/80 px-3 py-2 dark:bg-zinc-900/40 dark:border-zinc-800/80 shadow-sm">
          📄 {pseo.wordCount} words of expert documentation
        </span>
        <span className="rounded-xl bg-white border border-zinc-200/80 px-3 py-2 dark:bg-zinc-900/40 dark:border-zinc-800/80 shadow-sm">
          ⚡ {prompts.length} prompt templates tested
        </span>
      </div>

      {/* Multi-Column Desktop Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        
        {/* Left Column: Main Hub Contents (col-span-2) */}
        <div className="lg:col-span-2 flex flex-col gap-10">
          
          {/* Introduction Content */}
          <CollapsibleSEOText 
            htmlContent={parsedIntro} 
            title={`AI Prompts for ${p.name} — Overview`} 
            maxCollapsedHeight="220px" 
          />

          {/* Categories Listing */}
          <section>
            <div>
              <h2 className="text-xl font-black tracking-tight text-zinc-900 dark:text-zinc-50">
                {p.name} AI Prompt Categories
              </h2>
              <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400 font-semibold">
                Explore specialized sub-categories addressing target administrative flows and day-to-day routines.
              </p>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {categories.map((cat) => {
                const count = prompts.filter((pr) => pr.categorySlug === cat.slug).length;
                return (
                  <Link
                    key={cat.id}
                    href={`/${p.slug}/${cat.slug}`}
                    className="group flex flex-col justify-between rounded-2xl border border-zinc-200/80 bg-white p-5 shadow-sm hover:border-zinc-300 hover:shadow-md transition-all duration-300 dark:border-zinc-800/80 dark:bg-zinc-900/40 dark:hover:border-zinc-700 backdrop-blur-md"
                  >
                    <div>
                      <div className="flex items-start justify-between">
                        <span className="text-2xl">{cat.icon}</span>
                        <span className="rounded-full bg-violet-50 dark:bg-violet-950/20 px-2 py-0.5 text-[10px] font-bold text-violet-600 dark:text-violet-400">
                          {count} Prompts
                        </span>
                      </div>
                      <h3 className="mt-4 text-base font-bold text-zinc-900 dark:text-zinc-50 group-hover:text-violet-650 dark:group-hover:text-violet-400 transition-colors">
                        {cat.name}
                      </h3>
                      <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400 line-clamp-2 leading-relaxed">
                        {cat.description}
                      </p>
                    </div>
                    <div className="mt-4 flex items-center gap-1 text-[11px] font-bold text-violet-600 dark:text-violet-400">
                      Browse Templates
                      <ArrowRight className="h-3 w-3 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>

          {/* Beginner Guide Section */}
          <CollapsibleSEOText 
            htmlContent={parsedBeginner} 
            title={`Beginner Prompting Guide for ${p.name}`} 
            maxCollapsedHeight="220px" 
          />

          {/* AdSense Mid page slot */}
          <AdSenseSlot slot={`${p.id}-hub-middle`} />

          {/* Advanced Guide Section */}
          <CollapsibleSEOText 
            htmlContent={parsedAdvanced} 
            title={`Advanced Prompting & Workflows`} 
            maxCollapsedHeight="220px" 
          />

          {/* Niche Target / Search Intent Focus Section */}
          <CollapsibleSEOText 
            htmlContent={parsedNiche} 
            title={`Niche Scenarios & Custom Prompts`} 
            maxCollapsedHeight="220px" 
          />

          {/* Prompt Library Segment */}
          <section>
            <div className="flex items-center justify-between border-b border-zinc-200/80 pb-3 dark:border-zinc-800/80">
              <h2 className="text-xl font-black tracking-tight text-zinc-900 dark:text-zinc-50">
                {p.name} ChatGPT Prompt Library
              </h2>
              <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Tested Templates</span>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {prompts.filter(pr => pr.featured).slice(0, 6).map((prompt) => (
                <PromptCard key={prompt.id} prompt={prompt} />
              ))}
            </div>
          </section>

          {/* FAQs Section */}
          <section className="bg-white rounded-3xl border border-zinc-200/80 p-6 sm:p-8 dark:border-zinc-800/80 dark:bg-zinc-900/40 backdrop-blur-md">
            <h2 className="text-lg font-black text-zinc-900 dark:text-zinc-50 mb-4">
              Frequently Asked Questions (FAQs)
            </h2>
            <div className="space-y-4">
              {pseo.faqs.map((faq, idx) => (
                <div key={idx} className="border-b border-zinc-100 dark:border-zinc-850 pb-3 last:border-0 last:pb-0">
                  <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
                    {faq.question}
                  </h3>
                  <p className="mt-1 text-xs text-zinc-550 dark:text-zinc-400 leading-relaxed font-semibold">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>

        </div>

        {/* Right Column: Sidebar Widgets (col-span-1) */}
        <div className="flex flex-col gap-6">
          
          {/* AdSense Sidebar Top slot */}
          <AdSenseSlot slot={`${p.id}-sidebar-top`} variant="sidebar" />

          {/* AdSense Sidebar Bottom slot */}
          <AdSenseSlot slot={`${p.id}-sidebar-bottom`} variant="sidebar" />

          {/* Newsletter Signup widget */}
          <div className="rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-sm dark:border-zinc-800/80 dark:bg-zinc-900/40 backdrop-blur-md">
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
              Stay Updated
            </h3>
            <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed font-semibold">
              Get the latest {p.name.toLowerCase()} prompts and tutorials sent straight to your inbox.
            </p>
            <div className="mt-4">
              <Newsletter />
            </div>
          </div>

          {/* Featured/Trending Guides */}
          {guides.length > 0 && (
            <div className="rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-sm dark:border-zinc-800/80 dark:bg-zinc-900/40 backdrop-blur-md">
              <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                AI Learning Guides
              </h3>
              <div className="mt-4 flex flex-col gap-4">
                {guides.slice(0, 3).map((guide) => (
                  <Link
                    key={guide.id}
                    href={`/guides/${guide.slug}`}
                    className="group flex flex-col gap-1 rounded-xl p-2 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors"
                  >
                    <span className="text-[9px] font-bold text-zinc-400 uppercase">{guide.readTimeMinutes} Min Read</span>
                    <h4 className="text-xs font-bold text-zinc-855 group-hover:text-violet-600 dark:text-zinc-250 dark:group-hover:text-violet-400 transition-colors line-clamp-1">
                      {guide.title}
                    </h4>
                    <p className="text-[11px] text-zinc-500 line-clamp-2 dark:text-zinc-400">
                      {guide.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Popular prompts side-widget */}
          <div className="rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-sm dark:border-zinc-800/80 dark:bg-zinc-900/40 backdrop-blur-md">
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
              Popular Prompts
            </h3>
            <div className="mt-4 flex flex-col gap-4">
              {prompts.filter(pr => pr.featured).slice(0, 3).map((item) => (
                <Link
                  key={item.id}
                  href={`/prompt/${item.slug}`}
                  className="group flex flex-col gap-1 rounded-xl p-2 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors"
                >
                  <h4 className="text-xs font-bold text-zinc-800 group-hover:text-violet-600 dark:text-zinc-200 dark:group-hover:text-violet-400 transition-colors line-clamp-1">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-zinc-500 line-clamp-2 dark:text-zinc-400 leading-normal">
                    {item.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>

        </div>
        
      </div>

      {/* AdSense Bottom slot */}
      <AdSenseSlot slot={`${p.id}-hub-bottom`} variant="banner" />

      {/* Continue Reading Recommendation Grid (6-12 pages) */}
      <ContinueReading
        prompts={relatedPrompts}
        guides={relatedGuides}
        professions={relatedProfessions}
        categories={categories.slice(0, 3)}
        title="More AI Knowledge Centers"
        subtitle="Browse other professional hubs, read comprehensive prompt engineering guides, or explore prompt macros."
      />

    </div>
  );
}
