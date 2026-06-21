'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Search, Sparkles, BookOpen } from 'lucide-react';

export default function MobileBottomNav() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  const navItems = [
    { label: 'Home', href: '/', icon: Home },
    { label: 'Search', href: '/search', icon: Search },
    { label: 'Generator', href: '/generator', icon: Sparkles },
    { label: 'Guides', href: '/guides', icon: BookOpen },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-zinc-200 bg-white/95 pb-safe-bottom backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-950/95 md:hidden">
      <div className="flex h-16 items-center justify-around px-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex h-14 w-16 flex-col items-center justify-center gap-1 rounded-xl transition-all duration-200 active:scale-95 ${
                active
                  ? 'text-violet-600 dark:text-violet-400'
                  : 'text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200'
              }`}
              aria-label={item.label}
            >
              <Icon className="h-5 w-5" />
              <span className="text-[10px] font-semibold tracking-wider uppercase">
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
