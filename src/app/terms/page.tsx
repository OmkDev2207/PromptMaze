import React from 'react';
import Breadcrumbs from '@/components/layout/Breadcrumbs';

export const metadata = {
  title: 'Terms of Service | PromptMaze',
  description: 'Read the terms and conditions for using PromptMaze templates and tools.',
  alternates: {
    canonical: '/terms',
  },
  openGraph: {
    title: 'Terms of Service | PromptMaze',
    description: 'Read the terms and conditions for using PromptMaze templates and tools.',
    url: 'https://promptmaze.vercel.app/terms',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms of Service | PromptMaze',
    description: 'Read the terms and conditions for using PromptMaze templates and tools.',
  },
};

export default function TermsPage() {
  const breadcrumbs = [{ label: 'Terms of Service' }];

  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
      <Breadcrumbs items={breadcrumbs} />
      <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50">
        Terms of Service
      </h1>
      <p className="mt-2 text-sm text-zinc-500">Last updated: June 20, 2026</p>
      
      <div className="prose prose-zinc dark:prose-invert mt-8 space-y-6 text-sm text-zinc-600 dark:text-zinc-400">
        <p>
          Welcome to PromptMaze! These terms and conditions outline the rules and regulations for the use of PromptMaze&apos;s Website, located at promptmaze.vercel.app.
        </p>

        <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-50 mt-6">License & Usage</h2>
        <p>
          Unless otherwise stated, PromptMaze and/or its licensors own the intellectual property rights for all material on PromptMaze. All intellectual property rights are reserved. You may access this from PromptMaze for your own personal and professional use subjected to restrictions set in these terms and conditions.
        </p>
        <p>
          You must not:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Republish material from PromptMaze in bulk datasets.</li>
          <li>Sell, rent, or sub-license material from PromptMaze.</li>
          <li>Reproduce, duplicate, or copy content from PromptMaze for competing commercial search sites.</li>
        </ul>

        <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-50 mt-6">Content Curations</h2>
        <p>
          All information, prompts, examples, and study resources on this site are curated content. We make no guarantees about the accuracy, reliability, or safety of executing these prompts in external environments or AI tools. Use at your own risk.
        </p>

        <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-50 mt-6">Limitations of Liability</h2>
        <p>
          In no event shall PromptMaze, nor any of its developers or writers, be held liable for anything arising out of or in any way connected with your use of this Website whether such liability is under contract.
        </p>
      </div>
    </div>
  );
}
