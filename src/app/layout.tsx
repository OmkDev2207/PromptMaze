import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileBottomNav from "@/components/layout/MobileBottomNav";
import CopyToast from "@/components/ui/CopyToast";
import { Analytics } from "@vercel/analytics/next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://promptmaze.com";

export const metadata: Metadata = {
  title: "PromptMaze | Best ChatGPT & AI Prompts for Professionals",
  description: "Curated ChatGPT and AI prompts for teachers, developers, marketers, recruiters, students, and accountants. Standardized templates, sitemaps, and engineering guides.",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "PromptMaze | Best ChatGPT & AI Prompts for Professionals",
    description: "Curated ChatGPT and AI prompts for teachers, developers, marketers, recruiters, students, and accountants.",
    url: siteUrl,
    siteName: "PromptMaze",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'light') {
                  document.documentElement.classList.remove('dark');
                } else {
                  document.documentElement.classList.add('dark');
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50 pb-[calc(4rem+env(safe-area-inset-bottom))] md:pb-0">
        <Header />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
        <MobileBottomNav />
        <CopyToast />
        <Analytics />
      </body>
    </html>
  );
}
