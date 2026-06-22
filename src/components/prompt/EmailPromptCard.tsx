// src/components/prompt/EmailPromptCard.tsx
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Copy, Check, Sparkles, Share2, ExternalLink } from 'lucide-react';
import { EmailPrompt, getEmailCategoryBySlug } from '@/lib/data/emails';

interface EmailPromptCardProps {
  prompt: EmailPrompt;
}

export default function EmailPromptCard({ prompt }: EmailPromptCardProps) {
  const [copied, setCopied] = useState(false);
  const [shared, setShared] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const category = getEmailCategoryBySlug(prompt.categorySlug);

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(prompt.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleUsePrompt = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(prompt.content);
    // Open ChatGPT with the prompt prepopulated in query (if possible) or just open ChatGPT
    window.open(`https://chatgpt.com/?q=${encodeURIComponent(prompt.content)}`, '_blank');
  };

  const handleShare = (e: React.MouseEvent) => {
    e.preventDefault();
    const shareUrl = `${window.location.origin}/emails/${prompt.categorySlug}?prompt=${prompt.slug}`;
    if (navigator.share) {
      navigator.share({
        title: prompt.title,
        text: prompt.description,
        url: shareUrl
      }).catch(() => {
        // Fallback to clipboard
        navigator.clipboard.writeText(shareUrl);
        setShared(true);
        setTimeout(() => setShared(false), 2000);
      });
    } else {
      navigator.clipboard.writeText(shareUrl);
      setShared(true);
      setTimeout(() => setShared(false), 2000);
    }
  };

  return (
    <div className="group relative flex flex-col justify-between rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm hover:border-zinc-300 hover:shadow-md transition-all duration-300 dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-zinc-700">
      <div>
        {/* Header Category and Action Badges */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <Link
            href={`/emails/${prompt.categorySlug}`}
            className="inline-flex items-center gap-1 rounded-full bg-indigo-50 px-2.5 py-0.5 text-xs font-semibold text-indigo-750 dark:bg-indigo-950/30 dark:text-indigo-300 hover:underline"
          >
            <span>{category?.icon || '✉️'}</span>
            <span>{category?.name || prompt.categorySlug}</span>
          </Link>
          <span className="text-[10px] text-zinc-400 uppercase tracking-wider font-bold">
            Email Prompt
          </span>
        </div>

        {/* Prompt Title */}
        <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
          {prompt.title}
        </h3>

        {/* Description */}
        <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400 line-clamp-2">
          {prompt.description}
        </p>

        {/* Textarea Preview Container */}
        <div className="mt-4 relative">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">Prompt Framework</span>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-xs text-indigo-650 hover:text-indigo-750 dark:text-indigo-400 dark:hover:text-indigo-300 font-semibold"
            >
              {isExpanded ? 'Hide Details' : 'Show Details'}
            </button>
          </div>
          <div className={`relative overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950 transition-all duration-300 ${isExpanded ? 'h-auto max-h-[300px] overflow-y-auto' : 'h-[80px]'}`}>
            <pre className="p-3 font-mono text-xs text-zinc-700 dark:text-zinc-300 whitespace-pre-wrap select-all">
              {prompt.content}
            </pre>
            {!isExpanded && (
              <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-zinc-50 to-transparent dark:from-zinc-950 pointer-events-none" />
            )}
          </div>
        </div>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-1">
          {prompt.tags.map((tag) => (
            <span key={tag} className="text-xs text-zinc-400 dark:text-zinc-500">
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-zinc-100 pt-4 dark:border-zinc-800/80">
        <div className="flex items-center gap-2">
          {/* Copy Button */}
          <button
            onClick={handleCopy}
            className={`inline-flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-xs font-semibold shadow-sm transition-all ${
              copied
                ? 'bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-950/30 dark:text-emerald-400 dark:border-emerald-900/50'
                : 'bg-zinc-50 text-zinc-700 hover:bg-zinc-100 border border-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:border-zinc-700 dark:hover:bg-zinc-700'
            }`}
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5" />
                Copied
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5" />
                Copy Prompt
              </>
            )}
          </button>

          {/* Use Prompt Button */}
          <button
            onClick={handleUsePrompt}
            title="Copies prompt and opens ChatGPT in new tab"
            className="inline-flex items-center gap-1 rounded-xl border border-zinc-200 bg-white px-3.5 py-2 text-xs font-semibold text-zinc-700 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800"
          >
            <ExternalLink className="h-3.5 w-3.5" />
            Use Prompt
          </button>
        </div>

        <div className="flex items-center gap-2">
          {/* Open in Generator */}
          <Link
            href={`/generator?template=${prompt.slug}`}
            className="inline-flex items-center gap-1 rounded-xl bg-indigo-600 px-3.5 py-2 text-xs font-bold text-white shadow-sm hover:bg-indigo-500 active:scale-[0.98] transition-all"
          >
            <Sparkles className="h-3.5 w-3.5 fill-white" />
            Use in Generator
          </Link>

          {/* Share Button */}
          <button
            onClick={handleShare}
            className={`inline-flex items-center justify-center h-8 w-8 rounded-xl border transition-all ${
              shared
                ? 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/30 dark:text-emerald-400'
                : 'border-zinc-200 bg-white text-zinc-500 hover:bg-zinc-50 hover:text-zinc-800 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800'
            }`}
            title="Copy share link"
          >
            {shared ? <Check className="h-3.5 w-3.5" /> : <Share2 className="h-3.5 w-3.5" />}
          </button>
        </div>
      </div>
    </div>
  );
}
