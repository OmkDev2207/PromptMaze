// src/types/index.ts
export type Difficulty = 'beginner' | 'intermediate' | 'advanced';

export interface Profession {
  id: string;
  slug: string;
  name: string;
  description: string;
  longDescription: string;
  icon: string;
  color: string;
  gradient: string;
  bgGradient: string;
  metaTitle: string;
  metaDescription: string;
  featured: boolean;
}

export interface Category {
  id: string;
  slug: string;
  professionSlug: string;
  name: string;
  description: string;
  icon: string;
  sortOrder: number;
  promptCount?: number;
}

export interface Prompt {
  id: string;
  slug: string;
  title: string;
  content: string;
  description: string;
  useCase: string;
  professionSlug: string;
  categorySlug: string;
  difficulty: Difficulty;
  exampleOutput: string;
  tags: string[];
  featured: boolean;
}

export interface Guide {
  id: string;
  slug: string;
  title: string;
  content: string;
  description: string;
  professionSlug?: string;
  tags: string[];
  difficulty: Difficulty;
  readTimeMinutes: number;
  featured: boolean;
  publishedAt: string;
}

export interface SearchResult {
  type: 'prompt' | 'guide';
  id: string;
  slug: string;
  title: string;
  description: string;
  professionSlug?: string;
  categorySlug?: string;
  tags: string[];
  difficulty?: Difficulty;
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
}
