'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { getGuides } from '@/lib/data/guides';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import AdSenseSlot from '@/components/ui/AdSenseSlot';
import { BookOpen, Search, Filter, BookMarked, ArrowRight } from 'lucide-react';

export default function GuidesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [selectedProfession, setSelectedProfession] = useState<string>('all');

  const allGuides = getGuides();

  const filteredGuides = allGuides.filter((guide) => {
    const matchesSearch =
      guide.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      guide.description.toLowerCase().includes(guide.description.toLowerCase()) ||
      guide.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesDifficulty =
      selectedDifficulty === 'all' || guide.difficulty === selectedDifficulty;

    const matchesProfession =
      selectedProfession === 'all' || guide.professionSlug === selectedProfession;

    return matchesSearch && matchesDifficulty && matchesProfession;
  });

  const breadcrumbs = [{ label: 'AI Guides' }];

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      
      {/* Breadcrumbs */}
      <Breadcrumbs items={breadcrumbs} />

      {/* Header */}
      <div className="mt-4 border-b border-zinc-200 pb-8 dark:border-zinc-800">
        <h1 className="text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
          Prompt Engineering Guides
        </h1>
        <p className="mt-2 text-zinc-500 dark:text-zinc-400">
          Curated tutorials, advanced models logic, and workflow patterns to help you master ChatGPT, Claude, and Gemini.
        </p>
      </div>

      {/* AdSense Top slot */}
      <AdSenseSlot slot="guides-list-top" />

      {/* Filters & Search Row */}
      <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between border-b border-zinc-100 pb-6 dark:border-zinc-800/80">
        
        {/* Search */}
        <div className="relative flex-1 max-w-md">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search guides by title, tags..."
            className="w-full rounded-lg border border-zinc-200 bg-white py-2 pl-10 pr-4 text-sm text-zinc-900 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-50"
          />
          <Search className="absolute left-3.5 top-2.5 h-4.5 w-4.5 text-zinc-400" />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 items-center">
          <div className="flex items-center gap-1 text-sm text-zinc-500">
            <Filter className="h-4 w-4" />
            <span>Filters:</span>
          </div>

          {/* Profession filter */}
          <select
            value={selectedProfession}
            onChange={(e) => setSelectedProfession(e.target.value)}
            className="rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-700 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300"
          >
            <option value="all">All Professions</option>
            <option value="teachers">Teachers</option>
            <option value="developers">Developers</option>
            <option value="marketers">Marketers</option>
            <option value="recruiters">Recruiters</option>
            <option value="students">Students</option>
            <option value="accountants">Accountants</option>
          </select>

          {/* Difficulty filter */}
          <select
            value={selectedDifficulty}
            onChange={(e) => setSelectedDifficulty(e.target.value)}
            className="rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-700 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300"
          >
            <option value="all">All Difficulties</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>

      </div>

      {/* Guides Grid */}
      <section className="mt-8">
        {filteredGuides.length === 0 ? (
          <div className="mt-12 text-center">
            <BookOpen className="mx-auto h-12 w-12 text-zinc-300 dark:text-zinc-700" />
            <h3 className="mt-4 text-lg font-bold text-zinc-900 dark:text-zinc-50">No guides found</h3>
            <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
              Try adjusting your filters or search terms.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredGuides.map((guide) => (
              <article
                key={guide.id}
                className="group flex flex-col justify-between rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm hover:border-zinc-300 hover:shadow-md transition-all duration-300 dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-zinc-700"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-600 dark:text-indigo-400">
                      <BookMarked className="h-3.5 w-3.5" />
                      {guide.readTimeMinutes} Min Read
                    </span>
                    <span className="rounded-full bg-zinc-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">
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
                  <div className="flex flex-wrap gap-1">
                    {guide.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="text-xs text-zinc-400 dark:text-zinc-500">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/guides/${guide.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
                  >
                    Read Tutorial
                    <ArrowRight className="h-3.5 w-3.5 transform group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* AdSense Bottom slot */}
      <AdSenseSlot slot="guides-list-bottom" />

    </div>
  );
}
