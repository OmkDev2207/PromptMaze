'use client';

import React, { useState, useEffect } from 'react';
import { List, ChevronDown, ChevronUp } from 'lucide-react';

interface HeadingItem {
  id: string;
  text: string;
  level: number;
}

export default function TableOfContents() {
  const [headings, setHeadings] = useState<HeadingItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');
  const [isOpenMobile, setIsOpenMobile] = useState(false);

  useEffect(() => {
    const article = document.querySelector('article');
    if (!article) return;

    const elements = article.querySelectorAll('h2, h3');
    const headingList = Array.from(elements)
      .map((el) => ({
        id: el.id,
        text: el.textContent || '',
        level: el.tagName === 'H2' ? 2 : 3,
      }))
      .filter((item) => item.id);

    setHeadings(headingList);
  }, []);

  useEffect(() => {
    if (headings.length === 0) return;

    const article = document.querySelector('article');
    if (!article) return;

    const elements = article.querySelectorAll('h2, h3');
    const observer = new IntersectionObserver(
      (entries) => {
        // Find visible sections
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);
        if (visibleEntries.length > 0) {
          // Set active as the first visible element
          setActiveId(visibleEntries[0].target.id);
        }
      },
      {
        rootMargin: '-100px 0px -70% 0px', // trigger when heading is in the upper 30% of viewport
      }
    );

    elements.forEach((el) => {
      if (el.id) observer.observe(el);
    });

    return () => {
      elements.forEach((el) => {
        if (el.id) observer.unobserve(el);
      });
    };
  }, [headings]);

  if (headings.length === 0) return null;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setActiveId(id);
      setIsOpenMobile(false);
    }
  };

  return (
    <div className="w-full">
      {/* Mobile Collapsible TOC */}
      <div className="block lg:hidden rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900/50">
        <button
          onClick={() => setIsOpenMobile(!isOpenMobile)}
          className="flex w-full items-center justify-between px-5 py-4 text-sm font-bold text-zinc-800 dark:text-zinc-200"
        >
          <span className="flex items-center gap-2">
            <List className="h-4.5 w-4.5 text-violet-500" />
            Table of Contents
          </span>
          {isOpenMobile ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </button>

        {isOpenMobile && (
          <div className="border-t border-zinc-100 px-5 py-4 dark:border-zinc-800/60 max-h-80 overflow-y-auto">
            <nav className="flex flex-col gap-3">
              {headings.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleClick(e, item.id)}
                  className={`text-xs font-semibold hover:text-violet-600 dark:hover:text-violet-400 transition-colors ${
                    item.level === 3 ? 'pl-4 text-zinc-500 dark:text-zinc-400' : 'text-zinc-800 dark:text-zinc-200'
                  } ${activeId === item.id ? '!text-violet-600 dark:!text-violet-400' : ''}`}
                >
                  {item.text}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>

      {/* Desktop Sticky TOC */}
      <div className="hidden lg:block sticky top-24 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/50 max-h-[calc(100vh-140px)] overflow-y-auto">
        <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-4 flex items-center gap-2">
          <List className="h-4 w-4 text-violet-500" />
          On This Page
        </h3>
        <nav className="flex flex-col gap-3">
          {headings.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleClick(e, item.id)}
              className={`text-xs font-semibold hover:text-violet-600 dark:hover:text-violet-400 transition-colors border-l-2 py-0.5 ${
                item.level === 3
                  ? 'pl-5 text-zinc-400 dark:text-zinc-500 border-transparent'
                  : 'pl-3 text-zinc-700 dark:text-zinc-300 border-transparent'
              } ${
                activeId === item.id
                  ? '!text-violet-600 dark:!text-violet-400 !border-violet-600 dark:!border-violet-400'
                  : ''
              }`}
            >
              {item.text}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
