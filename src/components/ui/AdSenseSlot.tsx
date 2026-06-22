'use client';

import React, { useEffect } from 'react';
import { Sparkles } from 'lucide-react';

interface AdSenseSlotProps {
  slot: string;
  format?: 'auto' | 'fluid' | 'rectangle';
  responsive?: 'true' | 'false';
  className?: string;
  variant?: 'banner' | 'sidebar' | 'in-content';
}

export default function AdSenseSlot({
  slot,
  format = 'auto',
  responsive = 'true',
  className = '',
  variant = 'banner'
}: AdSenseSlotProps) {
  const isEnabled = process.env.NEXT_PUBLIC_ENABLE_ADSENSE === 'true';
  const adClientId = process.env.NEXT_PUBLIC_ADSENSE_ID;

  useEffect(() => {
    if (isEnabled && typeof window !== 'undefined') {
      try {
        // @ts-ignore
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        console.error('AdSense initialization error:', e);
      }
    }
  }, [isEnabled]);

  // Styling based on variant
  const getVariantStyles = () => {
    switch (variant) {
      case 'sidebar':
        return 'min-h-[300px] py-8 px-5 border-zinc-200 dark:border-zinc-800 bg-zinc-100/50 dark:bg-zinc-900/30';
      case 'in-content':
        return 'min-h-[180px] py-6 px-8 border-zinc-200 dark:border-zinc-800 bg-zinc-100/30 dark:bg-zinc-900/20';
      case 'banner':
      default:
        return 'min-h-[110px] py-4 px-6 border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/10';
    }
  };

  if (!isEnabled) {
    return (
      <div className={`my-8 flex w-full flex-col items-center justify-center rounded-2xl border border-dashed text-center relative overflow-hidden backdrop-blur-sm ${getVariantStyles()} ${className}`}>
        {/* Subtle background element */}
        <div className="absolute top-0 right-0 rounded-bl-xl bg-zinc-200/50 dark:bg-zinc-800/50 px-2 py-0.5 text-[8px] font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 select-none">
          Ad Placement
        </div>
        
        <div className="flex flex-col items-center gap-1.5 max-w-sm">
          <span className="rounded-full bg-zinc-200/60 dark:bg-zinc-800/80 px-2.5 py-0.5 text-[9px] font-extrabold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
            Sponsored
          </span>
          <h4 className="text-xs font-bold text-zinc-800 dark:text-zinc-300 leading-normal">
            Google AdSense Space
          </h4>
          <p className="text-[10px] leading-normal font-semibold text-zinc-400 dark:text-zinc-500">
            Ad slot ID: <code className="font-mono text-[9px] bg-zinc-200/40 dark:bg-zinc-800/40 px-1 py-0.5 rounded">{slot}</code>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={`my-8 overflow-hidden rounded-2xl ${className}`}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={adClientId}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive}
      />
    </div>
  );
}
