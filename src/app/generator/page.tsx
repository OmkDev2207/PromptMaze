'use client';

import React, { useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

function RedirectContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const paramsStr = searchParams.toString();
    const dest = paramsStr ? `/builder?${paramsStr}` : '/builder';
    router.replace(dest);
  }, [router, searchParams]);

  return (
    <div className="flex flex-col items-center justify-center py-32 bg-zinc-50 dark:bg-zinc-950">
      <div className="flex flex-col items-center gap-4">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-violet-600 border-t-transparent"></div>
        <h1 className="text-lg font-bold text-zinc-800 dark:text-zinc-200">
          Redirecting to Prompt Architect...
        </h1>
        <p className="text-xs text-zinc-400">
          We have upgraded the Prompt Generator to a premium builder studio.
        </p>
      </div>
    </div>
  );
}

export default function GeneratorPage() {
  return (
    <Suspense
      fallback={
        <div className="flex flex-col items-center justify-center py-32 bg-zinc-50 dark:bg-zinc-950">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-zinc-200 border-t-transparent dark:border-zinc-800"></div>
        </div>
      }
    >
      <RedirectContent />
    </Suspense>
  );
}
