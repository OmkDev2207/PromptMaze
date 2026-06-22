// src/app/emails/EmailLibraryClient.tsx
'use client';

import React, { useState } from 'react';
import { Search, Filter, MailOpen } from 'lucide-react';
import { emailCategories, emailPrompts } from '@/lib/data/emails';
import EmailPromptCard from '@/components/prompt/EmailPromptCard';

export default function EmailLibraryClient() {
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredPrompts = emailPrompts.filter((prompt) => {
    const matchesCategory = selectedCategory === 'all' || prompt.categorySlug === selectedCategory;
    
    const lowerQuery = query.toLowerCase().trim();
    const matchesQuery = lowerQuery === '' || 
      prompt.title.toLowerCase().includes(lowerQuery) ||
      prompt.description.toLowerCase().includes(lowerQuery) ||
      prompt.content.toLowerCase().includes(lowerQuery) ||
      prompt.tags.some(tag => tag.toLowerCase().includes(lowerQuery));

    return matchesCategory && matchesQuery;
  });

  return (
    <div className="flex flex-col gap-6">
      {/* Search and Filters Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-zinc-200 pb-6 dark:border-zinc-800">
        
        {/* Search Input */}
        <div className="relative flex-1 max-w-md">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search email templates (e.g., follow-up, pitch)..."
            className="w-full rounded-xl border border-zinc-200 bg-white py-3 pl-11 pr-4 text-sm text-zinc-900 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-50"
          />
          <Search className="absolute left-4 top-3.5 h-4 w-4 text-zinc-405 text-zinc-400" />
        </div>

        {/* Categories Scroller / Quick Filter Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`shrink-0 rounded-xl px-4 py-2.5 text-xs font-bold transition-all border ${
              selectedCategory === 'all'
                ? 'border-indigo-650 bg-indigo-50 text-indigo-750 dark:border-indigo-500 dark:bg-indigo-950/40 dark:text-indigo-300'
                : 'border-zinc-200 bg-white text-zinc-600 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/40 dark:text-zinc-400 dark:hover:bg-zinc-800'
            }`}
          >
            All Categories
          </button>
          {emailCategories.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => setSelectedCategory(cat.slug)}
              className={`shrink-0 rounded-xl px-4 py-2.5 text-xs font-bold transition-all border ${
                selectedCategory === cat.slug
                  ? 'border-indigo-650 bg-indigo-50 text-indigo-750 dark:border-indigo-500 dark:bg-indigo-950/40 dark:text-indigo-300'
                  : 'border-zinc-200 bg-white text-zinc-600 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/40 dark:text-zinc-400 dark:hover:bg-zinc-800'
              }`}
            >
              <span className="mr-1.5">{cat.icon}</span>
              {cat.name.replace(' Emails', '')}
            </button>
          ))}
        </div>

      </div>

      {/* Prompts Count and Results */}
      <div className="flex items-center justify-between text-xs text-zinc-400 font-semibold uppercase tracking-wider">
        <span>Found {filteredPrompts.length} prompt templates</span>
        {selectedCategory !== 'all' && (
          <button
            onClick={() => { setSelectedCategory('all'); setQuery(''); }}
            className="text-indigo-600 hover:underline dark:text-indigo-400"
          >
            Clear filters
          </button>
        )}
      </div>

      {/* Prompts Grid */}
      {filteredPrompts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredPrompts.map((prompt) => (
            <EmailPromptCard key={prompt.id} prompt={prompt} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-16 text-center border border-dashed border-zinc-200 rounded-3xl dark:border-zinc-800">
          <MailOpen className="h-12 w-12 text-zinc-350 mb-4" />
          <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-50">No templates found</h3>
          <p className="mt-1 text-sm text-zinc-500 max-w-sm">
            Try adjusting your search filters or clear your text query to browse the full library list.
          </p>
        </div>
      )}
    </div>
  );
}
