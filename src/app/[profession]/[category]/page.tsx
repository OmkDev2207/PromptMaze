import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getProfessionBySlug, professions } from '@/lib/data/professions';
import { getCategoryBySlug, categories } from '@/lib/data/categories';
import { getPromptsByCategory, getPromptsByProfession } from '@/lib/data/prompts';
import { getGuidesByProfession } from '@/lib/data/guides';
import PromptCard from '@/components/prompt/PromptCard';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import AdSenseSlot from '@/components/ui/AdSenseSlot';
import ContinueReading from '@/components/layout/ContinueReading';
import Newsletter from '@/components/ui/Newsletter';
import { Sparkles, HelpCircle, ChevronRight, BookOpen } from 'lucide-react';

interface CategoryProps {
  params: Promise<{
    profession: string;
    category: string;
  }>;
}

export async function generateStaticParams() {
  const paramsList: { profession: string; category: string }[] = [];
  categories.forEach((c) => {
    paramsList.push({
      profession: c.professionSlug,
      category: c.slug,
    });
  });
  return paramsList;
}

export async function generateMetadata({ params }: CategoryProps): Promise<Metadata> {
  const { profession: professionSlug, category: categorySlug } = await params;
  const p = getProfessionBySlug(professionSlug);
  const cat = getCategoryBySlug(categorySlug, professionSlug);
  if (!p || !cat) return {};

  const title = `${p.name} ${cat.name} AI Prompts (2026) | Best ChatGPT Prompts`;
  const description = `Discover battle-tested ChatGPT and AI prompts for ${p.name.toLowerCase()} specializing in ${cat.name.toLowerCase()}. Copy-paste optimized prompt templates.`;

  return {
    title,
    description,
    alternates: {
      canonical: `/${p.slug}/${cat.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://promptmaze.com/${p.slug}/${cat.slug}`,
      type: 'website',
    },
  };
}

