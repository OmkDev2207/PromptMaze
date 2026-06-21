import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileBottomNav from "@/components/layout/MobileBottomNav";
import CopyToast from "@/components/ui/CopyToast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PromptMaze | Best ChatGPT & AI Prompts for Professionals",
  description: "Curated ChatGPT and AI prompts for teachers, developers, marketers, recruiters, students, and accountants. Standardized templates, sitemaps, and engineering guides.",
  metadataBase: new URL("https://promptmaze.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "PromptMaze | Best ChatGPT & AI Prompts for Professionals",
    description: "Curated ChatGPT and AI prompts for teachers, developers, marketers, recruiters, students, and accountants.",
    url: "https://promptmaze.com",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
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
      <body className="min-h-full flex flex-col bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50 pb-16 md:pb-0">
        <Header />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
        <MobileBottomNav />
        <CopyToast />
      </body>
    </html>
  );
}
