// src/app/prompt/[slug]/ClientPromptDetail.tsx
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Copy, Check, Info, ExternalLink, Sparkles, Share2 } from 'lucide-react';
import type { Prompt } from '@/types';

interface ClientPromptDetailProps {
  prompt: Prompt;
}

export default function ClientPromptDetail({ prompt }: ClientPromptDetailProps) {
  const [copied, setCopied] = useState(false);
  const [shared, setShared] = useState(false);

  // Track Recently Viewed prompt on mount
  useEffect(() => {
    try {
      const recentlyViewed = JSON.parse(localStorage.getItem('recentlyViewed') || '[]');
      const updated = [
        { title: prompt.title, slug: prompt.slug, professionSlug: prompt.professionSlug },
        ...recentlyViewed.filter((item: any) => item.slug !== prompt.slug)
      ].slice(0, 5); // Keep last 5
      localStorage.setItem('recentlyViewed', JSON.stringify(updated));
      // Dispatch custom event to notify sidebar elements
      window.dispatchEvent(new Event('recently-viewed-updated'));
    } catch (e) {
      console.error('Failed to update recently viewed prompts in localStorage:', e);
    }
  }, [prompt.slug, prompt.title, prompt.professionSlug]);

  const handleCopy = () => {
    navigator.clipboard.writeText(prompt.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    window.dispatchEvent(
      new CustomEvent('copy-success', {
        detail: { title: prompt.title }
      })
    );
  };

  const handleUsePrompt = () => {
    navigator.clipboard.writeText(prompt.content);
    window.open(`https://chatgpt.com/?q=${encodeURIComponent(prompt.content)}`, '_blank');
  };

  const handleShare = () => {
    const shareUrl = `${window.location.origin}/prompt/${prompt.slug}`;
    if (navigator.share) {
      navigator.share({
        title: prompt.title,
        text: prompt.description,
        url: shareUrl
      }).catch(() => {
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
    <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/50">
      {/* Title & Description */}
      <h1 className="text-2xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-3xl">
        {prompt.title}
      </h1>
      <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
        {prompt.description}
      </p>

      {/* Tags badges */}
      <div className="mt-4 flex flex-wrap gap-1.5">
        {prompt.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-lg bg-zinc-50 border border-zinc-200/60 px-2 py-1 text-xs text-zinc-550 dark:bg-zinc-950 dark:border-zinc-850 dark:text-zinc-400 font-medium"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Copy Prompt Box */}
      <div className="relative mt-6">
        <div className="flex items-center justify-between rounded-t-2xl bg-zinc-100 px-4 py-3.5 text-xs font-bold text-zinc-700 border-x border-t border-zinc-200 dark:bg-zinc-950 dark:text-zinc-400 dark:border-zinc-800">
          <span className="uppercase tracking-wider">Prompt Template</span>
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 hover:text-zinc-950 dark:hover:text-zinc-250 transition-colors"
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5 text-emerald-500" />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5" />
                <span>Copy Template</span>
              </>
            )}
          </button>
        </div>

        {/* Large Text Container */}
        <div className="relative">
          <textarea
            readOnly
            value={prompt.content}
            onClick={(e) => (e.target as HTMLTextAreaElement).select()}
            className="h-[280px] w-full resize-none rounded-b-2xl border-x border-b border-zinc-200 bg-zinc-50/50 p-4 font-mono text-xs leading-relaxed text-zinc-800 focus:outline-none dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300"
          />

          {/* Action Row at Bottom */}
          <div className="absolute bottom-4 right-4 flex items-center gap-2">
            {/* Copy Button */}
            <button
              onClick={handleCopy}
              className={`flex items-center gap-1.5 rounded-xl px-4 py-2.5 text-xs font-bold shadow-md transition-all active:scale-[0.98] ${
                copied
                  ? 'bg-emerald-500 text-white shadow-emerald-500/20'
                  : 'bg-zinc-50 border border-zinc-200 text-zinc-750 hover:bg-zinc-100 dark:bg-zinc-800 dark:border-zinc-750 dark:text-zinc-250 dark:hover:bg-zinc-750'
              }`}
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4" />
                  Copied
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4" />
                  Copy
                </>
              )}
            </button>

            {/* Use Prompt Button */}
            <button
              onClick={handleUsePrompt}
              title="Copy prompt and open ChatGPT"
              className="flex items-center gap-1.5 rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-xs font-bold text-zinc-750 hover:bg-zinc-50 shadow-sm transition-all active:scale-[0.98] dark:border-zinc-850 dark:bg-zinc-900 dark:text-zinc-250 dark:hover:bg-zinc-850"
            >
              <ExternalLink className="h-4 w-4" />
              Use Prompt
            </button>

            {/* Use in Generator */}
            <Link
              href={`/generator?template=${prompt.slug}`}
              className="flex items-center gap-1.5 rounded-xl bg-indigo-650 px-4 py-2.5 text-xs font-bold text-white shadow-md shadow-indigo-500/20 hover:bg-indigo-600 transition-all active:scale-[0.98]"
            >
              <Sparkles className="h-4 w-4 fill-white" />
              Generator
            </Link>

            {/* Share Button */}
            <button
              onClick={handleShare}
              className={`flex h-9 w-9 items-center justify-center rounded-xl border transition-all ${
                shared
                  ? 'bg-emerald-50 border-emerald-250 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-400'
                  : 'border-zinc-200 bg-white text-zinc-550 hover:bg-zinc-50 dark:border-zinc-850 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800'
              }`}
              title="Share this prompt"
            >
              {shared ? <Check className="h-4 w-4" /> : <Share2 className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Helper Warning */}
      <div className="mt-4 flex gap-2.5 rounded-xl bg-zinc-50/50 p-4 text-xs text-zinc-550 dark:bg-zinc-900/60 dark:text-zinc-400 border border-zinc-150 dark:border-zinc-850 leading-relaxed font-semibold">
        <Info className="h-4 w-4 shrink-0 text-indigo-500" />
        <p>
          <strong>Usage Tip:</strong> Click the <strong>Use Prompt</strong> button to automatically copy the template and open ChatGPT in a new tab. You can also customize this template in the <strong>Interactive Generator</strong> to compile variables dynamically.
        </p>
      </div>
    </div>
  );
}
