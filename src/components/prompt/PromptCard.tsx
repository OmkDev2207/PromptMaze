'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Copy, Check, ArrowRight } from 'lucide-react';
import type { Prompt } from '@/types';
import PremiumBadge from '../ui/PremiumBadge';

interface PromptCardProps {
  prompt: Prompt;
  isPremium?: boolean;
}

export default function PromptCard({ prompt, isPremium = false }: PromptCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(prompt.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    window.dispatchEvent(
      new CustomEvent('copy-success', {
        detail: { title: prompt.title }
      })
    );
  };

  const getDifficultyColor = (diff: string) => {
    switch (diff) {
      case 'beginner': return 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/30 dark:text-emerald-400 dark:border-emerald-900/50';
      case 'intermediate': return 'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/30 dark:text-amber-400 dark:border-amber-900/50';
      case 'advanced': return 'bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-950/30 dark:text-rose-400 dark:border-rose-900/50';
      default: return 'bg-zinc-50 text-zinc-700 border-zinc-200 dark:bg-zinc-950/30 dark:text-zinc-400 dark:border-zinc-900/50';
    }
  };

  const getProfessionColor = (prof: string) => {
    switch (prof) {
      case 'teachers': return 'bg-blue-50 text-blue-700 dark:bg-blue-950/30 dark:text-blue-400';
      case 'developers': return 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-400';
      case 'marketers': return 'bg-purple-50 text-purple-700 dark:bg-purple-950/30 dark:text-purple-400';
      case 'recruiters': return 'bg-orange-50 text-orange-700 dark:bg-orange-950/30 dark:text-orange-400';
      case 'students': return 'bg-yellow-50 text-yellow-700 dark:bg-yellow-950/30 dark:text-yellow-400';
      case 'accountants': return 'bg-teal-50 text-teal-700 dark:bg-teal-950/30 dark:text-teal-400';
      default: return 'bg-zinc-50 text-zinc-700 dark:bg-zinc-950/30 dark:text-zinc-400';
    }
  };

  return (
    <div className="group relative flex flex-col justify-between rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm hover:border-zinc-300 hover:shadow-md transition-all duration-300 dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-zinc-700">
      <div>
        {/* Header Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider ${getProfessionColor(prompt.professionSlug)}`}>
            {prompt.professionSlug}
          </span>
          <span className={`rounded-full border px-2.5 py-0.5 text-xs font-semibold capitalize ${getDifficultyColor(prompt.difficulty)}`}>
            {prompt.difficulty}
          </span>
          {isPremium && <PremiumBadge />}
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
          <Link href={`/prompt/${prompt.slug}`}>
            {prompt.title}
          </Link>
        </h3>

        {/* Description */}
        <p className="mt-2 text-sm text-zinc-500 line-clamp-2 dark:text-zinc-400">
          {prompt.description}
        </p>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-1">
          {prompt.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="text-xs text-zinc-400 dark:text-zinc-500">
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-6 flex items-center justify-between border-t border-zinc-100 pt-4 dark:border-zinc-800/80">
        <button
          onClick={handleCopy}
          className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
            copied
              ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-400'
              : 'bg-zinc-50 text-zinc-700 hover:bg-zinc-100 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700'
          }`}
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5" />
              Copied!
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5" />
              Copy Prompt
            </>
          )}
        </button>

        <Link
          href={`/prompt/${prompt.slug}`}
          className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
        >
          View Guide
          <ArrowRight className="h-3.5 w-3.5 transform group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