export default async function CategoryPage({ params }: CategoryProps) {
  const { profession: professionSlug, category: categorySlug } = await params;
  const p = getProfessionBySlug(professionSlug);
  const cat = getCategoryBySlug(categorySlug, professionSlug);

  if (!p || !cat) {
    notFound();
  }

  const prompts = getPromptsByCategory(cat.slug, p.slug);

  const breadcrumbs = [
    { label: p.name, href: `/${p.slug}` },
    { label: cat.name },
  ];

  // Dynamic FAQs for the category
  const faqs = [
    {
      question: `What are the best AI prompts for ${p.name} ${cat.name}?`,
      answer: `The best prompts for ${p.name.toLowerCase()} in ${cat.name.toLowerCase()} are those that define clear roles, input parameters, and structural limitations. Using brackets for parameters (e.g. [TOPIC]) is highly recommended.`
    },
    {
      question: `How can ChatGPT help ${p.name.toLowerCase()} with ${cat.name.toLowerCase()}?`,
      answer: `ChatGPT can help by writing initial outlines, drafting templates, auditing documentation, and suggesting process improvements specific to ${cat.name.toLowerCase()} tasks.`
    },
    {
      question: `Can I customize these ${cat.name.toLowerCase()} prompts?`,
      answer: `Yes! Every prompt in our library features customizable bracketed variables. Simply copy the prompt, replace the brackets with your details, and submit to ChatGPT or Claude.`
    },
    {
      question: `Do these prompts support other AI tools besides ChatGPT?`,
      answer: `Absolutely. These prompts are engineered using standard language patterns and are highly effective in Claude, Gemini, Copilot, and other advanced LLMs.`
    },
    {
      question: `Is there a limit to how many times I can copy these templates?`,
      answer: `No. All our prompts are open-access and curated for the professional community to use without limits.`
    }
  ];

  // FAQ Schema JSON-LD
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqs.map((f) => ({
      '@type': 'Question',
      'name': f.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': f.answer,
      },
    })),
  };

  // Get related categories for links
  const relatedCategories = categories
    .filter((c) => c.professionSlug === p.slug && c.id !== cat.id)
    .slice(0, 5);

  // Recommendations for ContinueReading grid
  const relatedPrompts = getPromptsByProfession(p.slug).filter(pr => pr.categorySlug !== cat.slug).slice(0, 4);
  const relatedGuides = getGuidesByProfession(p.slug).slice(0, 3);
  const relatedProfessions = professions
    .filter((prof) => prof.id !== p.id)
    .slice(0, 4);

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* FAQ Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Breadcrumbs */}
      <Breadcrumbs items={breadcrumbs} />

      {/* Header section - Restyled for Premium SaaS Aesthetics */}
      <div className="mt-4 border-b border-zinc-200/80 pb-8 dark:border-zinc-800/80">
        <div className="flex items-center gap-4">
          <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-zinc-100 text-3xl shadow-sm dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/50">
            {cat.icon}
          </span>
          <div>
            {/* Exactly one H1 per page */}
            <h1 className="text-2xl font-black tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl leading-tight">
              Best AI Prompts for {p.name} {cat.name}
            </h1>
            <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400 font-semibold leading-relaxed">
              {cat.description}
            </p>
          </div>
        </div>
      </div>

      {/* AdSense Top slot */}
      <AdSenseSlot slot={`${p.id}-${cat.id}-top`} variant="banner" />

      {/* Multi-Column Desktop Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        
        {/* Left Column: Prompts List & FAQs (col-span-2) */}
        <div className="lg:col-span-2 flex flex-col gap-10">
          
          <section>
            <div className="flex items-center justify-between border-b border-zinc-150 pb-3 dark:border-zinc-800/80">
              <h2 className="text-base font-bold text-zinc-800 dark:text-zinc-200 uppercase tracking-wider">
                Available Templates ({prompts.length})
              </h2>
              <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Copy & Customise</span>
            </div>

            {prompts.length === 0 ? (
              <div className="mt-12 text-center py-10 bg-white dark:bg-zinc-900/40 rounded-3xl border border-zinc-200/80 dark:border-zinc-800/80">
                <HelpCircle className="mx-auto h-12 w-12 text-zinc-300 dark:text-zinc-700" />
                <h3 className="mt-4 text-base font-bold text-zinc-950 dark:text-zinc-50">No prompts found</h3>
                <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400 font-semibold">
                  We haven&apos;t added templates for this category yet. Check back soon!
                </p>
              </div>
            ) : (
              <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
                {prompts.map((prompt) => (
                  <PromptCard key={prompt.id} prompt={prompt} />
                ))}
              </div>
            )}
          </section>

          {/* AdSense Mid page slot */}
          <AdSenseSlot slot={`${p.id}-${cat.id}-middle`} />

          {/* FAQs Section */}
          <section className="bg-white rounded-3xl border border-zinc-200/80 p-6 sm:p-8 dark:border-zinc-800/80 dark:bg-zinc-900/40 backdrop-blur-md">
            <h2 className="text-lg font-black text-zinc-900 dark:text-zinc-50 mb-4">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
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
          
          {/* Other Categories for this Profession */}
          <div className="rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-sm dark:border-zinc-800/80 dark:bg-zinc-900/40 backdrop-blur-md">
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
              More {p.name} Sub-Hubs
            </h3>
            <div className="mt-4 flex flex-col gap-2">
              {relatedCategories.map((rc) => (
                <Link
                  key={rc.id}
                  href={`/${p.slug}/${rc.slug}`}
                  className="group flex items-center justify-between rounded-xl p-2 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors"
                >
                  <div className="flex items-center gap-2 overflow-hidden">
                    <span className="text-lg shrink-0">{rc.icon}</span>
                    <span className="text-xs font-bold text-zinc-800 group-hover:text-violet-600 dark:text-zinc-200 dark:group-hover:text-violet-400 transition-colors truncate">
                      {rc.name}
                    </span>
                  </div>
                  <ChevronRight className="h-3.5 w-3.5 text-zinc-400 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              ))}
            </div>
          </div>

          {/* AdSense Sidebar Top slot */}
          <AdSenseSlot slot={`${p.id}-${cat.id}-sidebar-top`} variant="sidebar" />

          {/* AdSense Sidebar Bottom slot */}
          <AdSenseSlot slot={`${p.id}-${cat.id}-sidebar-bottom`} variant="sidebar" />

          {/* Newsletter subscription widget */}
          <div className="rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-sm dark:border-zinc-800/80 dark:bg-zinc-900/40 backdrop-blur-md">
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
              Newsletter
            </h3>
            <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed font-semibold">
              Get standard prompts, tools, and guides delivered directly to your inbox weekly.
            </p>
            <div className="mt-4">
              <Newsletter />
            </div>
          </div>

        </div>
        
      </div>

      {/* AdSense Bottom slot */}
      <AdSenseSlot slot={`${p.id}-${cat.id}-bottom`} variant="banner" />

      {/* Continue Reading Recommendation Grid (6-12 pages) */}
      <ContinueReading
        prompts={relatedPrompts}
        guides={relatedGuides}
        professions={relatedProfessions}
        title="More AI resources"
        subtitle="Keep reading to improve your prompt workflows."
      />

    </div>
  );
}
