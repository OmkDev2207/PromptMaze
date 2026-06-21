'use client';

import React, { useState, useEffect } from 'react';
import { Check, Copy } from 'lucide-react';

interface ToastData {
  title: string;
}

export default function CopyToast() {
  const [toast, setToast] = useState<ToastData | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleCopySuccess = (e: Event) => {
      const customEvent = e as CustomEvent<ToastData>;
      setToast(customEvent.detail);
      setVisible(true);
    };

    window.addEventListener('copy-success', handleCopySuccess);
    return () => {
      window.removeEventListener('copy-success', handleCopySuccess);
    };
  }, []);

  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => {
        setVisible(false);
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [visible]);

  if (!toast) return null;

  return (
    <div
      className={`fixed z-50 transition-all duration-300 ease-out pointer-events-none ${
        visible
          ? 'opacity-100 translate-y-0 scale-100'
          : 'opacity-0 translate-y-4 scale-95 pointer-events-none'
      } left-4 right-4 top-4 mx-auto max-w-sm sm:left-auto sm:right-6 sm:bottom-6 sm:top-auto sm:mx-0`}
    >
      <div className="flex items-center gap-3 rounded-2xl border border-emerald-100 bg-white p-4 shadow-xl dark:border-emerald-950 dark:bg-zinc-900 pointer-events-auto">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-400">
          <Check className="h-4.5 w-4.5" />
        </span>
        <div className="flex-1 overflow-hidden">
          <h4 className="text-xs font-bold text-zinc-900 dark:text-zinc-50 uppercase tracking-wider">
            Prompt Copied
          </h4>
          <p className="mt-0.5 text-xs text-zinc-500 dark:text-zinc-400 truncate font-semibold">
            &ldquo;{toast.title}&rdquo;
          </p>
        </div>
      </div>
    </div>
  );
}
