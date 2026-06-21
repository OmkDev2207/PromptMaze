'use client';

import React, { useState } from 'react';
import { Copy, Check, Info } from 'lucide-react';
import type { Prompt } from '@/types';

interface ClientPromptDetailProps {
  prompt: Prompt;
}

export default function ClientPromptDetail({ prompt }: ClientPromptDetailProps) {
  const [copied, setCopied] = useState(false);

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

  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/50">
      
      {/* Title */}
      <h1 className="text-2xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-3xl">
        {prompt.title}
      </h1>
      <p className="mt-2 text-zinc-500 dark:text-zinc-400">
        {prompt.description}
      </p>

      {/* Copy Prompt Box */}
      <div className="relative mt-6">
        <div className="flex items-center justify-between rounded-t-xl bg-zinc-150 px-4 py-2 text-xs font-semibold text-zinc-700 border-x border-t border-zinc-200 dark:bg-zinc-900 dark:text-zinc-400 dark:border-zinc-800">
          <span>PROMPT TEMPLATE</span>
          <button
            onClick={handleCopy}
            className="flex items-center gap-1 hover:text-zinc-950 dark:hover:text-zinc-200 transition-colors"
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
            className="h-64 w-full resize-none rounded-b-xl border-x border-b border-zinc-200 bg-zinc-50 p-4 font-mono text-sm leading-relaxed text-zinc-800 focus:outline-none dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300"
          />
          
          {/* Overlay Copy Button */}
          <div className="absolute bottom-4 right-4">
            <button
              onClick={handleCopy}
              className={`flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-semibold shadow-md transition-all active:scale-[0.98] ${
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
                  Copy Prompt
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Helper Warning */}
      <div className="mt-4 flex gap-2.5 rounded-lg bg-zinc-50 p-3 text-xs text-zinc-500 dark:bg-zinc-900/80 dark:text-zinc-400 border border-zinc-150 dark:border-zinc-850">
        <Info className="h-4 w-4 shrink-0 text-indigo-500" />
        <p>
          <strong>Usage Tip:</strong> Copy this prompt and paste it into ChatGPT, Claude, or Gemini. Make sure to replace all bracketed items (e.g. <code>[SUBJECT]</code> or <code>[TOPIC]</code>) with your specific details to get the best result.
        </p>
      </div>

    </div>
  );
}
