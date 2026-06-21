// src/app/emails/[category]/page.tsx
import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import AdSenseSlot from '@/components/ui/AdSenseSlot';
import EmailPromptCard from '@/components/prompt/EmailPromptCard';
import { emailCategories, getEmailCategoryBySlug, getEmailPromptsByCategory, emailPrompts } from '@/lib/data/emails';
import { HelpCircle, ArrowRight, Sparkles, Mail } from 'lucide-react';

interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

export async function generateStaticParams() {
  return emailCategories.map((cat) => ({
    category: cat.slug,
  }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category: slug } = await params;
  const cat = getEmailCategoryBySlug(slug);
  if (!cat) return {};

  return {
    title: cat.seoTitle,
    description: cat.seoDescription,
    alternates: {
      canonical: `/emails/${cat.slug}`,
    },
    openGraph: {
      title: cat.seoTitle,
      description: cat.seoDescription,
      url: `https://promptmaze.vercel.app/emails/${cat.slug}`,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: cat.seoTitle,
      description: cat.seoDescription,
    },
  };
}

export default async function EmailCategoryPage({ params }: CategoryPageProps) {
  const { category: slug } = await params;
  const cat = getEmailCategoryBySlug(slug);
  if (!cat) {
    notFound();
  }

  const categoryPrompts = getEmailPromptsByCategory(cat.slug);
  const firstPrompt = categoryPrompts[0];

  // Related Prompts (from other categories)
  const relatedPrompts = emailPrompts
    .filter((p) => p.categorySlug !== cat.slug)
    .slice(0, 4);

  const breadcrumbs = [
    { label: 'Email Prompts', href: '/emails' },
    { label: cat.name }
  ];

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <Breadcrumbs items={breadcrumbs} />

      {/* Hero Banner */}
      <div className="mt-4 overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-650 to-violet-750 p-8 text-white shadow-xl sm:p-12 relative">
        <div className="absolute -right-10 -bottom-10 h-64 w-64 rounded-full bg-white/10 blur-3xl pointer-events-none" />
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold backdrop-blur-sm">
              <Mail className="h-3 w-3" />
              Email Prompt Category
            </div>
            <h1 className="mt-4 text-3xl font-black sm:text-5xl tracking-tight leading-tight">
              {cat.name}
            </h1>
            <p className="mt-4 text-sm sm:text-base text-white/90 leading-relaxed font-semibold">
              {cat.description}
            </p>
          </div>
          <div className="hidden md:flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 text-white shadow-inner">
            <span className="text-4xl">{cat.icon}</span>
          </div>
        </div>
      </div>

      <AdSenseSlot slot={`emails-${cat.slug}-top`} />

      {/* Split layout: main prompts vs sidebar overview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        
        {/* Main Column */}
        <div className="lg:col-span-2 flex flex-col gap-8">
          
          {/* Introduction Block */}
          <section className="bg-white rounded-3xl border border-zinc-200 p-6 sm:p-8 dark:border-zinc-800 dark:bg-zinc-900/40 backdrop-blur-md">
            <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-50 mb-3">
              About {cat.name}
            </h2>
            <p className="text-sm leading-relaxed text-zinc-650 dark:text-zinc-400">
              {cat.introduction}
            </p>
          </section>

          {/* Prompts list */}
          <section>
            <h2 className="text-xl font-black tracking-tight text-zinc-900 dark:text-zinc-50 mb-6">
              ChatGPT Prompt Templates for {cat.name}
            </h2>
            <div className="grid grid-cols-1 gap-6">
              {categoryPrompts.map((prompt) => (
                <EmailPromptCard key={prompt.id} prompt={prompt} />
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar Column */}
        <div className="flex flex-col gap-6">
          
          {/* Example Output Box */}
          {firstPrompt && (
            <div className="rounded-3xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/40">
              <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-50 flex items-center gap-1.5 border-b border-zinc-100 pb-3 dark:border-zinc-800/80">
                <Sparkles className="h-4 w-4 text-indigo-500" />
                Example Output Format
              </h3>
              <p className="mt-3 text-xs text-zinc-500 dark:text-zinc-400">
                A typical formatted email output generated by these templates:
              </p>
              <div className="mt-3 overflow-x-auto rounded-xl border border-zinc-150 bg-zinc-50 p-4 dark:border-zinc-850 dark:bg-zinc-950">
                <pre className="font-mono text-[10px] text-zinc-700 dark:text-zinc-300 whitespace-pre-wrap">
                  {firstPrompt.exampleOutput}
                </pre>
              </div>
            </div>
          )}

          {/* Related Categories & Prompts */}
          <div className="rounded-3xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/40">
            <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-50 border-b border-zinc-100 pb-3 dark:border-zinc-800/80">
              Related Email Categories
            </h3>
            <div className="mt-3 flex flex-col gap-2.5">
              {emailCategories
                .filter((c) => c.slug !== cat.slug)
                .slice(0, 5)
                .map((c) => (
                  <Link
                    key={c.slug}
                    href={`/emails/${c.slug}`}
                    className="flex items-center justify-between text-xs font-semibold text-zinc-600 hover:text-indigo-600 dark:text-zinc-450 dark:hover:text-indigo-400 transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <span>{c.icon}</span>
                      <span>{c.name}</span>
                    </span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                ))}
            </div>
          </div>

          {/* Related Prompts Grid List */}
          <div className="rounded-3xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/40">
            <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-50 border-b border-zinc-100 pb-3 dark:border-zinc-800/80">
              Related Prompts
            </h3>
            <div className="mt-3 flex flex-col gap-3">
              {relatedPrompts.map((p) => (
                <div key={p.id} className="group">
                  <Link
                    href={`/emails/${p.categorySlug}`}
                    className="text-xs font-bold text-zinc-800 group-hover:text-indigo-600 dark:text-zinc-200 dark:group-hover:text-indigo-400 block transition-colors"
                  >
                    {p.title}
                  </Link>
                  <span className="text-[9px] text-zinc-400 mt-0.5 block uppercase tracking-wider font-bold">
                    {p.categorySlug}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

      <AdSenseSlot slot={`emails-${cat.slug}-bottom`} />
    </div>
  );
}
