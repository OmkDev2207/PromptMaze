import React from 'react';
import { Sparkles } from 'lucide-react';

export default function PremiumBadge() {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 px-2 py-0.5 text-xs font-semibold text-amber-700 dark:text-amber-400 border border-amber-500/30">
      <Sparkles className="h-3 w-3 fill-amber-500 text-amber-500" />
      Premium
    </span>
  );
}
