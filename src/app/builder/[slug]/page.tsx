import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Sparkles, ArrowRight, BookOpen, Compass, ChevronRight, Cpu } from 'lucide-react';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import AdSenseSlot from '@/components/ui/AdSenseSlot';
import BuilderWorkspace from '@/components/builder/BuilderWorkspace';
import { builderProfessions, BuilderProfession, BuilderTask } from '@/lib/data/builderTasks';
import { getGuidesByProfession } from '@/lib/data/guides';
import { getPromptsByProfession } from '@/lib/data/prompts';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://promptmaze.vercel.app';

interface BuilderSlugProps {
  params: Promise<{
    slug: string;
  }>;
}

// Utility to find profession and task matching a slug
function findProfAndTask(slug: string) {
  let foundProf: BuilderProfession | undefined;
  let foundTask: BuilderTask | undefined;

  for (const prof of builderProfessions) {
    if (slug.startsWith(`${prof.slug}-`)) {
      const taskSlug = slug.slice(prof.slug.length + 1);
      const task = prof.tasks.find((t) => t.slug === taskSlug);
      if (task) {
        foundProf = prof;
        foundTask = task;
        break;
      }
    }
  }
  return { foundProf, foundTask };
}

// Generate static params for all 160 pages
export async function generateStaticParams() {
  const params: { slug: string }[] = [];
  builderProfessions.forEach((prof) => {
    prof.tasks.forEach((task) => {
      params.push({
        slug: `${prof.slug}-${task.slug}`,
      });
    });
  });
  return params;
}

