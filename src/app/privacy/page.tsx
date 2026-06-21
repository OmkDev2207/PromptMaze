import React from 'react';
import Breadcrumbs from '@/components/layout/Breadcrumbs';

export const metadata = {
  title: 'Privacy Policy | PromptMaze',
  description: 'Learn how PromptMaze handles and protects user privacy and database metrics.',
};

export default function PrivacyPage() {
  const breadcrumbs = [{ label: 'Privacy Policy' }];

  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
      <Breadcrumbs items={breadcrumbs} />
      <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50">
        Privacy Policy
      </h1>
      <p className="mt-2 text-sm text-zinc-500">Last updated: June 20, 2026</p>
      
      <div className="prose prose-zinc dark:prose-invert mt-8 space-y-6 text-sm text-zinc-600 dark:text-zinc-400">
        <p>
          At PromptMaze, accessible from promptmaze.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by PromptMaze and how we use it.
        </p>
        
        <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-50 mt-6">Log Files</h2>
        <p>
          PromptMaze follows a standard procedure of using log files. These files log visitors when they visit websites. The information collected by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks.
        </p>

        <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-50 mt-6">Cookies and Web Beacons</h2>
        <p>
          Like any other website, PromptMaze uses &apos;cookies&apos;. These cookies are used to store information including visitors&apos; preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users&apos; experience by customizing our web page content based on visitors&apos; browser type and/or other information.
        </p>

        <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-50 mt-6">Google DoubleClick DART Cookie</h2>
        <p>
          Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to promptmaze.com and other sites on the internet.
        </p>

        <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-50 mt-6">Consent</h2>
        <p>
          By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions.
        </p>
      </div>
    </div>
  );
}
