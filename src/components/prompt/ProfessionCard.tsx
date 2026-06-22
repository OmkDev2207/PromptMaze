'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, Copy, Check } from 'lucide-react';
import type { Profession } from '@/types';

interface TopPromptSummary {
  title: string;
  slug: string;
  content: string;
}

interface ProfessionCardProps {
  profession: Profession;
  promptCount: number;
  topPrompts: TopPromptSummary[];
}

export default function ProfessionCard({ profession, promptCount, topPrompts }: ProfessionCardProps) {
  const [showPreview, setShowPreview] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty('--mouse-x', `${x}px`);
    cardRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  const handleCopy = (e: React.MouseEvent, content: string, title: string, index: number) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(content);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
    window.dispatchEvent(
      new CustomEvent('copy-success', {
        detail: { title }
      })
    );
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="glow-card group flex flex-col justify-between rounded-3xl border border-zinc-200/80 bg-white p-6 shadow-sm hover:border-zinc-300 hover:shadow-md transition-all duration-300 dark:border-zinc-800/80 dark:bg-zinc-900/40 dark:hover:border-zinc-700 backdrop-blur-md overflow-hidden relative"
    >
      <div className="relative z-10">
        
        {/* Top Badges */}
        <div className="flex items-start justify-between">
          <span className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${profession.gradient} text-2xl text-white shadow-md shadow-indigo-500/10`}>
            {profession.icon}
          </span>
          
          <button
            onClick={() => setShowPreview(!showPreview)}
            className="rounded-full bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200/60 dark:border-zinc-800 px-2.5 py-1 text-[10px] font-bold text-zinc-500 dark:text-zinc-400 hover:bg-violet-50 dark:hover:bg-violet-950/20 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
          >
            {showPreview ? 'Hide Previews' : 'Quick Preview'}
          </button>
        </div>

        {/* Title */}
        <h3 className="mt-5 text-lg font-bold text-zinc-900 dark:text-zinc-50 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
          <Link href={`/${profession.slug}`}>
            {profession.name}
          </Link>
        </h3>
        
        {/* Description */}
        <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed font-semibold">
          {profession.description}
        </p>

        {/* Quick Preview Dropdown Drawer */}
        {showPreview && (
          <div className="mt-4 border-t border-zinc-100 dark:border-zinc-800 pt-3 animate-fade-in-up">
            <span className="text-[9px] font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 flex items-center gap-1">
              <Sparkles className="h-3 w-3 text-violet-500 animate-spin" />
              Featured Prompt Templates
            </span>
            <div className="mt-2 flex flex-col gap-2">
              {topPrompts.map((p, idx) => (
                <div
                  key={p.slug}
                  className="flex items-center justify-between rounded-xl bg-zinc-50/50 p-2 hover:bg-zinc-50 border border-zinc-200/40 dark:bg-zinc-950/20 dark:hover:bg-zinc-950/40 dark:border-zinc-800/50"
                >
                  <Link
                    href={`/prompt/${p.slug}`}
                    className="text-[11px] font-bold text-zinc-800 hover:text-violet-600 dark:text-zinc-200 dark:hover:text-violet-400 transition-colors line-clamp-1 flex-1 pr-2"
                  >
                    {p.title}
                  </Link>
                  <button
                    onClick={(e) => handleCopy(e, p.content, p.title, idx)}
                    className="rounded p-1 text-zinc-400 hover:bg-zinc-200 hover:text-zinc-700 dark:hover:bg-zinc-900 transition-colors shrink-0"
                    title="Quick Copy Prompt"
                  >
                    {copiedIndex === idx ? (
                      <Check className="h-3.5 w-3.5 text-emerald-500" />
                    ) : (
                      <Copy className="h-3.5 w-3.5" />
                    )}
                  </button>
                </div>
              ))}
              {topPrompts.length === 0 && (
                <span className="text-[10px] text-zinc-400 italic">No prompt previews loaded.</span>
              )}
            </div>
          </div>
        )}

      </div>

      <div className="mt-6 flex items-center justify-between border-t border-zinc-100 dark:border-zinc-800/80 pt-4 relative z-10">
        <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">
          {promptCount} Templates Available
        </span>
        
        <Link
          href={`/${profession.slug}`}
          className="inline-flex items-center gap-1 text-xs font-bold text-violet-600 dark:text-violet-400 hover:underline"
        >
          Explore Hub
          <ArrowRight className="h-3.5 w-3.5 transform group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
