// src/app/titles/page.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Sparkles, Copy, Check, ArrowRight, RefreshCw, Cpu, Star, ArrowLeft } from 'lucide-react';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import AdSenseSlot from '@/components/ui/AdSenseSlot';

interface HookStyle {
  id: string;
  name: string;
  desc: string;
}

const styles: HookStyle[] = [
  { id: 'all', name: 'All Styles', desc: 'Mix of SEO tutorials, numbers, and curiosity gaps.' },
  { id: 'tutorials', name: 'How-To Blueprints', desc: 'High-intent search terms (e.g. "How to write...")' },
  { id: 'lists', name: 'Numbers & Lists', desc: 'Click-maximizing listicles (e.g. "10 Prompts to...")' },
  { id: 'authority', name: 'Intrigue & Authority', desc: 'Curiosity gaps and professional frameworks.' },
  { id: 'minimal', name: 'Minimalist', desc: 'Clean, direct, and corporate-appropriate.' }
];

const professions = [
  { id: 'teachers', name: 'Teachers' },
  { id: 'developers', name: 'Developers' },
  { id: 'marketers', name: 'Marketers' },
  { id: 'recruiters', name: 'Recruiters' },
  { id: 'students', name: 'Students' },
  { id: 'accountants', name: 'Accountants' },
  { id: 'content-writers', name: 'Writers' },
  { id: 'startup-founders', name: 'Founders' },
  { id: 'copywriters', name: 'Copywriters' },
  { id: 'hr-professionals', name: 'HR Professionals' }
];

