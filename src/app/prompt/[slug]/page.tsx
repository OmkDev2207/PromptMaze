// src/app/prompt/[slug]/page.tsx
import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getPromptBySlug, getRelatedPrompts, prompts } from '@/lib/data/prompts';
import { getProfessionBySlug, professions } from '@/lib/data/professions';
import { getCategoryBySlug } from '@/lib/data/categories';
import { getGuidesByProfession } from '@/lib/data/guides';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import AdSenseSlot from '@/components/ui/AdSenseSlot';
import ClientPromptDetail from './ClientPromptDetail';
import ContinueReading from '@/components/layout/ContinueReading';
import Newsletter from '@/components/ui/Newsletter';
import RecentlyViewedSidebar from '@/components/prompt/RecentlyViewedSidebar';
import { ChevronRight, HelpCircle, Sparkles, TrendingUp, Award, Download } from 'lucide-react';

interface PromptProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return prompts.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: PromptProps): Promise<Metadata> {
  const { slug } = await params;
  const prompt = getPromptBySlug(slug);
  if (!prompt) return {};

  const p = getProfessionBySlug(prompt.professionSlug);
  const title = `${prompt.title} | AI Prompts for ${p ? p.name : 'Professionals'}`;
  const description = prompt.description;

  return {
    title,
    description,
    alternates: {
      canonical: `/prompt/${prompt.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://promptmaze.vercel.app/prompt/${prompt.slug}`,
      type: 'article',
    },
  };
}

