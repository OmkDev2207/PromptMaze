'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Search, Compass, BookOpen, HelpCircle, CornerDownLeft, Sparkles, X } from 'lucide-react';
import { professions } from '@/lib/data/professions';
import { categories } from '@/lib/data/categories';
import { prompts } from '@/lib/data/prompts';
import { guides } from '@/lib/data/guides';
import { synonymMap } from '@/lib/utils/search';

interface SuggestionItem {
  id: string;
  type: 'profession' | 'category' | 'prompt' | 'guide';
  title: string;
  subtitle: string;
  url: string;
  icon?: string | React.ReactNode;
}

interface SearchAutocompleteProps {
  placeholder?: string;
  variant?: 'hero' | 'nav';
}

export default function SearchAutocomplete({
  placeholder = "Search ChatGPT prompts for teachers, developers...",
  variant = "hero"
}: SearchAutocompleteProps) {
  const [query, setQuery] = useState('');
  const [focused, setFocused] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [suggestions, setSuggestions] = useState<SuggestionItem[]>([]);
  
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Global "/" key listener to focus search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Focus on "/" unless user is editing text fields
      const activeEl = document.activeElement;
      if (activeEl) {
        const tagName = activeEl.tagName.toLowerCase();
        if (
          tagName === 'input' ||
          tagName === 'textarea' ||
          activeEl.getAttribute('contenteditable') === 'true'
        ) {
          return;
        }
      }

      if (e.key === '/') {
        e.preventDefault();
        inputRef.current?.focus();
        setFocused(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setFocused(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Compute suggestions when query changes
  useEffect(() => {
    if (!query.trim()) {
      // Show default suggestions (featured professions + guides)
      const defaultItems: SuggestionItem[] = [
        ...professions.filter(p => p.featured).slice(0, 3).map(p => ({
          id: p.id,
          type: 'profession' as const,
          title: p.name,
          subtitle: 'Browse AI Prompts Hub',
          url: `/${p.slug}`,
          icon: p.icon
        })),
        ...guides.slice(0, 2).map(g => ({
          id: g.id,
          type: 'guide' as const,
          title: g.title,
          subtitle: 'AI Guide',
          url: `/guides/${g.slug}`,
          icon: <BookOpen className="h-3.5 w-3.5 text-violet-500" />
        }))
      ];
      setSuggestions(defaultItems);
      setSelectedIndex(0);
      return;
    }

    const cleanQuery = query.toLowerCase();

    // 1. Matches in Professions
    const matchedProfessions = professions
      .filter(p => p.name.toLowerCase().includes(cleanQuery) || p.description.toLowerCase().includes(cleanQuery))
      .slice(0, 3)
      .map(p => ({
        id: p.id,
        type: 'profession' as const,
        title: `${p.name} Prompts Hub`,
        subtitle: p.description,
        url: `/${p.slug}`,
        icon: p.icon
      }));

    // 2. Matches in Categories
    const matchedCategories = categories
      .filter(c => c.name.toLowerCase().includes(cleanQuery) || c.description.toLowerCase().includes(cleanQuery))
      .slice(0, 3)
      .map(c => ({
        id: c.id,
        type: 'category' as const,
        title: `${c.name} Templates`,
        subtitle: `Category in ${c.professionSlug}`,
        url: `/${c.professionSlug}/${c.slug}`,
        icon: c.icon
      }));

    // 3. Matches in Prompts
    const matchedPrompts = prompts
      .filter(p => {
        if (p.title.toLowerCase().includes(cleanQuery) || p.description.toLowerCase().includes(cleanQuery) || p.tags.some(t => t.toLowerCase().includes(cleanQuery))) {
          return true;
        }
        const tokens = cleanQuery.split(/\s+/).filter(w => w.length > 1);
        return tokens.some(token => {
          const synonyms = synonymMap[token];
          if (!synonyms) return false;
          return synonyms.some(syn => 
            p.title.toLowerCase().includes(syn) || 
            p.description.toLowerCase().includes(syn) || 
            p.tags.some(t => t.toLowerCase().includes(syn))
          );
        });
      })
      .slice(0, 4)
      .map(p => ({
        id: p.id,
        type: 'prompt' as const,
        title: p.title,
        subtitle: p.description,
        url: `/prompt/${p.slug}`,
        icon: <Sparkles className="h-3.5 w-3.5 text-indigo-500" />
      }));

    // 4. Matches in Guides
    const matchedGuides = guides
      .filter(g => g.title.toLowerCase().includes(cleanQuery) || g.description.toLowerCase().includes(cleanQuery))
      .slice(0, 2)
      .map(g => ({
        id: g.id,
        type: 'guide' as const,
        title: g.title,
        subtitle: g.description,
        url: `/guides/${g.slug}`,
        icon: <BookOpen className="h-3.5 w-3.5 text-violet-500" />
      }));

    const result = [
      ...matchedProfessions,
      ...matchedCategories,
      ...matchedPrompts,
      ...matchedGuides
    ].slice(0, 8); // Max 8 suggestions

    setSuggestions(result);
    setSelectedIndex(0);
  }, [query]);

  // Keyboard navigation inside popover dropdown
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (suggestions.length === 0) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % suggestions.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + suggestions.length) % suggestions.length);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      // Go to highlighted suggestion
      if (suggestions[selectedIndex]) {
        router.push(suggestions[selectedIndex].url);
        setFocused(false);
        setQuery('');
      } else {
        // Fallback to query submit
        router.push(`/search?q=${encodeURIComponent(query)}`);
        setFocused(false);
      }
    } else if (e.key === 'Escape') {
      e.preventDefault();
      setFocused(false);
      inputRef.current?.blur();
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/search?q=${encodeURIComponent(query)}`);
    setFocused(false);
  };

  return (
    <div ref={containerRef} className="relative w-full z-30">
      <form onSubmit={handleFormSubmit} className="relative flex items-center w-full">
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setFocused(true)}
          placeholder={placeholder}
          onKeyDown={handleKeyDown}
          aria-label="Search prompt database"
          className={`w-full transition-all duration-300 ${
            variant === 'hero'
              ? 'h-14 rounded-full border border-zinc-200 bg-white/90 pl-14 pr-24 text-sm text-zinc-900 shadow-xl backdrop-blur-md focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 focus:bg-white dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-300 dark:focus:border-violet-400 dark:focus:ring-violet-400 dark:focus:bg-zinc-950/90'
              : 'h-9 rounded-full border border-zinc-200 bg-zinc-50/60 pl-9 pr-8 text-xs text-zinc-900 placeholder-zinc-400 focus:bg-white focus:outline-none focus:ring-1 focus:ring-violet-500 focus:border-violet-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:placeholder-zinc-500 dark:focus:bg-zinc-950 dark:focus:ring-violet-400'
          }`}
        />
        
        {/* Search icon */}
        <Search className={`absolute text-zinc-400 dark:text-zinc-500 pointer-events-none ${
          variant === 'hero' ? 'left-5 h-5 w-5' : 'left-3 h-3.5 w-3.5'
        }`} />

        {/* Shortcut indicator / Clear button */}
        {variant === 'hero' ? (
          <div className="absolute right-3 flex items-center gap-1.5">
            {query && (
              <button
                type="button"
                onClick={() => setQuery('')}
                className="rounded-full p-1 text-zinc-400 hover:bg-zinc-100 hover:text-zinc-600 dark:hover:bg-zinc-800 dark:hover:text-zinc-200"
              >
                <X className="h-4 w-4" />
              </button>
            )}
            <kbd className="hidden sm:inline-flex h-6 select-none items-center gap-0.5 rounded border border-zinc-200 bg-zinc-50 px-2 font-mono text-[10px] font-bold text-zinc-400 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-500">
              <span>/</span>
            </kbd>
          </div>
        ) : (
          <kbd className="absolute right-3 hidden lg:inline-flex h-5 select-none items-center rounded border border-zinc-200 bg-zinc-50 px-1.5 font-mono text-[9px] font-bold text-zinc-400 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-500 pointer-events-none">
            /
          </kbd>
        )}
      </form>

      {/* Autocomplete suggestion popover dropdown */}
      {focused && (
        <div className={`absolute left-0 right-0 mt-2 overflow-hidden rounded-2xl border border-zinc-200/80 bg-white/95 p-2 shadow-2xl backdrop-blur-md transition-all duration-200 dark:border-zinc-800/80 dark:bg-zinc-950/95 animate-fade-in-up ${
          variant === 'hero' ? 'top-full max-h-[380px]' : 'top-full max-h-[300px] w-[320px] md:w-[380px] md:left-auto md:-right-8'
        } overflow-y-auto`}>
          
          <div className="px-2.5 py-1.5 text-[9px] font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
            {query ? 'Search Matches' : 'Suggested Hubs & Guides'}
          </div>

          <div className="mt-1 flex flex-col gap-0.5">
            {suggestions.map((item, idx) => {
              const active = selectedIndex === idx;
              return (
                <Link
                  key={item.id}
                  href={item.url}
                  onClick={() => {
                    setFocused(false);
                    setQuery('');
                  }}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`flex items-center justify-between rounded-xl px-3 py-2 text-left transition-colors duration-150 ${
                    active
                      ? 'bg-violet-50 text-violet-700 dark:bg-violet-950/30 dark:text-violet-300'
                      : 'hover:bg-zinc-50 dark:hover:bg-zinc-900/40 text-zinc-700 dark:text-zinc-300'
                  }`}
                >
                  <div className="flex items-center gap-2.5 overflow-hidden">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-zinc-50 dark:bg-zinc-900 text-sm shadow-inner border border-zinc-200/20 dark:border-zinc-800">
                      {typeof item.icon === 'string' ? item.icon : item.icon || '🔍'}
                    </span>
                    <div className="overflow-hidden">
                      <h4 className="text-xs font-bold truncate leading-tight">
                        {item.title}
                      </h4>
                      <p className={`text-[10px] truncate leading-tight mt-0.5 ${
                        active ? 'text-violet-600/80 dark:text-violet-400/80' : 'text-zinc-400 dark:text-zinc-500'
                      }`}>
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                  
                  {active && (
                    <span className="flex items-center gap-0.5 text-[9px] font-bold text-violet-500 bg-violet-100/50 dark:bg-violet-950/50 px-1.5 py-0.5 rounded">
                      <CornerDownLeft className="h-2.5 w-2.5" />
                      <span>Enter</span>
                    </span>
                  )}
                </Link>
              );
            })}

            {suggestions.length === 0 && (
              <div className="py-8 text-center text-xs text-zinc-400 dark:text-zinc-500 flex flex-col items-center gap-1">
                <HelpCircle className="h-6 w-6 text-zinc-300 dark:text-zinc-700" />
                <span>No instant matches. Press enter to search index.</span>
              </div>
            )}
          </div>

          <div className="flex items-center justify-between border-t border-zinc-100 px-3 py-2 mt-2 text-[9px] font-medium text-zinc-400 dark:border-zinc-800 dark:text-zinc-500">
            <span>↑↓ to navigate</span>
            <span>↵ to select</span>
            <span>ESC to close</span>
          </div>

        </div>
      )}
    </div>
  );
}
