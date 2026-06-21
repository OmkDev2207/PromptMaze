'use client';

import React, { useState } from 'react';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import AdSenseSlot from '@/components/ui/AdSenseSlot';
import { Cpu, Copy, Check, Sparkles, GraduationCap, Code, Megaphone, Users, BookOpen, BarChart3, HelpCircle, RefreshCw } from 'lucide-react';

export default function PromptGeneratorPage() {
  const [profession, setProfession] = useState('teachers');
  const [task, setTask] = useState('');
  const [goal, setGoal] = useState('');
  const [copied, setCopied] = useState(false);

  const templates: Record<string, string> = {
    teachers: `You are an expert educator and instructional designer. 
Your task is to: [TASK]
The primary learning goal/objective is: [GOAL]

Please provide a highly structured resource including:
1. Step-by-step plan or explanation
2. Classroom application instructions
3. A short quiz or assessment with answer key
4. Differentiation advice for different student levels.`,

    developers: `You are a senior software engineer specializing in development workflows.
Your task is to: [TASK]
The ultimate architectural goal is: [GOAL]

Please provide a detailed response with:
1. Fully documented, clean code block illustrating the solution
2. Detailed explanation of performance implications
3. Edge cases and error handling strategies
4. Recommendations for unit testing.`,

    marketers: `You are an elite growth marketer and direct-response copywriter.
Your task is to: [TASK]
The conversion or campaign goal is: [GOAL]

Please produce a high-converting draft containing:
1. Target audience description and core pain points
2. Clear value proposition and hook ideas
3. Compelling, action-oriented copy options
4. Key performance metrics (KPIs) to track.`,

    recruiters: `You are a professional technical recruiter and talent acquisition specialist.
Your task is to: [TASK]
The hiring goal or objective is: [GOAL]

Please compile a structured recruitment kit including:
1. Optimized templates or interview scorecards
2. Five role-specific behavioral screening questions
3. Scorecard grading scale (1 to 5) with positive indicators
4. Empathy-focused communication scripts.`,

    students: `You are an expert academic tutor and study skills coach.
Your task is to study and master: [TASK]
The study goal or target exam is: [GOAL]

Please compile a comprehensive study module including:
1. Core concepts explained in plain language (ELI10)
2. A glossary of key vocabulary with memory hooks (mnemonics)
3. Three mock test questions with detailed solutions
4. A spaced repetition review schedule.`,

    accountants: `You are a certified public accountant (CPA) and financial modeling expert.
Your task is to analyze, reconcile, or automate: [TASK]
The financial reporting or compliance goal is: [GOAL]

Please generate a professional auditing and reporting pack including:
1. Detailed workflow checklist matching GAAP/IFRS standards
2. Formulas, macros, or modeling guidelines
3. Three critical risk factors or potential audit flags
4. Executive summary template for management reviews.`
  };

  const compilePrompt = () => {
    const baseTemplate = templates[profession] || '';
    let compiled = baseTemplate;

    const taskText = task.trim() || '___(Insert your task here)___';
    const goalText = goal.trim() || '___(Insert your goal here)___';

    compiled = compiled.replace('[TASK]', taskText);
    compiled = compiled.replace('[GOAL]', goalText);

    return compiled;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(compilePrompt());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleReset = () => {
    setTask('');
    setGoal('');
  };

  const breadcrumbs = [{ label: 'Prompt Generator' }];

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      
      {/* Breadcrumbs */}
      <Breadcrumbs items={breadcrumbs} />

      {/* Header */}
      <div className="mt-4 border-b border-zinc-200 pb-8 dark:border-zinc-800">
        <h1 className="text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
          Interactive Prompt Generator
        </h1>
        <p className="mt-2 text-zinc-500 dark:text-zinc-400">
          Create optimized, structured ChatGPT and AI prompts using role-based framework templates. No API keys required.
        </p>
      </div>

      {/* AdSense Top slot */}
      <AdSenseSlot slot="generator-top" />

      {/* Layout Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8">
        
        {/* Input Form Column (Left) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/50">
            <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-50 flex items-center gap-1.5">
              <Sparkles className="h-5 w-5 text-indigo-500" />
              Configure Inputs
            </h2>

            <div className="mt-6 flex flex-col gap-5">
              
              {/* Select Profession */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                  1. Select Profession
                </label>
                <div className="mt-2 grid grid-cols-2 gap-2">
                  {[
                    { id: 'teachers', name: 'Teacher', icon: <GraduationCap className="h-4 w-4" /> },
                    { id: 'developers', name: 'Developer', icon: <Code className="h-4 w-4" /> },
                    { id: 'marketers', name: 'Marketer', icon: <Megaphone className="h-4 w-4" /> },
                    { id: 'recruiters', name: 'Recruiter', icon: <Users className="h-4 w-4" /> },
                    { id: 'students', name: 'Student', icon: <BookOpen className="h-4 w-4" /> },
                    { id: 'accountants', name: 'Accountant', icon: <BarChart3 className="h-4 w-4" /> }
                  ].map((p) => (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => setProfession(p.id)}
                      className={`flex items-center gap-2 rounded-xl border p-3 text-sm font-semibold transition-all ${
                        profession === p.id
                          ? 'border-indigo-600 bg-indigo-50 text-indigo-700 dark:border-indigo-500 dark:bg-indigo-950/30 dark:text-indigo-400'
                          : 'border-zinc-200 hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-850'
                      }`}
                    >
                      {p.icon}
                      <span>{p.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Task Input */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                  2. What is the Task?
                </label>
                <textarea
                  value={task}
                  onChange={(e) => setTask(e.target.value)}
                  placeholder="e.g. Design a quiz on thermodynamics, rewrite an Express route, write facebook ad copy..."
                  className="mt-2 h-24 w-full resize-none rounded-xl border border-zinc-200 bg-white p-3 text-sm text-zinc-900 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-50"
                />
              </div>

              {/* Goal Input */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                  3. What is the Goal / Constraint?
                </label>
                <textarea
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
                  placeholder="e.g. Needs to be suitable for 8th graders, must avoid external dependencies, target CTR is 5%..."
                  className="mt-2 h-24 w-full resize-none rounded-xl border border-zinc-200 bg-white p-3 text-sm text-zinc-900 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-50"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 mt-2">
                <button
                  type="button"
                  onClick={handleReset}
                  className="flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-zinc-200 py-3 text-sm font-semibold text-zinc-600 hover:bg-zinc-50 active:scale-[0.98] transition-all dark:border-zinc-800 dark:text-zinc-350 dark:hover:bg-zinc-850"
                >
                  <RefreshCw className="h-4 w-4" />
                  Reset Fields
                </button>
              </div>

            </div>

          </div>
        </div>

        {/* Live Output Column (Right) */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/50 flex flex-col h-full justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-zinc-100 pb-4 dark:border-zinc-800/80">
                <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-50 flex items-center gap-1.5">
                  <Cpu className="h-5 w-5 text-indigo-500" />
                  Compiled Prompt
                </h2>
                <span className="text-xs text-zinc-400">Live Preview</span>
              </div>

              {/* Textarea Live Output */}
              <div className="relative mt-6">
                <textarea
                  readOnly
                  value={compilePrompt()}
                  onClick={(e) => (e.target as HTMLTextAreaElement).select()}
                  className="h-[360px] w-full resize-none rounded-xl border border-zinc-200 bg-zinc-50 p-4 font-mono text-sm leading-relaxed text-zinc-800 focus:outline-none dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300"
                />
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-zinc-100 pt-4 dark:border-zinc-850">
              <p className="text-xs text-zinc-400">
                Copy this prompt into ChatGPT or Claude to test it.
              </p>
              
              <button
                type="button"
                onClick={handleCopy}
                className={`w-full sm:w-auto inline-flex items-center justify-center gap-1.5 rounded-xl px-6 py-3 text-sm font-semibold shadow-md transition-all active:scale-[0.98] ${
                  copied
                    ? 'bg-emerald-500 text-white shadow-emerald-500/20'
                    : 'bg-indigo-600 text-white shadow-indigo-500/20 hover:bg-indigo-500'
                }`}
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4" />
                    Copy Generated Prompt
                  </>
                )}
              </button>
            </div>

          </div>
        </div>

      </div>

      {/* AdSense Bottom slot */}
      <AdSenseSlot slot="generator-bottom" />

    </div>
  );
}
