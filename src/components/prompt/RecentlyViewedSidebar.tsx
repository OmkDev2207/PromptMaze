// src/components/prompt/RecentlyViewedSidebar.tsx
'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { History, ArrowRight } from 'lucide-react';

interface RecentlyViewedItem {
  title: string;
  slug: string;
  professionSlug: string;
}

export default function RecentlyViewedSidebar() {
  const [items, setItems] = useState<RecentlyViewedItem[]>([]);
  const [mounted, setMounted] = useState(false);

  const loadItems = () => {
    try {
      const stored = JSON.parse(localStorage.getItem('recentlyViewed') || '[]');
      setItems(stored);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    setMounted(true);
    loadItems();

    // Listen for custom recently viewed update event
    window.addEventListener('recently-viewed-updated', loadItems);
    return () => {
      window.removeEventListener('recently-viewed-updated', loadItems);
    };
  }, []);

  if (!mounted || items.length === 0) return null;

  return (
    <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/40 backdrop-blur-md">
      <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 flex items-center gap-1.5 border-b border-zinc-100 pb-3 dark:border-zinc-800/80">
        <History className="h-4 w-4" />
        Recently Viewed
      </h3>
      <div className="mt-4 flex flex-col gap-3">
        {items.map((item, idx) => (
          <Link
            key={`${item.slug}-${idx}`}
            href={`/prompt/${item.slug}`}
            className="group flex items-center justify-between text-xs font-semibold text-zinc-650 hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400 transition-colors"
          >
            <span className="truncate max-w-[200px]">{item.title}</span>
            <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
          </Link>
        ))}
      </div>
    </div>
  );
}
