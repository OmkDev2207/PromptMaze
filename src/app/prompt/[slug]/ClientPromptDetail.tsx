'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Copy, Check, Info, ExternalLink, Sparkles, Share2, Bookmark, Download, ChevronDown, FileText } from 'lucide-react';
import type { Prompt } from '@/types';

interface ClientPromptDetailProps {
  prompt: Prompt;
}

// Extract variables like [SUBJECT] from content
const getVariables = (text: string): string[] => {
  const regex = /\[([A-Za-z0-9_\-\s\/]{2,30})\]/g;
  const matches: string[] = [];
  let match;
  while ((match = regex.exec(text)) !== null) {
    const varName = match[1];
    if (!matches.includes(varName)) {
      matches.push(varName);
    }
  }
  return matches;
};

export default function ClientPromptDetail({ prompt }: ClientPromptDetailProps) {
  const [copied, setCopied] = useState(false);
  const [shared, setShared] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  
  // Customizer States
  const [variableValues, setVariableValues] = useState<Record<string, string>>({});
  const variables = getVariables(prompt.content);

  // Export States
  const [showExportMenu, setShowExportMenu] = useState(false);
  const [notionCopied, setNotionCopied] = useState(false);
  const exportRef = useRef<HTMLDivElement>(null);

  // Social Share States
  const [copiedShareIdx, setCopiedShareIdx] = useState<number | null>(null);

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem('savedPrompts') || '[]');
      setIsSaved(saved.includes(prompt.id));
    } catch (e) {
      console.error(e);
    }

    const handleSavedUpdate = () => {
      try {
        const saved = JSON.parse(localStorage.getItem('savedPrompts') || '[]');
        setIsSaved(saved.includes(prompt.id));
      } catch (e) {
        console.error(e);
      }
    };
    window.addEventListener('saved-prompts-updated', handleSavedUpdate);
    return () => window.removeEventListener('saved-prompts-updated', handleSavedUpdate);
  }, [prompt.id]);

  // Click outside to close export menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (exportRef.current && !exportRef.current.contains(event.target as Node)) {
        setShowExportMenu(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleToggleSave = () => {
    try {
      const saved = JSON.parse(localStorage.getItem('savedPrompts') || '[]');
      let updated;
      if (saved.includes(prompt.id)) {
        updated = saved.filter((id: string) => id !== prompt.id);
        setIsSaved(false);
      } else {
        updated = [...saved, prompt.id];
        setIsSaved(true);
      }
      localStorage.setItem('savedPrompts', JSON.stringify(updated));
      window.dispatchEvent(new Event('saved-prompts-updated'));
    } catch (e) {
      console.error(e);
    }
  };

  // Track Recently Viewed prompt on mount
  useEffect(() => {
    try {
      const recentlyViewed = JSON.parse(localStorage.getItem('recentlyViewed') || '[]');
      const updated = [
        { title: prompt.title, slug: prompt.slug, professionSlug: prompt.professionSlug },
        ...recentlyViewed.filter((item: any) => item.slug !== prompt.slug)
      ].slice(0, 5); // Keep last 5
      localStorage.setItem('recentlyViewed', JSON.stringify(updated));
      window.dispatchEvent(new Event('recently-viewed-updated'));
    } catch (e) {
      console.error('Failed to update recently viewed prompts in localStorage:', e);
    }
  }, [prompt.slug, prompt.title, prompt.professionSlug]);

  // Compute dynamically customized prompt content
  let customizedContent = prompt.content;
  Object.entries(variableValues).forEach(([key, val]) => {
    if (val.trim()) {
      customizedContent = customizedContent.replaceAll(`[${key}]`, val);
    }
  });

  const handleCopy = () => {
    navigator.clipboard.writeText(customizedContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    window.dispatchEvent(
      new CustomEvent('copy-success', {
        detail: { title: prompt.title }
      })
    );
  };

  const handleUsePrompt = () => {
    navigator.clipboard.writeText(customizedContent);
    window.open(`https://chatgpt.com/?q=${encodeURIComponent(customizedContent)}`, '_blank');
  };

  const handleShare = () => {
    const shareUrl = typeof window !== 'undefined' 
      ? `${window.location.origin}/prompt/${prompt.slug}`
      : `https://promptmaze.vercel.app/prompt/${prompt.slug}`;
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

  // Export handlers
  const handleExportTxt = () => {
    const element = document.createElement("a");
    const file = new Blob([customizedContent], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = `${prompt.slug}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    setShowExportMenu(false);
  };

  const handleExportJson = () => {
    const element = document.createElement("a");
    const file = new Blob([JSON.stringify({ ...prompt, content: customizedContent }, null, 2)], {type: 'application/json'});
    element.href = URL.createObjectURL(file);
    element.download = `${prompt.slug}.json`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    setShowExportMenu(false);
  };

  const handleExportNotion = () => {
    const pageUrl = typeof window !== 'undefined' 
      ? `${window.location.origin}/prompt/${prompt.slug}`
      : `https://promptmaze.vercel.app/prompt/${prompt.slug}`;
    const notionFormat = `# ${prompt.title}\n\n> ${prompt.description}\n\n\`\`\`\n${customizedContent}\n\`\`\`\n\n*Source: [PromptMaze](${pageUrl})*`;
    navigator.clipboard.writeText(notionFormat);
    setNotionCopied(true);
    setTimeout(() => setNotionCopied(false), 2000);
    setShowExportMenu(false);
  };

  // Generate catchy sharing posts
  const getSocialSharePosts = () => {
    const pageUrl = typeof window !== 'undefined' 
      ? `${window.location.origin}/prompt/${prompt.slug}`
      : `https://promptmaze.vercel.app/prompt/${prompt.slug}`;
    const profName = prompt.professionSlug.charAt(0).toUpperCase() + prompt.professionSlug.slice(1);
    
    return [
      {
        platform: 'Twitter / X',
        text: `Stop writing AI prompts from scratch. 🚨 Try this optimized template for "${prompt.title}" (${profName}): ${pageUrl} ⚡`
      },
      {
        platform: 'LinkedIn',
        text: `How do you automate tasks for "${prompt.title}"? I highly recommend copying this standardized, constraint-heavy AI prompt template to get perfect results: ${pageUrl} #AI #ChatGPT`
      },
      {
        platform: 'Reddit / Forums',
        text: `Free ChatGPT Prompt Template for "${prompt.title}" (${profName} workflow): ${pageUrl}`
      }
    ];
  };

  const handleCopyShareText = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedShareIdx(index);
    setTimeout(() => setCopiedShareIdx(null), 2000);
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
      <div className="mt-4 flex flex-wrap gap-1.5 border-b border-zinc-100 pb-5 dark:border-zinc-800/80">
        {prompt.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-lg bg-zinc-50 border border-zinc-200/60 px-2 py-1 text-xs text-zinc-550 dark:bg-zinc-950 dark:border-zinc-850 dark:text-zinc-400 font-medium"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Interactive Variable Customizer Form */}
      {variables.length > 0 && (
        <div className="mt-6 rounded-2xl border border-zinc-150 bg-zinc-50/30 p-5 dark:border-zinc-800 dark:bg-zinc-950/20">
          <div className="flex items-center justify-between border-b border-zinc-100 pb-3 dark:border-zinc-800/80">
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-650 dark:text-zinc-300 flex items-center gap-1.5">
              <Sparkles className="h-4 w-4 text-violet-500 fill-violet-500/20" />
              Interactive Variable Filler
            </h3>
            <button
              onClick={() => setVariableValues({})}
              className="text-[10px] font-bold text-zinc-400 hover:text-zinc-650 dark:hover:text-zinc-300 transition-colors uppercase tracking-wider"
            >
              Reset Fields
            </button>
          </div>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {variables.map((vName) => (
              <div key={vName} className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                  {vName.toLowerCase().replace(/_/g, ' ')}
                </label>
                <input
                  type="text"
                  value={variableValues[vName] || ''}
                  onChange={(e) =>
                    setVariableValues((prev) => ({ ...prev, [vName]: e.target.value }))
                  }
                  placeholder={`Enter ${vName.toLowerCase().replace(/_/g, ' ')}...`}
                  className="rounded-xl border border-zinc-200 bg-white px-3 py-2 text-xs text-zinc-800 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-350"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Copy Prompt Box (User Chat Bubble Style) */}
      <div className="relative mt-6">
        <div className="flex items-center justify-between rounded-t-2xl bg-zinc-100 px-4 py-3.5 text-xs font-bold text-zinc-700 border-x border-t border-zinc-200 dark:bg-zinc-950 dark:text-zinc-400 dark:border-zinc-800">
          <div className="flex items-center gap-2 select-none">
            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-violet-600 text-[9px] font-black text-white">
              U
            </div>
            <span className="uppercase tracking-wider">User Prompt Template</span>
          </div>
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
            value={customizedContent}
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

            {/* Export Menu Dropdown */}
            <div className="relative" ref={exportRef}>
              <button
                onClick={() => setShowExportMenu(!showExportMenu)}
                className="flex items-center gap-1.5 rounded-xl border border-zinc-200 bg-white px-3 py-2.5 text-xs font-bold text-zinc-750 hover:bg-zinc-50 shadow-sm transition-all dark:border-zinc-850 dark:bg-zinc-900 dark:text-zinc-250 dark:hover:bg-zinc-850"
                title="Export template"
              >
                <Download className="h-4 w-4" />
                <span>Export</span>
                <ChevronDown className="h-3 w-3" />
              </button>
              {showExportMenu && (
                <div className="absolute bottom-full right-0 mb-2 w-48 rounded-xl border border-zinc-150 bg-white p-1.5 shadow-lg dark:border-zinc-800 dark:bg-zinc-950 z-50 animate-fade-in-up">
                  <button
                    onClick={handleExportTxt}
                    className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-xs font-bold text-zinc-700 hover:bg-zinc-50 dark:text-zinc-300 dark:hover:bg-zinc-900/60"
                  >
                    <FileText className="h-3.5 w-3.5 text-zinc-400" />
                    Download .txt
                  </button>
                  <button
                    onClick={handleExportJson}
                    className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-xs font-bold text-zinc-700 hover:bg-zinc-50 dark:text-zinc-300 dark:hover:bg-zinc-900/60"
                  >
                    <FileText className="h-3.5 w-3.5 text-zinc-400" />
                    Download .json
                  </button>
                  <button
                    onClick={handleExportNotion}
                    className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-xs font-bold text-zinc-700 hover:bg-zinc-50 dark:text-zinc-300 dark:hover:bg-zinc-900/60"
                  >
                    {notionCopied ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-emerald-500" />
                        Copied Notion!
                      </>
                    ) : (
                      <>
                        <FileText className="h-3.5 w-3.5 text-zinc-400" />
                        Copy for Notion
                      </>
                    )}
                  </button>
                </div>
              )}
            </div>

            {/* Share Button */}
            <button
              onClick={handleShare}
              className={`flex h-9 w-9 items-center justify-center rounded-xl border transition-all ${
                shared
                  ? 'bg-emerald-50 border-emerald-250 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-400'
                  : 'border-zinc-200 bg-white text-zinc-550 hover:bg-zinc-50 dark:border-zinc-850 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800'
              }`}
              title="Share this prompt link"
            >
              {shared ? <Check className="h-4 w-4" /> : <Share2 className="h-4 w-4" />}
            </button>

            {/* Bookmark/Save Button */}
            <button
              onClick={handleToggleSave}
              className={`flex h-9 w-9 items-center justify-center rounded-xl border transition-all ${
                isSaved
                  ? 'bg-indigo-50 border-indigo-250 text-indigo-750 dark:bg-indigo-950/30 dark:text-indigo-300'
                  : 'border-zinc-200 bg-white text-zinc-550 hover:bg-zinc-50 dark:border-zinc-850 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800'
              }`}
              title={isSaved ? "Saved" : "Save Prompt"}
            >
              <Bookmark className={`h-4 w-4 ${isSaved ? 'fill-indigo-500 text-indigo-500' : ''}`} />
            </button>
          </div>
        </div>
      </div>

      {/* Helper Warning */}
      <div className="mt-4 flex gap-2.5 rounded-xl bg-zinc-50/50 p-4 text-xs text-zinc-550 dark:bg-zinc-900/60 dark:text-zinc-400 border border-zinc-150 dark:border-zinc-850 leading-relaxed font-semibold">
        <Info className="h-4 w-4 shrink-0 text-indigo-500" />
        <p>
          <strong>Usage Tip:</strong> Use the <strong>Interactive Variable Filler</strong> above to fill parameters in real-time. Click <strong>Use Prompt</strong> to copy the customized text and open ChatGPT.
        </p>
      </div>

      {/* Viral Hook Share Section */}
      <div className="mt-8 border-t border-zinc-150 pt-6 dark:border-zinc-800/80">
        <h3 className="text-sm font-black text-zinc-900 dark:text-zinc-50 flex items-center gap-1.5">
          <Share2 className="h-4.5 w-4.5 text-indigo-500" />
          Viral Promotion Hooks & Catchy Titles
        </h3>
        <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400 font-semibold leading-relaxed">
          Want to share this prompt with your team, network, or on social media? Copy these high-CTR click-worthy hooks that lead readers back to this prompt page:
        </p>

        <div className="mt-4 flex flex-col gap-3">
          {getSocialSharePosts().map((post, idx) => (
            <div key={idx} className="flex flex-col gap-2 rounded-2xl border border-zinc-150 bg-zinc-50/20 p-4 dark:border-zinc-850 dark:bg-zinc-950/25">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-black uppercase tracking-wider text-indigo-650 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/40 px-2 py-0.5 rounded">
                  {post.platform}
                </span>
                <button
                  onClick={() => handleCopyShareText(post.text, idx)}
                  className="text-[10px] font-bold text-zinc-550 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200 flex items-center gap-1"
                >
                  {copiedShareIdx === idx ? (
                    <>
                      <Check className="h-3 w-3 text-emerald-500" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="h-3 w-3" />
                      Copy Hook
                    </>
                  )}
                </button>
              </div>
              <p className="text-xs text-zinc-800 dark:text-zinc-300 font-semibold leading-relaxed">
                &ldquo;{post.text}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
