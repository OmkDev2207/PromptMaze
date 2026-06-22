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
      className="spotlight-container relative overflow-hidden bg-zinc-950 text-white py-20 sm:py-28 border-b border-zinc-900 bg-[#030303]"
    >
      {/* Animated radial spotlight background element */}
      <div className="spotlight-glow" />

      {/* Static premium radial glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-violet-600/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column (Content) */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
          
          {/* Animated Badge */}
          <div className="inline-flex items-center gap-1.5 rounded-full bg-zinc-900 border border-zinc-800 px-3 py-1 text-xs font-bold text-violet-400 select-none hover:border-zinc-700 transition-colors">
            <Sparkles className="h-3 w-3 text-violet-400 animate-pulse" />
            Programmatic AI Prompts & Guides
          </div>
          
          {/* Title */}
          <h1 className="mt-6 text-4xl font-black tracking-tight text-white sm:text-6xl leading-[1.1] sm:leading-[1.05]">
            Build Better AI Prompts{' '}
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">
              in Seconds
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="mt-6 max-w-2xl text-sm sm:text-base text-zinc-400 font-semibold leading-relaxed">
            Create professional-grade prompts using structured prompt engineering frameworks used by experts. Stop struggling with generic AI outputs and get optimal results from ChatGPT, Claude, and Gemini.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start w-full">
            <Link
              href="/builder"
              className="inline-flex h-11 items-center justify-center rounded-xl bg-gradient-to-r from-violet-600 to-indigo-650 px-6 text-sm font-bold text-white shadow-lg shadow-indigo-500/25 hover:opacity-95 active:scale-[0.98] transition-all select-none"
            >
              <Sparkles className="mr-2 h-4 w-4" />
              Launch Prompt Architect
            </Link>
            <Link
              href="/guides"
              className="inline-flex h-11 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900/30 px-6 text-sm font-bold text-zinc-300 hover:bg-zinc-800 hover:text-white transition-all select-none"
            >
              Browse AI Guides
            </Link>
          </div>

          {/* Global Autocomplete Search Bar */}
          <div className="mt-10 w-full max-w-lg">
            <SearchAutocomplete placeholder="Search AI prompts (press '/' to focus)..." variant="hero" />
            
            {/* Quick shortcuts */}
            <div className="mt-4 flex flex-wrap justify-center lg:justify-start gap-x-2 gap-y-1.5 text-xs text-zinc-500">
              <span className="font-bold uppercase tracking-wider text-zinc-600 dark:text-zinc-500">Popular Hubs:</span>
              {popularHubs.map((hub, idx) => (
                <React.Fragment key={hub.name}>
                  <Link href={hub.href} className="hover:underline text-violet-400 font-semibold">
                    {hub.name}
                  </Link>
                  {idx < popularHubs.length - 1 && <span>•</span>}
                </React.Fragment>
              ))}
            </div>

            {/* Model logos / compatibility badge */}
            <div className="mt-8 border-t border-zinc-900/60 pt-6 w-full text-center lg:text-left select-none">
              <span className="block text-[10px] font-bold uppercase tracking-widest text-zinc-600">
                Optimized For Leading AI Models
              </span>
              <div className="mt-3 flex flex-wrap justify-center lg:justify-start gap-x-4 gap-y-2 text-[10px] sm:text-xs font-bold text-zinc-500 opacity-60 hover:opacity-85 transition-opacity">
                <span className="flex items-center gap-1">💬 ChatGPT</span>
                <span>•</span>
                <span className="flex items-center gap-1">🪶 Claude</span>
                <span>•</span>
                <span className="flex items-center gap-1">✨ Gemini</span>
                <span>•</span>
                <span className="flex items-center gap-1">🤖 DeepSeek</span>
                <span>•</span>
                <span className="flex items-center gap-1">🔎 Perplexity</span>
              </div>
            </div>
          </div>
          
        </div>

        {/* Right Column (Visual Mockup) */}
        <div className="lg:col-span-5 hidden lg:block w-full">
          <div className="relative rounded-2xl border border-zinc-800 bg-zinc-900/50 p-2 shadow-2xl backdrop-blur-md transition-all duration-300 hover:border-zinc-700/80 group">
            {/* Background violet/indigo glow */}
            <div className="absolute -inset-1 bg-gradient-to-br from-violet-600 to-indigo-600 opacity-20 blur-xl group-hover:opacity-30 transition-opacity pointer-events-none" />
            <img 
              src="/images/hero_dashboard_mockup.png" 
              alt="PromptMaze Dashboard Mockup" 
              className="relative rounded-xl w-full object-cover shadow-2xl border border-zinc-800" 
            />
          </div>
        </div>
        
      </div>
    </section>
  );
}
