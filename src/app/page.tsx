import React from 'react';
import Link from 'next/link';
import { ArrowRight, BookMarked, Compass, Cpu, TrendingUp, Sparkles, FolderHeart } from 'lucide-react';
import { professions } from '@/lib/data/professions';
import { getFeaturedPrompts, prompts } from '@/lib/data/prompts';
import { getFeaturedGuides } from '@/lib/data/guides';
import PromptCard from '@/components/prompt/PromptCard';
import ProfessionCard from '@/components/prompt/ProfessionCard';
import HeroSection from '@/components/ui/HeroSection';
import AdSenseSlot from '@/components/ui/AdSenseSlot';

export default function Home() {
  const featuredPrompts = getFeaturedPrompts(6);
  const featuredGuides = getFeaturedGuides(3);

  // Filter featured professions for the top grid
  const featuredProfessions = professions
    .filter((p) => p.featured || ['photographers', 'ux-ui-designers', 'startup-founders', 'data-scientists'].includes(p.id))
    .slice(0, 9);
  
  // All other professions for a quick index cloud
  const remainingProfessions = professions.filter((p) => !featuredProfessions.find(f => f.id === p.id));

  const popularHubs = [
    { name: 'Teachers', href: '/teachers' },
    { name: 'Developers', href: '/developers' },
    { name: 'Recruiters', href: '/recruiters' },
    { name: 'Founders', href: '/startup-founders' }
  ];

  const popularCategories = [
    { name: 'Lesson Planning', href: '/teachers/lesson-plan-prompts', icon: '📝', color: 'text-blue-500 bg-blue-500/10', count: 12 },
    { name: 'Debugging', href: '/developers/debugging-prompts', icon: '🐛', color: 'text-emerald-500 bg-emerald-500/10', count: 15 },
    { name: 'Resume Screening', href: '/recruiters/resume-screening-prompts', icon: '📋', color: 'text-orange-500 bg-orange-500/10', count: 8 },
    { name: 'SEO Writing', href: '/marketers/seo-prompts', icon: '🔎', color: 'text-purple-500 bg-purple-500/10', count: 14 },
    { name: 'Excel Formulas', href: '/accountants/excel-prompts', icon: '🗂️', color: 'text-teal-500 bg-teal-500/10', count: 9 },
    { name: 'Study Schedules', href: '/students/study-prompts', icon: '📅', color: 'text-yellow-600 bg-yellow-500/10', count: 10 }
  ];

  const collections = [
    {
      title: "AI Developer Catalyst Pack",
      description: "Supercharge your coding, debugging, and DevOps pipeline automation using engineering prompts.",
      icon: "💻",
      gradient: "from-emerald-500/5 to-teal-500/5 border-emerald-500/20 dark:from-emerald-950/10 dark:to-teal-950/10 dark:border-emerald-800/20",
      roles: ["Developers", "DevOps", "Data Scientists"],
      link: "/search?q=code"
    },
    {
      title: "EduCreator Classroom Suite",
      description: "Save hours of prep time. Generate comprehensive lesson plans, quizzes, and parent letters instantly.",
      icon: "🎓",
      gradient: "from-blue-500/5 to-indigo-500/5 border-blue-500/20 dark:from-blue-950/10 dark:to-indigo-950/10 dark:border-indigo-800/20",
      roles: ["Teachers", "Professors", "School Admins"],
      link: "/search?q=lesson"
    },
    {
      title: "Growth Marketing Accelerator",
      description: "Write high-converting copy, design SEO maps, and craft viral social threads.",
      icon: "📢",
      gradient: "from-purple-500/5 to-pink-500/5 border-purple-500/20 dark:from-purple-950/10 dark:to-pink-950/10 dark:border-purple-800/20",
      roles: ["Marketers", "Copywriters", "Social Media"],
      link: "/search?q=copywriter"
    },
    {
      title: "Startup Founder Operations Kit",
      description: "Scale your venture. Draft investor reports, validate ideas, and design project roadmaps.",
      icon: "🚀",
      gradient: "from-orange-500/5 to-amber-500/5 border-orange-500/20 dark:from-orange-950/10 dark:to-amber-950/10 dark:border-orange-800/20",
      roles: ["Entrepreneurs", "Founders", "Project Managers"],
      link: "/search?q=business"
    }
  ];

  // Extract top 3 prompts for previews in the cards
  const getTopPromptsForProfession = (profSlug: string) => {
    return prompts
      .filter((pr) => pr.professionSlug === profSlug)
      .slice(0, 3)
      .map((pr) => ({
        title: pr.title,
        slug: pr.slug,
        content: pr.content
      }));
  };

  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    'name': 'PromptMaze',
    'url': 'https://promptmaze.com',
    'potentialAction': {
      '@type': 'SearchAction',
      'target': 'https://promptmaze.com/search?q={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  };

  return (
    <div className="flex flex-col gap-16 pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      
      {/* Dynamic Cursor Spotlight Hero Section */}
      <HeroSection popularHubs={popularHubs} />

      {/* AdSense Top slot */}
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <AdSenseSlot slot="home-top" />
      </div>

      {/* Featured Professions Section */}
      <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 animate-fade-in-up">
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-black tracking-tight text-zinc-900 dark:text-zinc-50">
            Professional AI Knowledge Centers
          </h2>
          <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400 font-semibold">
            Select your discipline to access tailored prompt templates, guidelines, and advanced engineering workflows.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProfessions.map((prof) => {
            const promptCount = prompts.filter(p => p.professionSlug === prof.slug).length || 8;
            const topPrompts = getTopPromptsForProfession(prof.slug);
            return (
              <ProfessionCard
                key={prof.id}
                profession={prof}
                promptCount={promptCount}
                topPrompts={topPrompts}
              />
            );
          })}
        </div>
      </section>

      {/* Curated Prompt Collections Section */}
      <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 animate-fade-in-up">
        <div className="text-center md:text-left border-b border-zinc-150 pb-3 dark:border-zinc-800">
          <h2 className="text-2xl font-black tracking-tight text-zinc-900 dark:text-zinc-50 flex items-center gap-2">
            <FolderHeart className="h-5 w-5 text-violet-500" />
            Curated Prompt Collections
          </h2>
          <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400 font-semibold">
            Pre-assembled templates packaged to accelerate specific workspace projects.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {collections.map((col) => (
            <Link
              key={col.title}
              href={col.link}
              className={`group relative flex flex-col justify-between p-6 rounded-3xl border bg-gradient-to-br ${col.gradient} shadow-sm hover:shadow-md hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl">{col.icon}</span>
                  <div className="flex gap-1.5">
                    {col.roles.map(r => (
                      <span key={r} className="rounded-full bg-zinc-100 dark:bg-zinc-800/80 px-2 py-0.5 text-[9px] font-bold text-zinc-500 dark:text-zinc-400">
                        {r}
                      </span>
                    ))}
                  </div>
                </div>
                <h3 className="mt-4 text-base font-extrabold text-zinc-900 dark:text-zinc-100 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                  {col.title}
                </h3>
                <p className="mt-1.5 text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed font-semibold">
                  {col.description}
                </p>
              </div>
              <div className="mt-6 flex items-center gap-1 text-xs font-bold text-violet-600 dark:text-violet-400">
                Browse Collection
                <ArrowRight className="h-3.5 w-3.5 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Index of All Other 25+ Professions */}
      <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 animate-fade-in-up">
        <div className="rounded-3xl border border-zinc-200/85 bg-white p-6 sm:p-8 dark:border-zinc-800/85 dark:bg-zinc-900/30 backdrop-blur-md">
          <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 flex items-center gap-1.5">
            <Compass className="h-4 w-4 text-violet-500" />
            More Professions Directory
          </h3>
          <p className="mt-1 text-xs text-zinc-500 font-semibold dark:text-zinc-400">
            We cover 31 safe disciplines. Click below to access specialized prompt packs:
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {remainingProfessions.map((prof) => (
              <Link
                key={prof.id}
                href={`/${prof.slug}`}
                className="rounded-xl border border-zinc-200 bg-white px-3 py-2 text-xs font-bold text-zinc-700 shadow-sm hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800/80 transition-colors"
              >
                {prof.icon} {prof.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* AdSense Mid block */}
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <AdSenseSlot slot="home-middle" />
      </div>

      {/* Popular Categories Grid */}
      <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 animate-fade-in-up">
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-black tracking-tight text-zinc-900 dark:text-zinc-50">
            Popular Prompt Categories
          </h2>
          <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400 font-semibold">
            Quickly browse the most searched sub-niches and templates.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {popularCategories.map((cat) => (
            <Link
              key={cat.name}
              href={cat.href}
              className="group flex flex-col items-center text-center justify-center rounded-2xl border border-zinc-200/80 bg-white p-5 shadow-sm hover:border-zinc-300 hover:shadow-md transition-all duration-300 dark:border-zinc-800/80 dark:bg-zinc-900/40 dark:hover:border-zinc-700 backdrop-blur-md"
            >
              <span className={`flex h-10 w-10 items-center justify-center rounded-xl ${cat.color} text-xl shadow-inner`}>
                {cat.icon}
              </span>
              <h3 className="mt-4 text-xs font-extrabold text-zinc-800 dark:text-zinc-200 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors line-clamp-1">
                {cat.name}
              </h3>
              <span className="mt-1 text-[9px] font-bold uppercase tracking-wider text-zinc-400">
                {cat.count} Prompts
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Trending Prompts / Latest Packs Section */}
      <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 animate-fade-in-up">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-zinc-150 pb-3 dark:border-zinc-800/80">
          <div>
            <h2 className="text-2xl font-black tracking-tight text-zinc-900 dark:text-zinc-50 flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-violet-500" />
              Trending Prompts
            </h2>
            <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400 font-semibold">
              Ready-to-use prompt macros optimized for high accuracy, consistency, and professional context.
            </p>
          </div>
          <Link
            href="/search"
            className="inline-flex items-center gap-1 text-xs font-bold text-violet-600 hover:text-violet-700 dark:text-violet-400 dark:hover:text-violet-300"
          >
            Browse all prompts
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredPrompts.map((prompt) => (
            <PromptCard key={prompt.id} prompt={prompt} />
          ))}
        </div>
      </section>

      {/* AI Learning Guides Section - Vercel Dark Card theme */}
      <section className="bg-zinc-950 text-white py-16 dark:bg-zinc-900/20 dark:border-y dark:border-zinc-800/80 animate-fade-in-up">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-zinc-850 pb-4">
            <div>
              <h2 className="text-2xl font-black tracking-tight text-white flex items-center gap-2">
                <BookMarked className="h-5 w-5 text-violet-400" />
                AI Learning Center
              </h2>
              <p className="mt-1 text-sm text-zinc-400 font-medium">
                Master the fundamental principles, advanced logic models, and team execution workflows.
              </p>
            </div>
            <Link
              href="/guides"
              className="inline-flex items-center gap-1 text-xs font-bold text-violet-400 hover:text-violet-300"
            >
              See all guides
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredGuides.map((guide) => (
              <article
                key={guide.id}
                className="group flex flex-col justify-between rounded-3xl border border-zinc-800 bg-zinc-900/30 p-6 shadow-sm hover:border-zinc-700 hover:bg-zinc-900/50 transition-all duration-200"
              >
                <div>
                  <div className="flex items-center justify-between text-[10px] font-bold text-violet-400 uppercase tracking-wider">
                    <span>{guide.readTimeMinutes} Min Read</span>
                    <span className="rounded-full bg-zinc-800 px-2.5 py-0.5 text-[9px] text-zinc-350">{guide.difficulty}</span>
                  </div>
                  <h3 className="mt-4 text-base font-bold text-white group-hover:text-violet-400 transition-colors">
                    <Link href={`/guides/${guide.slug}`}>
                      {guide.title}
                    </Link>
                  </h3>
                  <p className="mt-2 text-xs text-zinc-400 leading-relaxed line-clamp-2">
                    {guide.description}
                  </p>
                </div>
                <div className="mt-6 flex justify-end">
                  <Link
                    href={`/guides/${guide.slug}`}
                    className="text-xs font-bold text-violet-400 group-hover:underline flex items-center gap-1"
                  >
                    Read Guide
                    <ArrowRight className="h-3.5 w-3.5 transform group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
