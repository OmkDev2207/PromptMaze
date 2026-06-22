import React from 'react';
import type { Metadata } from 'next';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import AdSenseSlot from '@/components/ui/AdSenseSlot';
import BuilderWorkspace from '@/components/builder/BuilderWorkspace';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://promptmaze.vercel.app';

export const metadata: Metadata = {
  title: 'AI Prompt Builder & Optimizer | Prompt Architect Studio',
  description: 'Build, optimize, and organize professional-grade AI prompts using our advanced Prompt Architect Studio. Injects system constraints, Chain of Thought, and few-shot examples automatically.',
  alternates: {
    canonical: `${siteUrl}/builder`,
  },
  openGraph: {
    title: 'AI Prompt Builder & Optimizer | Prompt Architect Studio',
    description: 'Build, optimize, and organize professional-grade AI prompts using our advanced Prompt Architect Studio.',
    url: `${siteUrl}/builder`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Prompt Builder & Optimizer | Prompt Architect Studio',
    description: 'Build, optimize, and organize professional-grade AI prompts using our advanced Prompt Architect Studio.',
  }
};

export default function BuilderPage() {
  const breadcrumbs = [{ label: 'Prompt Architect' }];

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Breadcrumbs */}
      <Breadcrumbs items={breadcrumbs} />

      {/* Header */}
      <div className="mt-4 border-b border-zinc-200 pb-8 dark:border-zinc-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
            AI Prompt Builder <span className="text-zinc-400 dark:text-zinc-600 font-normal">| Prompt Architect Studio</span>
          </h1>
          <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
            Create highly structured, professional-grade ChatGPT, Claude, and Gemini prompts using advanced engineering frameworks.
          </p>
        </div>
      </div>

      {/* AdSense Top slot */}
      <AdSenseSlot slot="builder-top" />

      {/* Interactive Builder Workspace */}
      <BuilderWorkspace />

      {/* AdSense Bottom slot */}
      <AdSenseSlot slot="builder-bottom" />
    </div>
  );
}
