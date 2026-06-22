import React from 'react';
import Link from 'next/link';
import { Cpu, ExternalLink } from 'lucide-react';
import { professions } from '@/lib/data/professions';
import Newsletter from '../ui/Newsletter';

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        
        {/* Newsletter Section */}
        <div className="mb-12 border-b border-zinc-200 pb-12 dark:border-zinc-800">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-1">
              <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
                Subscribe to our newsletter
              </h3>
              <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                Get the latest ChatGPT prompts and AI guides delivered straight to your inbox.
              </p>
            </div>
            <div className="lg:col-span-2">
              <Newsletter />
            </div>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
              Professions
            </h4>
            <ul className="mt-4 space-y-2">
              {professions.slice(0, 6).map((prof) => (
                <li key={prof.id}>
                  <Link href={`/${prof.slug}`} className="text-sm text-zinc-600 hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400">
                    {prof.name} Hub
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link href="/" className="text-xs font-bold text-violet-600 hover:underline dark:text-violet-400">
                  View All &rarr;
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
              Popular Searches
            </h4>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/teachers/lesson-plan-prompts" className="text-sm text-zinc-600 hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400">
                  Lesson Plan Prompts
                </Link>
              </li>
              <li>
                <Link href="/developers/debugging-prompts" className="text-sm text-zinc-600 hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400">
                  Debugging Prompts
                </Link>
              </li>
              <li>
                <Link href="/marketers/seo-prompts" className="text-sm text-zinc-600 hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400">
                  SEO Prompts
                </Link>
              </li>
              <li>
                <Link href="/students/study-prompts" className="text-sm text-zinc-600 hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400">
                  Study Prompts
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
              Resources
            </h4>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/guides" className="text-sm text-zinc-600 hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400">
                  AI Learning Guides
                </Link>
              </li>
              <li>
                <Link href="/generator" className="text-sm text-zinc-600 hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400">
                  Prompt Generator
                </Link>
              </li>
              <li>
                <Link href="/search" className="text-sm text-zinc-600 hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400">
                  Global Search
                </Link>
              </li>
              <li>
                <Link href="/titles" className="text-sm text-zinc-600 hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400">
                  Catchy Title Generator
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Legal & Copyright */}
        <div className="mt-12 border-t border-zinc-200 pt-8 dark:border-zinc-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400 text-sm">
              <Cpu className="h-4 w-4 text-violet-600" />
              <span>© {new Date().getFullYear()} PromptMaze. All rights reserved.</span>
            </div>
            <div className="flex gap-6 text-sm">
              <Link href="/about" className="text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50">
                About Us
              </Link>
              <Link href="/privacy" className="text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
