import React from 'react';
import Breadcrumbs from '@/components/layout/Breadcrumbs';

export const metadata = {
  title: 'About Us | PromptMaze',
  description: 'Learn about PromptMaze, our mission to democratize prompt engineering, and our testing workflow.',
};

export default function AboutPage() {
  const breadcrumbs = [{ label: 'About Us' }];

  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
      <Breadcrumbs items={breadcrumbs} />
      
      <h1 className="mt-4 text-3xl font-black tracking-tight text-zinc-900 dark:text-zinc-50">
        About PromptMaze
      </h1>
      
      <div className="prose prose-zinc dark:prose-invert mt-8 space-y-6 text-sm text-zinc-650 dark:text-zinc-400 leading-relaxed font-semibold">
        <p>
          Welcome to <strong>PromptMaze</strong>! We are dedicated to providing professionals, developers, educators, and students with high-quality, structured, and copy-pasteable AI prompt templates.
        </p>

        <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-50 mt-6">Our Mission</h2>
        <p>
          Prompt engineering shouldn&apos;t be a mystery of hidden keywords. Our mission is to democratize prompt structures so anyone can get elite outputs from advanced reasoning models (like ChatGPT, Claude, and Gemini) with zero learning curve.
        </p>

        <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-50 mt-6">Quality & Testing</h2>
        <p>
          Every prompt template in our index is structurally analyzed and manually reviewed. We write custom instructions to ensure outputs are consistently formatted (utilizing Markdown list groups, table models, and structured code blocks) and safe.
        </p>

        <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-50 mt-6">AdSense & Support</h2>
        <p>
          PromptMaze is supported by Google AdSense advertisements. This allows us to keep all our learning guides, interactive generator templates, and profession hubs 100% free to access without paid registration.
        </p>
        <p>
          If you have questions, feedback, or would like to submit a prompt pattern, feel free to contact us at:
          <br />
          <code className="font-mono text-xs bg-zinc-100 dark:bg-zinc-900 px-1.5 py-0.5 rounded text-indigo-650 dark:text-indigo-400 mt-2 inline-block">
            support@promptmaze.com
          </code>
        </p>
      </div>
    </div>
  );
}
