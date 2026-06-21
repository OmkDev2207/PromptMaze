// src/app/emails/page.tsx
import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import AdSenseSlot from '@/components/ui/AdSenseSlot';
import EmailLibraryClient from './EmailLibraryClient';
import { Mail, GraduationCap, Code, Megaphone, Users, MessageSquare, ShieldCheck, HelpCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI Email Prompt Library | Best ChatGPT Prompts for Email Writing',
  description: 'Free copy-paste ChatGPT prompts for professional emails, sales outreach, follow-ups, customer support, job applications, and more.',
  alternates: {
    canonical: '/emails',
  },
  openGraph: {
    title: 'AI Email Prompt Library | Best ChatGPT Prompts for Email Writing',
    description: 'Free copy-paste ChatGPT prompts for professional emails, sales outreach, follow-ups, customer support, job applications, and more.',
    url: 'https://promptmaze.vercel.app/emails',
    type: 'website',
  },
};

export default function EmailLibraryPage() {
  const breadcrumbs = [{ label: 'Email Prompts' }];

  // FAQ Page Schema
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'What are the best ChatGPT prompts for email writing?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'The best ChatGPT prompts define a clear persona (e.g., Professional Business Communication Expert), explain the context of the email, state the task (e.g., draft a follow-up or cold pitch), and outline constraints like maintaining a polite tone, structure, next steps, and including a subject line.'
        }
      },
      {
        '@type': 'Question',
        'name': 'How do you write professional emails with AI?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'To write professional emails with AI, structure your prompt with a role, context, task, and constraints. Define details such as the sender\'s and recipient\'s names, background points, and call to action to generate a customized draft in real time.'
        }
      },
      {
        '@type': 'Question',
        'name': 'What is an email writing prompt?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'An email writing prompt is a structured set of instructions given to large language models (like ChatGPT or Claude) to guide them in generating a specific type of professional, cold, or transactional email.'
        }
      },
      {
        '@type': 'Question',
        'name': 'How does an AI email generator prompt work?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'An AI email generator prompt uses variables (like target recipient, meeting times, and budget constraints) to compile a prompt that outputs a structured email draft that is ready to copy and send.'
        }
      }
    ]
  };

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* FAQ Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Breadcrumbs items={breadcrumbs} />

      {/* Hero Section */}
      <div className="mt-4 overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-650 to-violet-750 p-8 text-white shadow-xl sm:p-12 relative">
        <div className="absolute -right-10 -bottom-10 h-64 w-64 rounded-full bg-white/10 blur-3xl pointer-events-none" />
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold backdrop-blur-sm">
              <Mail className="h-3 w-3" />
              Email Prompt Library
            </div>
            <h1 className="mt-4 text-3xl font-black sm:text-5xl tracking-tight leading-tight">
              AI Email Prompt Library
            </h1>
            <p className="mt-4 text-sm sm:text-base text-white/90 leading-relaxed font-semibold">
              Free copy-paste ChatGPT prompts for professional emails, sales outreach, follow-ups, customer support, job applications, and more.
            </p>
          </div>
          <div className="hidden md:flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 text-white shadow-inner">
            <Mail className="h-12 w-12 text-white" />
          </div>
        </div>
      </div>

      <AdSenseSlot slot="emails-top" />

      {/* Interactive Library Filter Grid */}
      <div className="mt-8">
        <EmailLibraryClient />
      </div>

      {/* Internal Links Sector (Profession Hubs) */}
      <section className="mt-16 border-t border-zinc-200 pt-12 dark:border-zinc-800">
        <h2 className="text-2xl font-black tracking-tight text-zinc-900 dark:text-zinc-50">
          Explore Custom Prompts by Profession
        </h2>
        <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
          Unlock more profession-specific workflows, learning templates, and AI prompts.
        </p>

        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: 'Students', slug: 'students', icon: <GraduationCap className="h-5 w-5 text-yellow-500" />, desc: 'Study guides & essay ideas' },
            { name: 'Recruiters', slug: 'recruiters', icon: <Users className="h-5 w-5 text-orange-500" />, desc: 'Screening templates & offers' },
            { name: 'Marketers', slug: 'marketers', icon: <Megaphone className="h-5 w-5 text-purple-500" />, desc: 'Conversion copy & growth tips' },
            { name: 'Developers', slug: 'developers', icon: <Code className="h-5 w-5 text-emerald-500" />, desc: 'Code reviews & script testing' }
          ].map((item) => (
            <Link
              key={item.slug}
              href={`/${item.slug}`}
              className="flex flex-col justify-between rounded-2xl border border-zinc-200 bg-white p-5 hover:border-zinc-300 hover:shadow-sm transition-all dark:border-zinc-800 dark:bg-zinc-900/40 dark:hover:border-zinc-700"
            >
              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-50 dark:bg-zinc-850">
                  {item.icon}
                </div>
                <h3 className="mt-4 text-base font-bold text-zinc-900 dark:text-zinc-50">
                  {item.name}
                </h3>
                <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                  {item.desc}
                </p>
              </div>
              <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-indigo-650 hover:underline dark:text-indigo-400">
                Go to hub →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mt-16 rounded-3xl border border-zinc-200 bg-zinc-50/50 p-6 sm:p-8 dark:border-zinc-800 dark:bg-zinc-900/20 backdrop-blur-md">
        <h2 className="text-2xl font-black tracking-tight text-zinc-900 dark:text-zinc-50 flex items-center gap-2">
          <HelpCircle className="h-6 w-6 text-indigo-500" />
          Frequently Asked Questions
        </h2>
        <p className="mt-1 text-sm text-zinc-550 dark:text-zinc-450 font-medium">
          Got questions about using AI for email correspondence? Find clear answers below.
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-zinc-150 bg-white p-6 dark:border-zinc-800/80 dark:bg-zinc-900/60">
            <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-50">
              Best ChatGPT prompts for email writing
            </h3>
            <p className="mt-2 text-sm text-zinc-650 dark:text-zinc-400 leading-relaxed">
              The best prompts define a specific role (e.g., Professional Business Communication Expert), explain the context of the email, state the task (e.g., draft a follow-up or cold pitch), and outline constraints like maintaining a polite tone, structure, next steps, and including a subject line.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-150 bg-white p-6 dark:border-zinc-800/80 dark:bg-zinc-900/60">
            <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-50">
              How to write professional emails with AI
            </h3>
            <p className="mt-2 text-sm text-zinc-650 dark:text-zinc-400 leading-relaxed">
              To write professional emails with AI, structure your prompt with a role, context, task, and constraints. Define details such as the sender's and recipient's names, background points, and call to action to generate a customized draft in real time.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-150 bg-white p-6 dark:border-zinc-800/80 dark:bg-zinc-900/60">
            <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-50">
              Email writing prompts
            </h3>
            <p className="mt-2 text-sm text-zinc-650 dark:text-zinc-400 leading-relaxed">
              An email writing prompt is a structured set of instructions given to large language models (like ChatGPT or Claude) to guide them in generating a specific type of professional, cold, or transactional email.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-150 bg-white p-6 dark:border-zinc-800/80 dark:bg-zinc-900/60">
            <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-50">
              AI email generator prompts
            </h3>
            <p className="mt-2 text-sm text-zinc-650 dark:text-zinc-400 leading-relaxed">
              An AI email generator prompt uses variables (like target recipient, meeting times, and budget constraints) to compile a prompt that outputs a structured email draft that is ready to copy and send.
            </p>
          </div>
        </div>
      </section>

      <AdSenseSlot slot="emails-bottom" />
    </div>
  );
}
