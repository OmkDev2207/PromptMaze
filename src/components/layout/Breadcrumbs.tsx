import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import type { BreadcrumbItem } from '@/types';

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="flex py-3 text-zinc-500 dark:text-zinc-400" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-2">
        <li className="inline-flex items-center">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm font-medium hover:text-indigo-600 dark:hover:text-indigo-400"
          >
            <Home className="h-3.5 w-3.5" />
            Home
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="inline-flex items-center">
              <ChevronRight className="mx-1 h-3.5 w-3.5 text-zinc-300 dark:text-zinc-700" />
              {isLast || !item.href ? (
                <span className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="text-sm font-medium hover:text-indigo-600 dark:hover:text-indigo-400"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