export default async function PromptPage({ params }: PromptProps) {
  const { slug } = await params;
  const prompt = getPromptBySlug(slug);
  if (!prompt) {
    notFound();
  }

  const p = getProfessionBySlug(prompt.professionSlug);
  const cat = getCategoryBySlug(prompt.categorySlug, prompt.professionSlug);
  
  // Recommendations logic (Popular & Trending Prompts)
  const relatedPrompts = getRelatedPrompts(prompt, 4);
  
  // Popular prompts: general featured prompts
  const popularPrompts = prompts
    .filter(pr => pr.featured && pr.id !== prompt.id)
    .slice(0, 3);

  // Trending prompts: dynamic slice of prompts
  const trendingPrompts = prompts
    .filter(pr => pr.id !== prompt.id && !pr.featured)
    .slice(0, 3);

  const relatedGuides = getGuidesByProfession(prompt.professionSlug).slice(0, 3);
  const relatedProfessions = professions
    .filter((prof) => prof.id !== p?.id)
    .slice(0, 4);

  const breadcrumbs = [
    { label: p ? p.name : 'Profession', href: p ? `/${p.slug}` : undefined },
    { label: cat ? cat.name : 'Category', href: p && cat ? `/${p.slug}/${cat.slug}` : undefined },
    { label: prompt.title },
  ];

  // HowTo Schema (JSON-LD)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    'name': prompt.title,
    'description': prompt.description,
    'step': [
      {
        '@type': 'HowToStep',
        'name': 'Copy prompt',
        'text': 'Click the copy button to copy the prompt template to your clipboard.',
      },
      {
        '@type': 'HowToStep',
        'name': 'Fill in variables',
        'text': 'Paste the prompt into your AI tool (e.g. ChatGPT) and fill in the bracketed variables (e.g. [TOPIC], [SUBJECT]).',
      },
      {
        '@type': 'HowToStep',
        'name': 'Generate output',
        'text': 'Submit the prompt to receive the structured, professional response.',
      }
    ],
  };

  // FAQ Data
  const promptFaqs = [
    {
      question: `How do I use this "${prompt.title}" prompt template?`,
      answer: `To use this prompt, copy the template block using the copy button, then paste it into any major language model (e.g. ChatGPT, Claude, or Gemini). Make sure to replace all parameters wrapped in brackets (like [TOPIC] or [GRADE]) with your own details.`
    },
    {
      question: `Which AI model is recommended for "${prompt.title}"?`,
      answer: `We recommend using advanced reasoning models such as GPT-4o, Claude 3.5 Sonnet, or Gemini 1.5 Pro. These models have larger context windows and follow multi-step, constraint-heavy instructions with much higher precision.`
    },
    {
      question: `Can I customize the instructions in this prompt?`,
      answer: `Yes, you are encouraged to refine the prompt guidelines. Feel free to append your own specific constraints, brand guidelines, or tone preferences at the bottom of the prompt before submitting.`
    },
    {
      question: `Does this template require technical experience?`,
      answer: `Not at all. This prompt is written in natural, clear language using a professional role-based context framework. Anyone can run it instantly with zero coding or technical background required.`
    },
    {
      question: `How does the dynamic variable replacement work?`,
      answer: `The variables are placeholders. By filling them in, you provide the AI with target details (e.g. subject matter, language, or goals) to construct a highly personalized and contextual response.`
    }
  ];

  // FAQ Schema (JSON-LD)
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': promptFaqs.map((f) => ({
      '@type': 'Question',
      'name': f.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': f.answer,
      },
    })),
  };

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* HowTo Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* FAQ Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Breadcrumbs items={breadcrumbs} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-6">
        
        {/* Main Content (Left Col) */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <ClientPromptDetail prompt={prompt} />

          {/* Non-intrusive AdSense Slot between prompt details and example section */}
          <AdSenseSlot slot="prompt-detail-middle" variant="in-content" />

          {/* Example Output Box */}
          <div className="rounded-3xl border border-zinc-200/80 bg-white p-6 shadow-sm dark:border-zinc-800/80 dark:bg-zinc-900/40 backdrop-blur-md">
            <h2 className="text-lg font-black text-zinc-900 dark:text-zinc-50">
              Example Output
            </h2>
            <p className="mt-1 text-xs text-zinc-555 text-zinc-500 dark:text-zinc-450 leading-relaxed font-semibold">
              Sample response generated by an LLM (e.g. ChatGPT, Claude) using this template:
            </p>
            <div className="mt-4 overflow-x-auto rounded-2xl bg-zinc-950 p-6 font-mono text-xs leading-relaxed text-zinc-300 border border-zinc-850 whitespace-pre-wrap select-all">
              {prompt.exampleOutput}
            </div>
          </div>

          {/* FAQs Section */}
          <div className="rounded-3xl border border-zinc-200/80 bg-white p-6 shadow-sm dark:border-zinc-800/80 dark:bg-zinc-900/40 backdrop-blur-md">
            <h2 className="text-lg font-black text-zinc-900 dark:text-zinc-50 mb-4">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {promptFaqs.map((faq, idx) => (
                <div key={idx} className="border-b border-zinc-100 dark:border-zinc-800/60 pb-3 last:border-0 last:pb-0">
                  <h3 className="text-xs font-bold text-zinc-800 dark:text-zinc-200">{faq.question}</h3>
                  <p className="mt-1.5 text-xs text-zinc-500 leading-relaxed dark:text-zinc-400 font-medium">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar Info (Right Col) */}
        <div className="flex flex-col gap-6">
          
          {/* Metadata Card */}
          <div className="rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-sm dark:border-zinc-800/80 dark:bg-zinc-900/40 backdrop-blur-md">
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
              Prompt Parameters
            </h3>
            <div className="mt-4 space-y-4">
              <div>
                <span className="block text-[10px] font-bold text-zinc-400 uppercase">Target Profession</span>
                <Link
                  href={p ? `/${p.slug}` : '#'}
                  className="mt-1 inline-flex items-center gap-0.5 text-sm font-bold text-violet-650 hover:underline dark:text-violet-400"
                >
                  {p ? p.name : 'Unknown'}
                  <ChevronRight className="h-3.5 w-3.5" />
                </Link>
              </div>
              <hr className="border-zinc-100 dark:border-zinc-800/60" />
              <div>
                <span className="block text-[10px] font-bold text-zinc-400 uppercase">Category</span>
                <Link
                  href={p && cat ? `/${p.slug}/${cat.slug}` : '#'}
                  className="mt-1 inline-flex items-center gap-0.5 text-sm font-bold text-violet-650 hover:underline dark:text-violet-400"
                >
                  {cat ? cat.name : 'Unknown'}
                  <ChevronRight className="h-3.5 w-3.5" />
                </Link>
              </div>
              <hr className="border-zinc-100 dark:border-zinc-800/60" />
              <div>
                <span className="block text-[10px] font-bold text-zinc-400 uppercase">Difficulty Level</span>
                <span className="mt-1.5 inline-block rounded-full bg-violet-50 px-2.5 py-0.5 text-[10px] font-bold capitalize text-violet-600 dark:bg-violet-950/20 dark:text-violet-400">
                  {prompt.difficulty}
                </span>
              </div>
              <hr className="border-zinc-100 dark:border-zinc-800/60" />
              <div>
                <span className="block text-[10px] font-bold text-zinc-400 uppercase">Use Case Context</span>
                <p className="mt-1 text-xs text-zinc-500 leading-relaxed font-semibold dark:text-zinc-400">
                  {prompt.useCase}
                </p>
              </div>
            </div>
          </div>

          {/* Client-Side Recently Viewed Widget */}
          <RecentlyViewedSidebar />

          {/* Popular Prompts Sidebar Widget */}
          <div className="rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-sm dark:border-zinc-800/80 dark:bg-zinc-900/40 backdrop-blur-md">
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 flex items-center gap-1.5 border-b border-zinc-100 pb-3 dark:border-zinc-800/80">
              <Award className="h-4 w-4 text-amber-500" />
              Popular Prompts
            </h3>
            <div className="mt-4 flex flex-col gap-3">
              {popularPrompts.map((item) => (
                <Link
                  key={item.id}
                  href={`/prompt/${item.slug}`}
                  className="group block"
                >
                  <h4 className="text-xs font-bold text-zinc-800 group-hover:text-indigo-600 dark:text-zinc-250 dark:group-hover:text-indigo-400 transition-colors line-clamp-1">
                    {item.title}
                  </h4>
                  <span className="text-[9px] text-zinc-400 font-semibold uppercase tracking-wider block mt-0.5">
                    {item.professionSlug}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Non-intrusive AdSense Slot between widgets */}
          <AdSenseSlot slot="prompt-detail-sidebar-mid" variant="sidebar" />

          {/* Trending Prompts Sidebar Widget */}
          <div className="rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-sm dark:border-zinc-800/80 dark:bg-zinc-900/40 backdrop-blur-md">
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 flex items-center gap-1.5 border-b border-zinc-100 pb-3 dark:border-zinc-800/80">
              <TrendingUp className="h-4 w-4 text-indigo-500" />
              Trending Prompts
            </h3>
            <div className="mt-4 flex flex-col gap-3">
              {trendingPrompts.map((item) => (
                <Link
                  key={item.id}
                  href={`/prompt/${item.slug}`}
                  className="group block"
                >
                  <h4 className="text-xs font-bold text-zinc-800 group-hover:text-indigo-600 dark:text-zinc-250 dark:group-hover:text-indigo-400 transition-colors line-clamp-1">
                    {item.title}
                  </h4>
                  <span className="text-[9px] text-zinc-450 text-zinc-400 font-semibold uppercase tracking-wider block mt-0.5">
                    🔥 trending in {item.professionSlug}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Premium Packs Teaser Waitlist */}
          <div className="rounded-3xl border border-indigo-250/60 bg-gradient-to-br from-indigo-50/20 to-violet-50/20 p-6 dark:border-indigo-950/40 dark:from-indigo-950/20 dark:to-violet-950/20 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 p-2.5 bg-indigo-600 text-white text-[9px] font-black uppercase tracking-wider rounded-bl-xl flex items-center gap-1">
              <Download className="h-2.5 w-2.5" />
              V2
            </div>
            <h3 className="text-sm font-black text-zinc-900 dark:text-zinc-50">
              Future Premium Packs
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-zinc-650 dark:text-zinc-400 font-medium">
              Offline prompt bundles formatted for PDF, CSV, Notion, and Markdown:
            </p>
            <ul className="mt-3 space-y-1 text-xs text-zinc-700 dark:text-zinc-350 font-semibold">
              <li>💻 Developer Catalyst Pack</li>
              <li>📧 Enterprise Email Pack</li>
              <li>👔 Recruiter Screening Suite</li>
              <li>📢 Growth Marketing Pack</li>
              <li>🚀 Startup Founders Operations</li>
            </ul>
            
            <button className="mt-4 w-full rounded-xl bg-indigo-600 py-2.5 text-center text-xs font-bold text-white shadow hover:bg-indigo-500 transition-all active:scale-[0.98]">
              Join Waitlist (FREE)
            </button>
          </div>

          {/* Newsletter Widget */}
          <div className="rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-sm dark:border-zinc-800/80 dark:bg-zinc-900/40 backdrop-blur-md">
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
              Join Newsletter
            </h3>
            <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
              Get the weekly digest of standard prompts, guides, and tips directly in your inbox.
            </p>
            <div className="mt-4">
              <Newsletter />
            </div>
          </div>

        </div>
        
      </div>

      {/* Continue Reading Recommendation Grid (6-12 pages) */}
      <ContinueReading
        prompts={relatedPrompts}
        guides={relatedGuides}
        professions={relatedProfessions}
        title="Explore More AI Resources"
        subtitle="Keep reading related prompts, guidelines, and learning guides."
      />
    </div>
  );
}
