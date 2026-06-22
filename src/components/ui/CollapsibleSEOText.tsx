'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface CollapsibleSEOTextProps {
  htmlContent: string;
  maxCollapsedHeight?: string; // e.g. "200px"
  title?: string;
}

export default function CollapsibleSEOText({
  htmlContent,
  maxCollapsedHeight = '220px',
  title = 'How to write better prompts'
}: CollapsibleSEOTextProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="bg-white rounded-3xl border border-zinc-200/80 p-6 sm:p-8 dark:border-zinc-800/80 dark:bg-zinc-900/40 backdrop-blur-md relative overflow-hidden transition-all duration-300">
      <h2 className="text-lg font-black text-zinc-900 dark:text-zinc-50 mb-3">
        {title}
      </h2>
      
      <div 
        className="relative transition-all duration-500 ease-in-out overflow-hidden"
        style={{
          maxHeight: isExpanded ? '3000px' : maxCollapsedHeight,
        }}
      >
        <div
          className="prose prose-zinc max-w-none dark:prose-invert
            prose-h2:text-base prose-h2:font-extrabold prose-h2:text-zinc-900 dark:prose-h2:text-zinc-50 prose-h2:mt-6 prose-h2:mb-2
            prose-h3:text-sm prose-h3:font-bold prose-h3:text-zinc-800 dark:prose-h3:text-zinc-200 prose-h3:mt-4
            prose-p:text-xs sm:prose-p:text-sm prose-p:leading-relaxed prose-p:text-zinc-600 dark:prose-p:text-zinc-400 prose-p:mb-3"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
        
        {/* Fading overlay cover when collapsed */}
        {!isExpanded && (
          <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-white via-white/80 to-transparent dark:from-zinc-950 dark:via-zinc-950/80 pointer-events-none" />
        )}
      </div>

      {/* Expand/Collapse Button */}
      <div className="mt-4 flex justify-center border-t border-zinc-100 pt-3 dark:border-zinc-800/60">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="inline-flex items-center gap-1 text-xs font-bold text-violet-600 hover:text-violet-500 dark:text-violet-400 dark:hover:text-violet-300 transition-colors"
        >
          {isExpanded ? (
            <>
              Show Less
              <ChevronUp className="h-4 w-4" />
            </>
          ) : (
            <>
              Read Full Guide
              <ChevronDown className="h-4 w-4" />
            </>
          )}
        </button>
      </div>
    </section>
  );
}
