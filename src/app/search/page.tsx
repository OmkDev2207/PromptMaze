'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { prompts } from '@/lib/data/prompts';
import { searchGuides } from '@/lib/data/guides';
import { fuzzySearchPrompts } from '@/lib/utils/search';
import { professions } from '@/lib/data/professions';
import PromptCard from '@/components/prompt/PromptCard';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import AdSenseSlot from '@/components/ui/AdSenseSlot';
import { Search, Compass, BookOpen, Filter, ArrowRight, HelpCircle } from 'lucide-react';
import Link from 'next/link';

import { Suspense } from 'react';

function SearchPageContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const initialQuery = searchParams.get('q') || '';

  const [query, setQuery] = useState(initialQuery);
  const [selectedProfession, setSelectedProfession] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [activeTab, setActiveTab] = useState<'prompts' | 'guides'>('prompts');

  useEffect(() => {
    setQuery(initialQuery);
  }, [initialQuery]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/search?q=${encodeURIComponent(query)}`);
  };

  // Perform search
  const promptsResults = fuzzySearchPrompts(prompts, query, selectedProfession === 'all' ? undefined : selectedProfession)
    .filter(p => selectedDifficulty === 'all' || p.difficulty === selectedDifficulty);

  const guidesResults = searchGuides(query)
    .filter(g => selectedProfession === 'all' || g.professionSlug === selectedProfession)
    .filter(g => selectedDifficulty === 'all' || g.difficulty === selectedDifficulty);

  const totalResults = promptsResults.length + guidesResults.length;

  const breadcrumbs = [{ label: 'Global Search' }];

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      
      {/* Breadcrumbs */}
      <Breadcrumbs items={breadcrumbs} />

      {/* Header */}
      <div className="mt-4 border-b border-zinc-200 pb-8 dark:border-zinc-800">
        <h1 className="text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
          Search Prompt Database
        </h1>
        <p className="mt-2 text-zinc-500 dark:text-zinc-400">
          Find ChatGPT prompt templates, AI engineering tutorials, and workflows across 6 core professions.
        </p>
      </div>

      {/* AdSense Top slot */}
      <AdSenseSlot slot="search-top" />

      {/* Search Input Box */}
      <div className="mt-8 max-w-2xl">
        <form onSubmit={handleSearchSubmit} className="relative flex items-center">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search ChatGPT prompts for teachers, developers, SEO..."
            className="w-full rounded-xl border border-zinc-200 bg-white py-3 pl-12 pr-4 text-sm text-zinc-900 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-50"
          />
          <Search className="absolute left-4 h-5 w-5 text-zinc-400" />
          <button
            type="submit"
            className="absolute right-2 rounded-lg bg-indigo-600 px-4 py-1.5 text-xs font-semibold text-white shadow hover:bg-indigo-500 transition-colors"
          >
            Search
          </button>
        </form>
        
        {/* Related Searches */}
        <div className="mt-3 flex flex-wrap gap-2 items-center text-xs">
          <span className="font-bold text-zinc-400 dark:text-zinc-505 dark:text-zinc-500 uppercase tracking-wider text-[10px]">Related Searches:</span>
          {[
            { name: 'Python Prompts', slug: 'python-developers' },
            { name: 'React Hooks', slug: 'react-developers' },
            { name: 'SEO Content', slug: 'seo' },
            { name: 'LinkedIn Hooks', slug: 'linkedin' },
            { name: 'ATS Resume', slug: 'resumes' },
            { name: 'STAR Interview Prep', slug: 'interviews' }
          ].map((item) => (
            <Link
              key={item.slug}
              href={`/chatgpt-prompts-for-${item.slug}`}
              className="rounded-lg bg-zinc-100 hover:bg-zinc-200 px-2.5 py-1 font-semibold text-zinc-650 hover:text-indigo-600 dark:bg-zinc-900/60 dark:hover:bg-zinc-800 dark:text-zinc-300 dark:hover:text-indigo-400 transition-all duration-150"
            >
              🔍 {item.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Filters Bar */}
      <div className="mt-6 flex flex-wrap items-center gap-4 border-b border-zinc-150 pb-6 dark:border-zinc-850">
        <div className="flex items-center gap-1.5 text-sm text-zinc-500">
          <Filter className="h-4 w-4" />
          <span>Filters:</span>
        </div>

        {/* Profession Filter */}
        <select
          value={selectedProfession}
          onChange={(e) => setSelectedProfession(e.target.value)}
          className="rounded-lg border border-zinc-200 bg-white px-3 py-1.5 text-sm text-zinc-700 shadow-sm focus:border-indigo-500 focus:outline-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300"
        >
          <option value="all">All Professions</option>
          {professions.map((p) => (
            <option key={p.slug} value={p.slug}>
              {p.name}
            </option>
          ))}
        </select>

        {/* Difficulty Filter */}
        <select
          value={selectedDifficulty}
          onChange={(e) => setSelectedDifficulty(e.target.value)}
          className="rounded-lg border border-zinc-200 bg-white px-3 py-1.5 text-sm text-zinc-700 shadow-sm focus:border-indigo-500 focus:outline-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300"
        >
          <option value="all">All Difficulties</option>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select>

        {query && (
          <span className="text-xs text-zinc-450 italic">
            Found {totalResults} matches for &ldquo;{query}&rdquo;
          </span>
        )}
      </div>

      {/* Tabs Row */}
      <div className="mt-8 flex border-b border-zinc-200 dark:border-zinc-800">
        <button
          onClick={() => setActiveTab('prompts')}
          className={`border-b-2 px-6 py-3 text-sm font-bold transition-all ${
            activeTab === 'prompts'
              ? 'border-indigo-600 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400'
              : 'border-transparent text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-300'
          }`}
        >
          Prompts ({promptsResults.length})
        </button>
        <button
          onClick={() => setActiveTab('guides')}
          className={`border-b-2 px-6 py-3 text-sm font-bold transition-all ${
            activeTab === 'guides'
              ? 'border-indigo-600 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400'
              : 'border-transparent text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-300'
          }`}
        >
          Guides ({guidesResults.length})
        </button>
      </div>

      {/* Results Rendering */}
      <div className="mt-8">
        {activeTab === 'prompts' ? (
          <div>
            {promptsResults.length === 0 ? (
              <div className="text-center py-12">
                <HelpCircle className="mx-auto h-12 w-12 text-zinc-300 dark:text-zinc-700" />
                <h3 className="mt-4 text-lg font-bold text-zinc-900 dark:text-zinc-50">No prompts found</h3>
                <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                  Try adjusting search keyword or selecting &apos;All Professions&apos;.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {promptsResults.map((prompt) => (
                  <PromptCard key={prompt.id} prompt={prompt} />
                ))}
              </div>
            )}
          </div>
        ) : (
          <div>
            {guidesResults.length === 0 ? (
              <div className="text-center py-12">
                <BookOpen className="mx-auto h-12 w-12 text-zinc-300 dark:text-zinc-700" />
                <h3 className="mt-4 text-lg font-bold text-zinc-900 dark:text-zinc-50">No guides found</h3>
                <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                  Try adjusting your search terms or filters.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {guidesResults.map((guide) => (
                  <article
                    key={guide.id}
                    className="group flex flex-col justify-between rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm hover:border-zinc-300 hover:shadow-md transition-all duration-300 dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-zinc-700"
                  >
                    <div>
                      <div className="flex items-center justify-between text-xs font-semibold text-zinc-400">
                        <span>{guide.readTimeMinutes} Min Read</span>
                        <span className="rounded-full bg-zinc-100 px-2 py-0.5 text-[10px] uppercase text-zinc-500 dark:bg-zinc-850 dark:text-zinc-400">
                          {guide.difficulty}
                        </span>
                      </div>
                      <h3 className="mt-4 text-lg font-bold text-zinc-900 dark:text-zinc-50 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                        <Link href={`/guides/${guide.slug}`}>
                          {guide.title}
                        </Link>
                      </h3>
                      <p className="mt-2 text-sm text-zinc-500 line-clamp-3 dark:text-zinc-400">
                        {guide.description}
                      </p>
                    </div>
                    <div className="mt-6 flex items-center justify-between border-t border-zinc-100 pt-4 dark:border-zinc-800/80">
                      <div className="flex gap-1 text-xs text-zinc-400">
                        {guide.tags.slice(0, 2).map((t) => `#${t}`).join(' ')}
                      </div>
                      <Link
                        href={`/guides/${guide.slug}`}
                        className="inline-flex items-center gap-0.5 text-xs font-semibold text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
                      >
                        Read Guide
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* AdSense Bottom slot */}
      <AdSenseSlot slot="search-bottom" />

    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={
      <div className="mx-auto w-full max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8">
        <div className="animate-pulse flex flex-col items-center gap-4">
          <div className="h-8 w-64 bg-zinc-200 rounded dark:bg-zinc-800"></div>
          <div className="h-4 w-96 bg-zinc-200 rounded dark:bg-zinc-800"></div>
        </div>
      </div>
    }>
      <SearchPageContent />
    </Suspense>
  );
}