// Dynamic SEO metadata generation
export async function generateMetadata({ params }: BuilderSlugProps): Promise<Metadata> {
  const { slug } = await params;
  const { foundProf, foundTask } = findProfAndTask(slug);

  if (!foundProf || !foundTask) {
    return {};
  }

  const title = `Best AI Prompt for ${foundTask.name} (${foundProf.name}s) | Prompt Architect`;
  const description = `Get the optimized, expert-engineered AI prompt builder template for ${foundTask.name.toLowerCase()} (${foundProf.name.toLowerCase()}s). Customize inputs, inject Chain of Thought, and boost your ChatGPT/Claude outputs.`;

  return {
    title,
    description,
    alternates: {
      canonical: `${siteUrl}/builder/${slug}`,
    },
    openGraph: {
      title,
      description,
      url: `${siteUrl}/builder/${slug}`,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

export default async function BuilderSlugPage({ params }: BuilderSlugProps) {
  const { slug } = await params;
  const { foundProf, foundTask } = findProfAndTask(slug);

  if (!foundProf || !foundTask) {
    notFound();
  }

  // Related contents for Internal SEO Linking Grid
  const otherTasks = foundProf.tasks.filter((t) => t.id !== foundTask.id).slice(0, 5);
  const otherProfs = builderProfessions.filter((p) => p.id !== foundProf.id).slice(0, 3);
  const relatedGuides = getGuidesByProfession(foundProf.slug).slice(0, 3);
  const relatedPrompts = getPromptsByProfession(foundProf.slug).slice(0, 4);

  const breadcrumbs = [
    { label: 'Prompt Architect', href: '/builder' },
    { label: `${foundProf.name}s`, href: `/builder?profession=${foundProf.slug}` },
    { label: foundTask.name },
  ];

  // FAQ Schema (JSON-LD)
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': `What is the best ChatGPT prompt for ${foundTask.name.toLowerCase()}?`,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': `The best ChatGPT prompt for ${foundTask.name.toLowerCase()} uses a structured role-based template defining the persona as a senior ${foundProf.name} expert. It configures parameters like ${foundTask.inputs.map(i => i.label).join(', ')} to provide high context density. Customize this prompt in real time using the Prompt Architect Builder.`
        }
      },
      {
        '@type': 'Question',
        'name': `How can I customize this ${foundProf.name.toLowerCase()} prompt builder?`,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': `Simply enter values for variables like ${foundTask.inputs.map(i => i.label).join(', ')}. You can select a target tone (such as Technical, Academic, or Professional) and structure format (Markdown, JSON, Table) to match your exact business requirements.`
        }
      }
    ]
  };

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Breadcrumbs */}
      <Breadcrumbs items={breadcrumbs} />

      {/* Header */}
      <div className="mt-4 border-b border-zinc-200 pb-8 dark:border-zinc-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-3xl">
            AI Prompt for {foundTask.name} <span className="text-zinc-400 dark:text-zinc-650 font-normal">({foundProf.name})</span>
          </h1>
          <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
            {foundTask.description} Fill out the variables below to compile the fully optimized prompt.
          </p>
        </div>
        
        <Link
          href="/builder"
          className="inline-flex items-center gap-1.5 rounded-xl border border-zinc-200 bg-white px-4 py-2 text-xs font-bold text-zinc-700 hover:bg-zinc-50 transition-all dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-850"
        >
          View All Builders
        </Link>
      </div>

      {/* AdSense Top slot */}
      <AdSenseSlot slot="builder-slug-top" />

      {/* Interactive Builder Workspace pre-populated */}
      <BuilderWorkspace initialProfessionSlug={foundProf.slug} initialTaskSlug={foundTask.slug} />

      {/* AdSense Middle slot */}
      <AdSenseSlot slot="builder-slug-middle" />

      {/* INTERNAL LINK JUICE GRID SECTION (SEO Boost) */}
      <section className="mt-16 pt-10 border-t border-zinc-250 dark:border-zinc-850">
        <h2 className="text-xl font-extrabold text-zinc-900 dark:text-zinc-50 mb-8">
          Related Prompt Engineering Resources for {foundProf.name}s
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Related Tasks Column */}
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/50">
            <h3 className="text-xs font-black uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-4 flex items-center gap-1.5">
              <Cpu className="h-4 w-4 text-violet-500" />
              Other {foundProf.name} Builders
            </h3>
            
            <div className="flex flex-col gap-2">
              {otherTasks.map((task) => (
                <Link
                  key={task.id}
                  href={`/builder/${foundProf.slug}-${task.slug}`}
                  className="group flex items-center justify-between rounded-xl bg-zinc-50/50 hover:bg-zinc-100/50 p-3 text-xs font-bold text-zinc-700 hover:text-zinc-900 dark:bg-zinc-950/20 dark:hover:bg-zinc-850 transition-colors border border-zinc-100 dark:border-zinc-850"
                >
                  <span className="truncate pr-2">{task.name} Prompt Builder</span>
                  <ChevronRight className="h-3.5 w-3.5 text-zinc-400 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              ))}
            </div>
          </div>

          {/* Related Guides & Categories Column */}
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/50">
            <h3 className="text-xs font-black uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-4 flex items-center gap-1.5">
              <BookOpen className="h-4 w-4 text-violet-500" />
              Related Guides & Prompts
            </h3>

            <div className="flex flex-col gap-3">
              {/* Guides */}
              {relatedGuides.map((guide) => (
                <Link
                  key={guide.id}
                  href={`/guides/${guide.slug}`}
                  className="block group"
                >
                  <span className="block text-xs font-bold text-zinc-800 dark:text-zinc-200 group-hover:text-violet-600 transition-colors line-clamp-1">
                    {guide.title}
                  </span>
                  <span className="block text-[10px] text-zinc-400 mt-0.5 font-semibold">
                    AI Learning Guide
                  </span>
                </Link>
              ))}

              {/* Prompts */}
              {relatedPrompts.map((p) => (
                <Link
                  key={p.id}
                  href={`/prompt/${p.slug}`}
                  className="block group"
                >
                  <span className="block text-xs font-bold text-zinc-800 dark:text-zinc-200 group-hover:text-violet-600 transition-colors line-clamp-1">
                    {p.title}
                  </span>
                  <span className="block text-[10px] text-zinc-400 mt-0.5 font-semibold">
                    Battle-Tested Prompt
                  </span>
                </Link>
              ))}

              {relatedGuides.length === 0 && relatedPrompts.length === 0 && (
                <span className="text-xs text-zinc-450 italic">No guides or prompts mapped to this profession.</span>
              )}
            </div>
          </div>

          {/* Related Profession Hubs Column */}
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/50">
            <h3 className="text-xs font-black uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-4 flex items-center gap-1.5">
              <Compass className="h-4 w-4 text-violet-500" />
              Other Profession Hubs
            </h3>

            <div className="flex flex-col gap-2">
              {otherProfs.map((prof) => (
                <Link
                  key={prof.id}
                  href={`/builder?profession=${prof.slug}`}
                  className="group flex items-center justify-between rounded-xl bg-zinc-50/50 hover:bg-zinc-100/50 p-3 text-xs font-bold text-zinc-700 hover:text-zinc-900 dark:bg-zinc-950/20 dark:hover:bg-zinc-850 transition-colors border border-zinc-100 dark:border-zinc-850"
                >
                  <span className="flex items-center gap-2">
                    <span>{prof.icon}</span>
                    <span>{prof.name} Builder</span>
                  </span>
                  <ChevronRight className="h-3.5 w-3.5 text-zinc-400 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* AdSense Bottom slot */}
      <AdSenseSlot slot="builder-slug-bottom" />
    </div>
  );
}
