// src/lib/utils/search.ts
import type { Prompt } from '@/types';

// Simple Levenshtein distance calculator for fuzzy matching
export function getEditDistance(a: string, b: string): number {
  if (a.length === 0) return b.length;
  if (b.length === 0) return a.length;

  const matrix: number[][] = [];

  for (let i = 0; i <= b.length; i++) {
    matrix[i] = [i];
  }

  for (let j = 0; j <= a.length; j++) {
    matrix[0][j] = j;
  }

  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1, // substitution
          matrix[i][j - 1] + 1,     // insertion
          matrix[i - 1][j] + 1      // deletion
        );
      }
    }
  }

  return matrix[b.length][a.length];
}

// Tokenize text into words (alphanumeric, lowercase, length > 1)
function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^\w\s]/g, ' ')
    .split(/\s+/)
    .filter(w => w.length > 1);
}

export interface ScoredPrompt {
  prompt: Prompt;
  score: number;
}

export function fuzzySearchPrompts(
  promptsList: Prompt[],
  query: string,
  professionSlug?: string
): Prompt[] {
  const cleanQuery = query.trim().toLowerCase();
  if (!cleanQuery) {
    // If no query, return prompts matching profession or all prompts
    return professionSlug
      ? promptsList.filter(p => p.professionSlug === professionSlug)
      : promptsList;
  }

  const queryTokens = tokenize(cleanQuery);
  if (queryTokens.length === 0) {
    return [];
  }

  const scoredPrompts: ScoredPrompt[] = [];

  promptsList.forEach((prompt) => {
    // Filter by profession first if specified
    if (professionSlug && prompt.professionSlug !== professionSlug) {
      return;
    }

    let score = 0;
    const titleTokens = tokenize(prompt.title);
    const descTokens = tokenize(prompt.description);
    
    // Union tags and keywords for search index
    const tagsAndKeywords = [
      ...prompt.tags,
      ...(prompt.useCase ? tokenize(prompt.useCase) : [])
    ].map(t => t.toLowerCase());

    queryTokens.forEach((qToken) => {
      // 1. Exact Match / Substring Match in Title (Weight: 15)
      if (prompt.title.toLowerCase().includes(qToken)) {
        score += 15;
      }
      
      // 2. Exact Match in Tags/Keywords (Weight: 8)
      if (tagsAndKeywords.some(tag => tag === qToken || tag.includes(qToken))) {
        score += 8;
      }

      // 3. Exact Match / Substring Match in Description (Weight: 3)
      if (prompt.description.toLowerCase().includes(qToken)) {
        score += 3;
      }

      // 4. Fuzzy Token Matching (Levenshtein Distance)
      // Check title tokens
      titleTokens.forEach((tToken) => {
        const dist = getEditDistance(qToken, tToken);
        // Allow 1 typo for short words (len <= 4) or 2 typos for longer words
        const maxDist = qToken.length <= 4 ? 1 : 2;
        if (dist > 0 && dist <= maxDist) {
          // Add score inversely proportional to distance
          score += (5 / dist);
        }
      });

      // Check tags and keywords for fuzzy match
      tagsAndKeywords.forEach((tag) => {
        const dist = getEditDistance(qToken, tag);
        const maxDist = qToken.length <= 4 ? 1 : 2;
        if (dist > 0 && dist <= maxDist) {
          score += (3 / dist);
        }
      });
    });

    if (score > 0) {
      scoredPrompts.push({ prompt, score });
    }
  });

  // Sort by score descending
  return scoredPrompts
    .sort((a, b) => b.score - a.score)
    .map(sp => sp.prompt);
}
