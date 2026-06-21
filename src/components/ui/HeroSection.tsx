'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { Sparkles } from 'lucide-react';
import SearchAutocomplete from './SearchAutocomplete';

interface HeroSectionProps {
  popularHubs: { name: string; href: string }[];
}

export default function HeroSection({ popularHubs }: HeroSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    containerRef.current.style.setProperty('--mouse-x', `${x}px`);
    containerRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="spotlight-container relative overflow-hidden bg-zinc-955 text-white py-20 sm:py-28 border-b border-zinc-900 bg-[#030303]"
    >
      {/* Animated radial spotlight background element */}
      <div className="spotlight-glow" />

      {/* Static premium radial glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-violet-650/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8 z-10 flex flex-col items-center">
        
        {/* Animated Badge */}
        <div className="inline-flex items-center gap-1.5 rounded-full bg-zinc-900 border border-zinc-800 px-3 py-1 text-xs font-bold text-violet-400 select-none hover:border-zinc-750 transition-colors">
          <Sparkles className="h-3 w-3 text-violet-400 animate-pulse" />
          Programmatic AI Prompts & Guides
        </div>
        
        {/* Title */}
        <h1 className="mt-6 text-4xl font-black tracking-tight text-white sm:text-6xl max-w-3xl leading-[1.1] sm:leading-[1.05]">
          Supercharge Your Career with{' '}
          <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">
            Expert AI Prompts
          </span>
        </h1>
        
        {/* Subtitle */}
        <p className="mx-auto mt-6 max-w-2xl text-sm sm:text-base text-zinc-400 font-semibold leading-relaxed">
          Stop struggling with generic AI outputs. Access our database of 300+ battle-tested prompts, 50+ learning guides, and interactive tools curated specifically for your role.
        </p>

        {/* Global Autocomplete Search Bar */}
        <div className="mt-10 w-full max-w-lg">
          <SearchAutocomplete placeholder="Search AI prompts (press '/' to focus)..." variant="hero" />
          
          {/* Quick shortcuts */}
          <div className="mt-4 flex flex-wrap justify-center gap-x-2 gap-y-1.5 text-xs text-zinc-500">
            <span className="font-bold uppercase tracking-wider text-zinc-600 dark:text-zinc-650">Popular Hubs:</span>
            {popularHubs.map((hub, idx) => (
              <React.Fragment key={hub.name}>
                <Link href={hub.href} className="hover:underline text-violet-400 font-semibold">
                  {hub.name}
                </Link>
                {idx < popularHubs.length - 1 && <span>•</span>}
              </React.Fragment>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
}
