// src/app/prompts-for-[topic]/page.tsx
import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import AdSenseSlot from '@/components/ui/AdSenseSlot';
import PromptCard from '@/components/prompt/PromptCard';
import EmailPromptCard from '@/components/prompt/EmailPromptCard';
import { prompts } from '@/lib/data/prompts';
import { fuzzySearchPrompts } from '@/lib/utils/search';
import { HelpCircle, Sparkles, Terminal, Layers, Globe, FileText, Compass, MessageSquare, ArrowRight } from 'lucide-react';

const LinkedinIcon = ({ className = "h-12 w-12 text-white" }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

interface ProgrammaticPageProps {
  params: Promise<{
    topic: string;
  }>;
}

interface TopicConfig {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  seoDescription: string;
  icon: React.ReactNode;
  gradient: string;
  intro: string;
  searchQuery: string;
  tagsFilter: string[];
  faqs: Array<{ question: string; answer: string }>;
}

const topicsConfig: Record<string, TopicConfig> = {
  'python-developers': {
    slug: 'python-developers',
    title: 'ChatGPT Prompts for Python Developers',
    metaTitle: 'Best ChatGPT Prompts for Python Developers (2026)',
    description: 'Optimize code, automate scripting, draft clean API endpoints, and debug Python errors using ChatGPT.',
    seoDescription: 'Unlock top ChatGPT prompts for Python developers. Learn how to write clean code, refactor scripts, write unit tests, and resolve bugs with AI.',
    icon: <Terminal className="h-12 w-12 text-white" />,
    gradient: 'from-blue-600 to-indigo-700',
    intro: 'Python is powerful, but writing boilerplate, debugging type errors, or optimizing script speeds takes time. These curated ChatGPT prompts act as your senior Python co-pilot, assisting in drafting clean Flask/FastAPI routes, writing pytest mocks, and refactoring scripts for performance.',
    searchQuery: 'python',
    tagsFilter: ['python', 'developer', 'django', 'fastapi', 'flask', 'scripting'],
    faqs: [
      {
        question: 'Can ChatGPT write production-ready Python code?',
        answer: 'Yes, ChatGPT is highly proficient in Python. However, you should review type hints, handle edge cases, and run unit tests before merging AI-generated scripts into a production environment.'
      },
      {
        question: 'How do I use these Python developer prompts?',
        answer: 'Copy the prompt template of choice, fill in details like your specific task or package dependencies, and paste it into ChatGPT, Claude, or Gemini to receive optimized, clean scripts.'
      }
    ]
  },
  'react-developers': {
    slug: 'react-developers',
    title: 'ChatGPT Prompts for React Developers',
    metaTitle: 'Best ChatGPT Prompts for React & Next.js Developers (2026)',
    description: 'Build sleek interfaces, optimize React hooks, resolve hydration errors, and draft Next.js routes.',
    seoDescription: 'Discover expert ChatGPT prompts for React and Next.js developers. Build premium components, handle state lifecycle, and optimize UI performance.',
    icon: <Layers className="h-12 w-12 text-white" />,
    gradient: 'from-sky-500 to-indigo-650',
    intro: 'React interfaces require clean state architecture and responsive styles. Use these templates to draft TypeScript components, structure Tailwind styles, refactor custom React hooks, and manage Next.js dynamic routing structures with high precision.',
    searchQuery: 'react',
    tagsFilter: ['react', 'nextjs', 'javascript', 'typescript', 'frontend', 'ui'],
    faqs: [
      {
        question: 'How do I prompt ChatGPT for better React components?',
        answer: 'Define specific styling guidelines (e.g. use Tailwind CSS), state state management constraints (e.g. keep state local or use Context), and request TypeScript typings to get precise and compile-ready components.'
      },
      {
        question: 'Can ChatGPT debug React hydration mismatch errors?',
        answer: 'Absolutely. By prompting the model with the exact code snippet showing server-side vs. client-side renders, it can point out invalid tag nesting or dynamic date formatting issues.'
      }
    ]
  },
  'seo': {
    slug: 'seo',
    title: 'ChatGPT Prompts for SEO & Marketing',
    metaTitle: 'Best ChatGPT Prompts for SEO & Traffic Generation (2026)',
    description: 'Perform keyword research, outline semantic blogs, write meta tags, and optimize content structure.',
    seoDescription: 'Boost search rankings using ChatGPT prompts for SEO. Automate keyword clustering, draft meta descriptions, and outline high-ranking blog articles.',
    icon: <Globe className="h-12 w-12 text-white" />,
    gradient: 'from-emerald-500 to-teal-700',
    intro: 'Search engine optimization requires consistent keyword research, semantic content outlines, and technical site metadata. These prompts guide ChatGPT to draft high-impact editorial templates, cluster keywords, and generate meta descriptions designed to capture search rankings.',
    searchQuery: 'seo',
    tagsFilter: ['seo', 'marketing', 'content writing', 'copywriting', 'keywords', 'blogging'],
    faqs: [
      {
        question: 'Can ChatGPT generate SEO-friendly articles?',
        answer: 'Yes, if you prompt it with target keywords, word count boundaries, headings structure (H2, H3), and request a natural tone that reads like an industry expert rather than an AI generator.'
      },
      {
        question: 'How do I automate keyword clustering with AI?',
        answer: 'Copy our dedicated SEO keyword clustering prompt, paste your raw search query list, and let the AI organize them into logical topic clusters with primary and secondary target mappings.'
      }
    ]
  },
  'linkedin': {
    slug: 'linkedin',
    title: 'ChatGPT Prompts for LinkedIn & Branding',
    metaTitle: 'Best ChatGPT Prompts for LinkedIn Posts & Personal Branding',
    description: 'Write viral posts, format hooks, draft networking outreach, and optimize profile summaries.',
    seoDescription: 'Master personal branding using ChatGPT prompts for LinkedIn. Write engaging hooks, format readable updates, and grow your network with AI.',
    icon: <LinkedinIcon className="h-12 w-12 text-white" />,
    gradient: 'from-blue-600 to-indigo-850',
    intro: 'Standing out on LinkedIn requires strong hooks, readable line-break formatting, and actionable professional takeaways. These prompts help you translate raw project accomplishments into engaging updates, draft profile summaries, and write networking intros.',
    searchQuery: 'linkedin',
    tagsFilter: ['linkedin', 'networking', 'personal branding', 'social media', 'career'],
    faqs: [
      {
        question: 'How do I avoid sounding generic on LinkedIn when using AI?',
        answer: 'Provide ChatGPT with your personal story, active tone parameters (e.g. informal, direct, no jargon), and explicitly prompt it to avoid generic adjectives like "excited", "humbled", or "thrilled".'
      },
      {
        question: 'What is a good LinkedIn hook structure for AI prompting?',
        answer: 'Prompt the AI to start with a contrarian opinion, a surprising data metric, or a direct conflict/resolution statement, then follow up with short, double-spaced paragraphs.'
      }
    ]
  },
  'resumes': {
    slug: 'resumes',
    title: 'ChatGPT Prompts for Resume Writing',
    metaTitle: 'Best ChatGPT Prompts for Resumes & CV Optimization (2026)',
    description: 'Optimize bullet points, match resume achievements to job descriptions, and write summary statements.',
    seoDescription: 'Land more interviews with AI-optimized resumes. Find top ChatGPT prompts for highlighting professional achievements and passing ATS filters.',
    icon: <FileText className="h-12 w-12 text-white" />,
    gradient: 'from-rose-500 to-orange-600',
    intro: 'Resumes must focus on quantified achievements and align with target job descriptions to pass ATS scans. These prompts help you rewrite flat job history entries into metrics-driven bullets and draft targeted professional summaries.',
    searchQuery: 'resume',
    tagsFilter: ['resume', 'cover letter', 'career', 'job application', 'interview'],
    faqs: [
      {
        question: 'How do I tailer my resume to a specific job description using AI?',
        answer: 'Provide the AI with both your current resume and the target job description. Prompt it to identify keyword gaps and rewrite your experience bullets to directly highlight matching skills.'
      },
      {
        question: 'Can ChatGPT write a full resume from scratch?',
        answer: 'While it can draft a template, a strong resume requires your personal details. It is best to use AI to optimize, structure, and refine your existing achievements and draft tailored cover letters.'
      }
    ]
  },
  'interviews': {
    slug: 'interviews',
    title: 'ChatGPT Prompts for Interview Prep',
    metaTitle: 'Best ChatGPT Prompts for Interview Prep & Mock Questions',
    description: 'Practice behavioral interview questions, format STAR responses, and prepare questions for interviewers.',
    seoDescription: 'Prepare for job interviews with ChatGPT. Practice behavioral STAR questions, simulate mock interviews, and structure elevator pitches.',
    icon: <Compass className="h-12 w-12 text-white" />,
    gradient: 'from-violet-600 to-purple-800',
    intro: 'Confidence in interviews comes from structured preparation. Use these mock-interview and simulator prompts to practice answering behavioral questions, draft STAR framework responses, and formulate insightful questions to ask the interviewer.',
    searchQuery: 'interview',
    tagsFilter: ['interview', 'interview prep', 'career', 'star method', 'recruitment'],
    faqs: [
      {
        question: 'How do I practice mock interviews using ChatGPT?',
        answer: 'Tell ChatGPT the role you are interviewing for and ask it to act as the interviewer, asking one question at a time and waiting for your response before giving constructive feedback.'
      },
      {
        question: 'What is the STAR method for interview answers?',
        answer: 'STAR stands for Situation, Task, Action, and Result. You can prompt ChatGPT to restructure your raw story into this format to ensure your answers are concise and impact-focused.'
      }
    ]
  }
};

export async function generateStaticParams() {
  return Object.keys(topicsConfig).map((topic) => ({
    topic,
  }));
}

export async function generateMetadata({ params }: ProgrammaticPageProps): Promise<Metadata> {
  const { topic } = await params;
  const config = topicsConfig[topic];
  if (!config) return {};

  return {
    title: config.metaTitle,
    description: config.seoDescription,
    alternates: {
      canonical: `/prompts-for-${config.slug}`,
    },
    openGraph: {
      title: config.metaTitle,
      description: config.seoDescription,
      url: `https://promptmaze.vercel.app/prompts-for-${config.slug}`,
      type: 'website',
    },
  };
}

export default async function ProgrammaticTopicPage({ params }: ProgrammaticPageProps) {
  const { topic } = await params;
  const config = topicsConfig[topic];
  if (!config) {
    notFound();
  }

  // Find relevant prompts using our fuzzy search engine based on topic tags and query
  const matchingPrompts = fuzzySearchPrompts(prompts, config.searchQuery)
    .filter(p => {
      // Prioritize tags overlap or title matches
      return p.tags.some(t => config.tagsFilter.includes(t.toLowerCase())) || 
             p.title.toLowerCase().includes(config.searchQuery);
    })
    .slice(0, 15); // Show top 15 most relevant prompts

  const breadcrumbs = [
    { label: 'Topics', href: '/search' },
    { label: config.title }
  ];

  // FAQ Schema JSON-LD
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': config.faqs.map(f => ({
      '@type': 'Question',
      'name': f.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': f.answer
      }
    }))
  };

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* FAQ Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Breadcrumbs items={breadcrumbs} />

      {/* Hero Banner Section */}
      <div className={`mt-4 overflow-hidden rounded-3xl bg-gradient-to-br ${config.gradient} p-8 text-white shadow-xl sm:p-12 relative`}>
        <div className="absolute -right-10 -bottom-10 h-64 w-64 rounded-full bg-white/10 blur-3xl pointer-events-none" />
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold backdrop-blur-sm">
              <Sparkles className="h-3 w-3 fill-white" />
              Programmatic SEO Topic Library
            </div>
            <h1 className="mt-4 text-3xl font-black sm:text-5xl tracking-tight leading-tight">
              {config.title}
            </h1>
            <p className="mt-4 text-sm sm:text-base text-white/90 leading-relaxed font-semibold">
              {config.description}
            </p>
          </div>
          <div className="hidden md:flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 text-white shadow-inner">
            {config.icon}
          </div>
        </div>
      </div>

      <AdSenseSlot slot={`topic-${config.slug}-top`} />

      {/* Main Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        
        {/* Prompts list column (col-span-2) */}
        <div className="lg:col-span-2 flex flex-col gap-8">
          
          {/* Detailed Intro Section */}
          <section className="bg-white rounded-3xl border border-zinc-200 p-6 sm:p-8 dark:border-zinc-800 dark:bg-zinc-900/40 backdrop-blur-md">
            <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-50 mb-3">
              How to write better prompts for {config.slug.replace('-', ' ')}
            </h2>
            <p className="text-sm leading-relaxed text-zinc-650 dark:text-zinc-400">
              {config.intro}
            </p>
          </section>

          {/* Grid of Prompts */}
          <section>
            <h2 className="text-xl font-black tracking-tight text-zinc-900 dark:text-zinc-50 mb-6">
              Tested AI Prompts & Workflow Templates
            </h2>
            {matchingPrompts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {matchingPrompts.map((prompt) => (
                  prompt.professionSlug === 'emails' ? (
                    <EmailPromptCard key={prompt.id} prompt={prompt} />
                  ) : (
                    <PromptCard key={prompt.id} prompt={prompt} />
                  )
                ))}
              </div>
            ) : (
              <p className="text-sm text-zinc-400 italic">No prompts found matching this category.</p>
            )}
          </section>
        </div>

        {/* Sidebar widgets column */}
        <div className="flex flex-col gap-6">
          
          {/* Quick Explainer Card */}
          <div className="rounded-3xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/40">
            <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-50 border-b border-zinc-100 pb-3 dark:border-zinc-800/80">
              Keyword Optimization
            </h3>
            <p className="mt-3 text-xs text-zinc-500 dark:text-zinc-450 leading-relaxed font-semibold">
              These workflow prompt packages target high-volume search parameters for maximum workflow automation. Standard copy-paste inputs ensure immediate compatibility across LLM frameworks.
            </p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {config.tagsFilter.map((tag) => (
                <span
                  key={tag}
                  className="rounded-lg bg-zinc-100 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Related Programmatic Topics */}
          <div className="rounded-3xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/40">
            <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-50 border-b border-zinc-100 pb-3 dark:border-zinc-800/80">
              Other AI Workflows
            </h3>
            <div className="mt-3 flex flex-col gap-2.5">
              {Object.values(topicsConfig)
                .filter((t) => t.slug !== config.slug)
                .map((t) => (
                  <Link
                    key={t.slug}
                    href={`/prompts-for-${t.slug}`}
                    className="flex items-center justify-between text-xs font-semibold text-zinc-600 hover:text-indigo-655 dark:text-zinc-400 dark:hover:text-indigo-400 transition-colors hover:underline"
                  >
                    <span>{t.title.replace('ChatGPT Prompts for ', '')}</span>
                    <ArrowRight className="h-3.5 w-3.5 text-zinc-400" />
                  </Link>
                ))}
            </div>
          </div>

        </div>

      </div>

      {/* FAQs Section */}
      <section className="mt-16 rounded-3xl border border-zinc-200 bg-zinc-50/50 p-6 sm:p-8 dark:border-zinc-800 dark:bg-zinc-900/20 backdrop-blur-md">
        <h2 className="text-2xl font-black tracking-tight text-zinc-900 dark:text-zinc-50 flex items-center gap-2">
          <HelpCircle className="h-6 w-6 text-indigo-500" />
          Frequently Asked Questions
        </h2>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {config.faqs.map((faq, idx) => (
            <div key={idx} className="rounded-2xl border border-zinc-150 bg-white p-6 dark:border-zinc-800/80 dark:bg-zinc-900/60">
              <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-50">
                {faq.question}
              </h3>
              <p className="mt-2 text-sm text-zinc-650 dark:text-zinc-400 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      <AdSenseSlot slot={`topic-${config.slug}-bottom`} />
    </div>
  );
}