export default function TitleGeneratorPage() {
  const router = useRouter();
  const [profession, setProfession] = useState('developers');
  const [topic, setTopic] = useState('');
  const [selectedStyle, setSelectedStyle] = useState('all');
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [generatedTitles, setGeneratedTitles] = useState<string[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);

  // Default seed generation on mount
  useEffect(() => {
    generateTitlesList('React Hooks', 'developers', 'all');
  }, []);

  const generateTitlesList = (kw: string, prof: string, styleId: string) => {
    const cleanKw = kw.trim() || 'Project Planning';
    const profName = professions.find(p => p.id === prof)?.name || 'Professionals';
    
    // Copywriting formula buckets
    const templates = {
      tutorials: [
        `How to Master ${cleanKw} with ChatGPT: The Definitive Guide`,
        `Step-by-Step Guide: Refactoring ${cleanKw} Using AI Prompts`,
        `How to Automate ${cleanKw} Workflows for ${profName} (No API Needed)`,
        `How to Troubleshoot and Debug ${cleanKw} with Claude 3.5 Sonnet`,
        `How Senior ${profName} Optimize ${cleanKw} in 5 Minutes`
      ],
      lists: [
        `10 ChatGPT Prompts for ${cleanKw} That Save 10+ Hours a Week`,
        `7 Battle-Tested ChatGPT Prompts to Supercharge ${cleanKw}`,
        `5 Advanced AI Prompts for ${cleanKw} You Should Copy Today`,
        `12 Click-Worthy prompts to Optimize ${cleanKw} for ${profName}`,
        `3 Prompt Workflows for ${cleanKw} Every ${profName.slice(0, -1)} Needs`
      ],
      authority: [
        `The Secret ChatGPT Framework to Streamline ${cleanKw} Instantly`,
        `Stop Doing ${cleanKw} Manually! Let ChatGPT Handle the Friction`,
        `The Ultimate ChatGPT Blueprint for ${cleanKw} (ATS & SEO Friendly)`,
        `How to Audit and Review ${cleanKw} for Performance Gaps Using AI`,
        `Why 90% of ${profName} Write Bad Prompts for ${cleanKw} (And How to Fix It)`
      ],
      minimal: [
        `ChatGPT Prompts for ${cleanKw}: Developer Template`,
        `AI Workflow Checklist: ${cleanKw} Optimization`,
        `Standard Prompt Matrix: ${cleanKw} for ${profName}`,
        `Modern Prompt Library — ${cleanKw} Guide`,
        `Prompt Engineering for ${profName}: ${cleanKw}`
      ]
    };

    let pool: string[] = [];
    if (styleId === 'all') {
      pool = [
        templates.tutorials[0],
        templates.lists[0],
        templates.authority[0],
        templates.minimal[0],
        templates.tutorials[1],
        templates.lists[1],
        templates.authority[1],
        templates.minimal[1],
        templates.tutorials[2],
        templates.lists[2]
      ];
    } else {
      pool = templates[styleId as keyof typeof templates] || templates.tutorials;
    }

    setGeneratedTitles(pool);
  };

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);
    setTimeout(() => {
      generateTitlesList(topic, profession, selectedStyle);
      setIsGenerating(false);
    }, 400);
  };

  const handleCopy = (title: string, index: number) => {
    navigator.clipboard.writeText(title);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const handleCustomize = (title: string) => {
    const cleanTitle = encodeURIComponent(title);
    const cleanTopic = encodeURIComponent(topic || 'Project Workspace');
    router.push(`/generator?task=${cleanTitle}&goal=${cleanTopic}&profession=${profession}`);
  };

  const breadcrumbs = [{ label: 'Catchy Titles Generator' }];

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <Breadcrumbs items={breadcrumbs} />

      {/* Hero Banner Section */}
      <div className="mt-4 overflow-hidden rounded-3xl bg-gradient-to-br from-violet-600 via-indigo-700 to-fuchsia-700 p-8 text-white shadow-xl sm:p-12 relative">
        <div className="absolute -right-10 -bottom-10 h-64 w-64 rounded-full bg-white/10 blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold backdrop-blur-sm select-none">
            <Sparkles className="h-3 w-3 fill-white animate-pulse" />
            SEO CTR Hook Optimizer
          </div>
          <h1 className="mt-4 text-3xl font-black sm:text-5xl tracking-tight leading-tight">
            Catchy Prompt Title Generator
          </h1>
          <p className="mt-4 text-sm sm:text-base text-white/90 leading-relaxed font-semibold">
            Stand out in Google Search and drive organic visitors to your prompt workflows. Input your role and target topic to compile high-CTR, click-worthy prompt headlines instantly.
          </p>
        </div>
      </div>

      <AdSenseSlot slot="title-generator-top" />

      {/* Main Generator Interface Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8">
        
        {/* Left Column: Input Form (col-span-5) */}
        <div className="lg:col-span-5">
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/50 flex flex-col gap-5 backdrop-blur-md">
            <h2 className="text-base font-black text-zinc-900 dark:text-zinc-50 border-b border-zinc-100 pb-3 dark:border-zinc-800/80 flex items-center gap-2">
              <Cpu className="h-5 w-5 text-indigo-500" />
              Configure Title Settings
            </h2>

            {/* Profession Selection */}
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-2">
                1. Target Audience / Profession
              </label>
              <select
                value={profession}
                onChange={(e) => setProfession(e.target.value)}
                className="w-full rounded-xl border border-zinc-200 bg-white p-3 text-sm text-zinc-700 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300"
              >
                {professions.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Topic Input */}
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-2">
                2. Target Keyword or Topic
              </label>
              <input
                type="text"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder="e.g. React Hooks, Lesson Planning, Cold Outreach..."
                required
                className="w-full rounded-xl border border-zinc-200 bg-white p-3 text-sm text-zinc-900 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-50"
              />
            </div>

            {/* Hook Style Selector */}
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-2">
                3. Copywriting Formula style
              </label>
              <div className="flex flex-col gap-2">
                {styles.map((style) => (
                  <button
                    key={style.id}
                    type="button"
                    onClick={() => setSelectedStyle(style.id)}
                    className={`flex flex-col items-start rounded-xl border p-3 text-left transition-all ${
                      selectedStyle === style.id
                        ? 'border-indigo-600 bg-indigo-50 text-indigo-900 dark:border-indigo-500 dark:bg-indigo-950/40 dark:text-indigo-300'
                        : 'border-zinc-200 bg-white text-zinc-600 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/40 dark:text-zinc-400 dark:hover:bg-zinc-800'
                    }`}
                  >
                    <span className="text-xs font-bold">{style.name}</span>
                    <span className="text-[10px] mt-0.5 text-zinc-400 dark:text-zinc-500">{style.desc}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Generate Button */}
            <button
              type="button"
              onClick={handleGenerate}
              disabled={isGenerating}
              className="mt-2 w-full rounded-xl bg-gradient-to-r from-violet-600 to-indigo-650 py-3 text-sm font-bold text-white shadow-md shadow-indigo-500/20 hover:opacity-95 transition-all flex items-center justify-center gap-2 disabled:opacity-50 active:scale-[0.98]"
            >
              {isGenerating ? (
                <>
                  <RefreshCw className="h-4 w-4 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Sparkles className="h-4 w-4 fill-white" />
                  Generate High-CTR Titles
                </>
              )}
            </button>
          </div>
        </div>

        {/* Right Column: Title Outputs (col-span-7) */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/50 flex flex-col h-full justify-between backdrop-blur-md">
            <div>
              <div className="flex items-center justify-between border-b border-zinc-100 pb-4 dark:border-zinc-800/80 select-none">
                <h2 className="text-base font-bold text-zinc-900 dark:text-zinc-50 flex items-center gap-2">
                  <Star className="h-5 w-5 text-amber-500 fill-amber-500" />
                  Generated Catchy Titles
                </h2>
                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest bg-zinc-50 dark:bg-zinc-950 px-2 py-0.5 rounded border border-zinc-100 dark:border-zinc-800/80">
                  Ready to copy
                </span>
              </div>

              {/* Titles Output List */}
              <div className="mt-6 flex flex-col gap-3">
                {generatedTitles.map((title, index) => (
                  <div
                    key={index}
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-xl border border-zinc-150 bg-zinc-50/50 p-4 dark:border-zinc-850 dark:bg-zinc-950/40 hover:border-zinc-250 dark:hover:border-zinc-750 transition-all group animate-fade-in-up"
                  >
                    <div className="flex items-start gap-3">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-zinc-250 text-[10px] font-bold text-zinc-650 dark:bg-zinc-850 dark:text-zinc-400 mt-0.5">
                        {index + 1}
                      </span>
                      <p className="text-sm font-semibold text-zinc-855 dark:text-zinc-200 leading-snug">
                        {title}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 shrink-0 self-end sm:self-auto">
                      {/* Copy Action */}
                      <button
                        type="button"
                        onClick={() => handleCopy(title, index)}
                        className={`inline-flex h-8 w-8 items-center justify-center rounded-lg border transition-all active:scale-90 ${
                          copiedIndex === index
                            ? 'bg-emerald-500 border-emerald-500 text-white shadow-sm'
                            : 'border-zinc-200 bg-white text-zinc-550 hover:bg-zinc-50 dark:border-zinc-850 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800'
                        }`}
                        title="Copy to Clipboard"
                      >
                        {copiedIndex === index ? (
                          <Check className="h-3.5 w-3.5" />
                        ) : (
                          <Copy className="h-3.5 w-3.5" />
                        )}
                      </button>

                      {/* Customize / Generate Prompt */}
                      <button
                        type="button"
                        onClick={() => handleCustomize(title)}
                        className="inline-flex h-8 items-center gap-1 rounded-lg bg-indigo-650 px-3 text-xs font-bold text-white shadow-sm hover:bg-indigo-600 transition-all hover:shadow-indigo-500/10 active:scale-95"
                        title="Load in Interactive Generator"
                      >
                        <span>Prompt It</span>
                        <ArrowRight className="h-3 w-3" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Explainer / SEO Tip */}
            <div className="mt-8 border-t border-zinc-100 pt-4 dark:border-zinc-800 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-xs font-semibold text-zinc-450">
              <p className="text-zinc-550 dark:text-zinc-400">
                💡 **SEO Best Practice**: Place high-CTR keywords at the front of your titles for optimal visibility.
              </p>
              <Link
                href="/generator"
                className="text-violet-650 hover:underline dark:text-violet-400 flex items-center gap-1 shrink-0"
              >
                Go to Prompt Generator
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>

      </div>

      <AdSenseSlot slot="title-generator-bottom" />
    </div>
  );
}
