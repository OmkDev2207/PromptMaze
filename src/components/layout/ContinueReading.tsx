'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, BookOpen, Sparkles, Compass } from 'lucide-react';
import type { Prompt, Guide, Profession } from '@/types';

interface ContinueReadingProps {
  prompts?: Prompt[];
  guides?: Guide[];
  professions?: Profession[];
  title?: string;
  subtitle?: string;
}

export default function ContinueReading({
  prompts = [],
  guides = [],
  professions = [],
  title = "Continue Reading",
  subtitle = "Expand your AI knowledge with related templates, tutorials, and roles."
}: ContinueReadingProps) {
  // Cap items to ensure we stay in 6-12 items range
  const displayPrompts = prompts.slice(0, 4);
  const displayGuides = guides.slice(0, 3);
  const displayProfessions = professions.slice(0, 4);

  const hasContent = displayPrompts.length > 0 || displayGuides.length > 0 || displayProfessions.length > 0;
  if (!hasContent) return null;

  return (
    <section className="mt-20 border-t border-zinc-200 pt-12 dark:border-zinc-800">
      <div className="text-center md:text-left">
        <h2 className="text-2xl font-black tracking-tight text-zinc-900 dark:text-zinc-50">
          {title}
        </h2>
        <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
          {subtitle}
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Recommended Guides */}
        {displayGuides.length > 0 && (
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 flex items-center gap-1.5">
              <BookOpen className="h-4 w-4 text-violet-500" />
              Guides & Tutorials
            </h3>
            <div className="flex flex-col gap-3">
              {displayGuides.map((guide) => (
                <Link
                  key={guide.id}
                  href={`/guides/${guide.slug}`}
                  className="group rounded-xl border border-zinc-200 bg-white p-4 shadow-sm hover:border-zinc-300 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-zinc-700 transition-all duration-200"
                >
                  <span className="text-[10px] font-bold text-zinc-400 uppercase">
                    {guide.readTimeMinutes} Min Read
                  </span>
                  <h4 className="mt-1 text-sm font-bold text-zinc-900 group-hover:text-violet-600 dark:text-zinc-50 dark:group-hover:text-violet-400 transition-colors line-clamp-1">
                    {guide.title}
                  </h4>
                  <p className="mt-1 text-xs text-zinc-500 line-clamp-2 dark:text-zinc-400 leading-normal">
                    {guide.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Featured Prompts */}
        {displayPrompts.length > 0 && (
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 flex items-center gap-1.5">
              <Sparkles className="h-4 w-4 text-violet-500" />
              Related Prompts
            </h3>
            <div className="flex flex-col gap-3">
              {displayPrompts.map((prompt) => (
                <Link
                  key={prompt.id}
                  href={`/prompt/${prompt.slug}`}
                  className="group rounded-xl border border-zinc-200 bg-white p-4 shadow-sm hover:border-zinc-300 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-zinc-700 transition-all duration-200"
                >
                  <span className="text-[10px] font-bold text-zinc-400 uppercase capitalize">
                    {prompt.difficulty} • {prompt.professionSlug}
                  </span>
                  <h4 className="mt-1 text-sm font-bold text-zinc-900 group-hover:text-violet-600 dark:text-zinc-50 dark:group-hover:text-violet-400 transition-colors line-clamp-1">
                    {prompt.title}
                  </h4>
                  <p className="mt-1 text-xs text-zinc-500 line-clamp-2 dark:text-zinc-400 leading-normal">
                    {prompt.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Profession Hubs */}
        {displayProfessions.length > 0 && (
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 flex items-center gap-1.5">
              <Compass className="h-4 w-4 text-violet-500" />
              Role specific Hubs
            </h3>
            <div className="flex flex-col gap-3">
              {displayProfessions.map((prof) => (
                <Link
                  key={prof.id}
                  href={`/${prof.slug}`}
                  className="group flex items-center justify-between rounded-xl border border-zinc-200 bg-white p-4 shadow-sm hover:border-zinc-300 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-zinc-700 transition-all duration-200"
                >
                  <div className="flex items-center gap-2.5 overflow-hidden">
                    <span className="text-xl shrink-0">{prof.icon}</span>
                    <div className="overflow-hidden">
                      <h4 className="text-sm font-bold text-zinc-900 group-hover:text-violet-600 dark:text-zinc-50 dark:group-hover:text-violet-400 transition-colors truncate">
                        {prof.name} Hub
                      </h4>
                      <p className="mt-0.5 text-xs text-zinc-500 truncate dark:text-zinc-400">
                        {prof.description}
                      </p>
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 shrink-0 text-zinc-400 group-hover:translate-x-1 group-hover:text-violet-500 transition-all" />
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
