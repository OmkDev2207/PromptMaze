'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Search, Menu, X, Cpu, ChevronDown, Sparkles, Sun, Moon } from 'lucide-react';
import { professions } from '@/lib/data/professions';
import SearchAutocomplete from '../ui/SearchAutocomplete';

// Sectors grouping for mega-menu (legally safe roles only)
const sectors = [
  {
    name: 'Tech & Data',
    bg: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
    profIds: ['developers', 'data-scientists', 'cybersecurity-professionals', 'devops-engineers', 'data-analysts', 'product-managers']
  },
  {
    name: 'Creative & Design',
    bg: 'bg-pink-500/10 text-pink-600 dark:text-pink-400',
    profIds: ['photographers', 'graphic-designers', 'ux-ui-designers', 'writers', 'content-writers', 'copywriters']
  },
  {
    name: 'Business & Ops',
    bg: 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400',
    profIds: ['entrepreneurs', 'startup-founders', 'project-managers', 'business-analysts', 'consultants']
  },
  {
    name: 'Finance & Accounting',
    bg: 'bg-teal-500/10 text-teal-600 dark:text-teal-400',
    profIds: ['accountants']
  },
  {
    name: 'Education & Academics',
    bg: 'bg-blue-500/10 text-blue-600 dark:text-blue-400',
    profIds: ['teachers', 'professors', 'students', 'school-administrators', 'researchers']
  },
  {
    name: 'Services & Support',
    bg: 'bg-orange-500/10 text-orange-600 dark:text-orange-400',
    profIds: ['recruiters', 'hr-professionals', 'customer-support', 'real-estate-agents', 'sales-representatives', 'virtual-assistants', 'freelancers']
  }
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const drawerRef = useRef<HTMLDivElement>(null);

  // Close mobile drawer when path changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Handle click outside drawer to close it
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (drawerRef.current && !drawerRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    }
    if (mobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [mobileMenuOpen]);

  // Load theme preference on mount
  useEffect(() => {
    setMounted(true);
    const root = window.document.documentElement;
    const initialTheme = root.classList.contains('dark') ? 'dark' : 'light';
    setTheme(initialTheme);
  }, []);

  const toggleTheme = () => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setTheme('light');
    } else {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setTheme('dark');
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
    }
  };

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-zinc-200/60 bg-white/80 backdrop-blur-md dark:border-zinc-800/40 dark:bg-zinc-950/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Left Side: Logo & Desktop Links */}
        <div className="flex items-center gap-6 lg:gap-8">
          <Link href="/" className="flex items-center gap-2 font-bold text-lg tracking-tight text-zinc-900 dark:text-zinc-50 select-none">
            <span className="flex items-center justify-center rounded-lg bg-gradient-to-br from-violet-600 to-indigo-600 p-1.5 text-white shadow-md shadow-indigo-500/20">
              <Cpu className="h-5 w-5" />
            </span>
            <span>
              Prompt<span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">Maze</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            
            {/* Mega Menu Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-semibold text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all select-none">
                <span>Professions</span>
                <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180 duration-200" />
              </button>
              
              {/* Mega Dropdown Panel */}
              <div className="absolute left-1/2 -translate-x-1/4 mt-0 w-[800px] origin-top-left rounded-2xl border border-zinc-200/80 bg-white/95 p-6 shadow-xl opacity-0 scale-95 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto transition-all duration-200 dark:border-zinc-800/80 dark:bg-zinc-900/95 backdrop-blur-md grid grid-cols-3 gap-6">
                {sectors.map((sector) => (
                  <div key={sector.name} className="flex flex-col gap-2.5">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                      {sector.name}
                    </h4>
                    <div className="flex flex-col gap-1.5">
                      {sector.profIds.map((id) => {
                        const prof = professions.find(p => p.id === id);
                        if (!prof) return null;
                        return (
                          <Link
                            key={prof.id}
                            href={`/${prof.slug}`}
                            className="flex items-center gap-2 rounded-lg p-1.5 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
                          >
                            <span className={`flex h-6 w-6 items-center justify-center rounded text-xs shrink-0 ${sector.bg}`}>
                              {prof.icon}
                            </span>
                            <span className="text-xs font-semibold text-zinc-800 dark:text-zinc-200 truncate">
                              {prof.name}
                            </span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Link
              href="/guides"
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all ${
                isActive('/guides')
                  ? 'bg-violet-50 text-violet-600 dark:bg-violet-950/20 dark:text-violet-400'
                  : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50 dark:text-zinc-400 dark:hover:text-zinc-50 dark:hover:bg-zinc-900'
              }`}
            >
              AI Guides
            </Link>

            <Link
              href="/emails"
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all ${
                isActive('/emails')
                  ? 'bg-violet-50 text-violet-600 dark:bg-violet-950/20 dark:text-violet-400'
                  : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50 dark:text-zinc-400 dark:hover:text-zinc-50 dark:hover:bg-zinc-900'
              }`}
            >
              Email Prompts
            </Link>

            <Link
              href="/builder"
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all ${
                isActive('/builder')
                  ? 'bg-violet-50 text-violet-600 dark:bg-violet-950/20 dark:text-violet-400'
                  : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50 dark:text-zinc-400 dark:hover:text-zinc-50 dark:hover:bg-zinc-900'
              }`}
            >
              Prompt Architect
            </Link>
          </nav>
        </div>

        {/* Right Side: Quick Search, Theme Toggle, Action CTA, Mobile Trigger */}
        <div className="flex items-center gap-3">
          
          {/* Header Quick Search Box */}
          <div className="hidden sm:block w-[185px] lg:w-[225px]">
            <SearchAutocomplete placeholder="Search..." variant="nav" />
          </div>

          {/* Theme Toggler (Sun/Moon icon depending on state) */}
          {mounted && (
            <button
              onClick={toggleTheme}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 bg-zinc-50 hover:bg-zinc-100 text-zinc-500 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:bg-zinc-800 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors"
              aria-label="Toggle Light/Dark Theme"
            >
              {theme === 'dark' ? <Sun className="h-4 w-4 text-amber-500" /> : <Moon className="h-4 w-4" />}
            </button>
          )}

          {/* Search Button for Mobile */}
          <Link
            href="/search"
            className="flex sm:hidden h-10 w-10 items-center justify-center rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-900"
            aria-label="Search page"
          >
            <Search className="h-5 w-5 text-zinc-500" />
          </Link>

          {/* Quick Creator CTA */}
          <Link
            href="/builder"
            className="hidden sm:inline-flex h-9 items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 px-4 text-xs font-bold text-white shadow hover:opacity-95 hover:shadow-indigo-500/10 transition-all select-none"
          >
            <Sparkles className="mr-1.5 h-3.5 w-3.5" />
            Build Prompt
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-200 hover:bg-zinc-50 md:hidden dark:border-zinc-800 dark:hover:bg-zinc-900"
            aria-label="Toggle Navigation Drawer"
          >
            {mobileMenuOpen ? <X className="h-5 w-5 text-zinc-500" /> : <Menu className="h-5 w-5 text-zinc-500" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer (Slide-out menu) */}
      <div
        className={`fixed inset-0 z-50 bg-zinc-950/40 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          ref={drawerRef}
          className={`absolute top-0 right-0 h-full w-[85%] max-w-sm border-l border-zinc-200 bg-white p-6 shadow-2xl transition-transform duration-300 dark:border-zinc-800 dark:bg-zinc-900 flex flex-col justify-between overflow-y-auto ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div>
            {/* Drawer Header */}
            <div className="flex items-center justify-between">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="font-bold text-zinc-900 dark:text-zinc-50 flex items-center gap-1.5 hover:opacity-90"
              >
                <Cpu className="h-4.5 w-4.5 text-violet-600" />
                PromptMaze
              </Link>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg p-1.5 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                aria-label="Close drawer"
              >
                <X className="h-5 w-5 text-zinc-500" />
              </button>
            </div>

            {/* Mobile Quick Search */}
            <div className="mt-6">
              <SearchAutocomplete placeholder="Search prompts, guides..." variant="nav" />
            </div>

            {/* Quick Links */}
            <div className="mt-6 flex flex-col gap-2">
              <Link
                href="/guides"
                className={`rounded-xl px-4 py-3 text-sm font-semibold transition-all ${
                  isActive('/guides')
                    ? 'bg-violet-50 text-violet-600 dark:bg-violet-950/20 dark:text-violet-400'
                    : 'text-zinc-700 hover:bg-zinc-50 dark:text-zinc-300 dark:hover:bg-zinc-800'
                }`}
              >
                AI Guides
              </Link>
              <Link
                href="/emails"
                className={`rounded-xl px-4 py-3 text-sm font-semibold transition-all ${
                  isActive('/emails')
                    ? 'bg-violet-50 text-violet-600 dark:bg-violet-950/20 dark:text-violet-400'
                    : 'text-zinc-700 hover:bg-zinc-50 dark:text-zinc-300 dark:hover:bg-zinc-800'
                }`}
              >
                Email Prompts
              </Link>
              <Link
                href="/builder"
                className={`rounded-xl px-4 py-3 text-sm font-semibold transition-all ${
                  isActive('/builder')
                    ? 'bg-violet-50 text-violet-600 dark:bg-violet-950/20 dark:text-violet-400'
                    : 'text-zinc-700 hover:bg-zinc-50 dark:text-zinc-300 dark:hover:bg-zinc-800'
                }`}
              >
                Prompt Architect
              </Link>
            </div>

            <hr className="my-6 border-zinc-100 dark:border-zinc-800" />

            {/* Professions list grouped */}
            <div className="space-y-6 pb-20">
              <h3 className="px-4 text-[10px] font-bold uppercase tracking-wider text-zinc-400">
                Browse Professions Hub
              </h3>
              <div className="space-y-4">
                {sectors.map((sec) => (
                  <div key={sec.name} className="space-y-1">
                    <h4 className="px-4 text-[11px] font-bold text-zinc-500 dark:text-zinc-400">
                      {sec.name}
                    </h4>
                    <div className="grid grid-cols-2 gap-1.5 px-2">
                      {sec.profIds.map((id) => {
                        const prof = professions.find(p => p.id === id);
                        if (!prof) return null;
                        return (
                          <Link
                            key={prof.id}
                            href={`/${prof.slug}`}
                            className="flex items-center gap-1.5 rounded-lg p-2 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
                          >
                            <span className="text-sm shrink-0">{prof.icon}</span>
                            <span className="text-xs font-semibold text-zinc-800 dark:text-zinc-200 truncate">
                              {prof.name}
                            </span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer branding in drawer */}
          <div className="text-center text-[10px] text-zinc-400 dark:text-zinc-500">
            PromptMaze © {new Date().getFullYear()}
          </div>
        </div>
      </div>
    </header>
  );
}
