# PromptMaze 🚀

A production-ready, SEO-first programmatic web application built to help professionals learn how to write and use AI prompts effectively. Built with Next.js 16 (App Router), TypeScript, and Tailwind CSS.

---

## 🌟 Core Features

- **6 Dedicated Profession Hubs**: Custom categories, structured guidelines, and featured prompts for **Teachers**, **Developers**, **Marketers**, **Recruiters**, **Students**, and **Accountants**.
- **300+ Curated AI Prompts**: Programmatically generated, fully structured templates categorized by specific tasks (e.g. lesson planning, debugging, SEO writing, Excel automation, resume screening, study guides).
- **50+ AI Guides & Tutorials**: Deep dives into prompt engineering methods like Role Prompting, Chain of Thought (CoT), few-shot prompting, and automated workflows.
- **Interactive Prompt Generator**: Compile customizable, standard prompts entirely client-side based on profession, task, and goals. No external API keys required!
- **Global Search System**: Fast client-side query filters for keywords, tags, profession categories, and difficulty.
- **Extreme SEO Optimization**: Automated canonical tags, dynamic XML sitemaps, robots rules, metadata blocks, and structured JSON-LD (HowTo, Article) markup.
- **Monetization Architecture**: Built-in placeholders for Google AdSense slots, affiliate links, and premium badges.

---

## 🛠️ Tech Stack

- **Framework**: Next.js 16 App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 + Tailwind Typography (`prose`)
- **Icons**: Lucide React
- **Hosting / Deploy**: Vercel

---

## 📂 Project Structure

```
promptmaze/
├── src/
│   ├── app/                     # Next.js App Router Pages
│   │   ├── [profession]/        # Profession Hub & Category Pages
│   │   │   ├── [category]/      # Dynamic Category Prompts list
│   │   │   └── page.tsx         # Profession Hub layout
│   │   ├── prompt/[slug]/       # Individual Prompt Detail page
│   │   ├── guides/              # Guides List page
│   │   │   └── [slug]/          # Guide Detail Page
│   │   ├── generator/           # Prompt Generator Tool page
│   │   ├── search/              # Global Search results page
│   │   ├── layout.tsx           # Global Root layout (Header & Footer)
│   │   ├── page.tsx             # SaaS-style Homepage
│   │   ├── sitemap.ts           # Dynamic XML sitemap
│   │   └── robots.ts            # Robots.txt configuration
│   ├── components/
│   │   ├── layout/              # Header, Footer, Breadcrumbs
│   │   ├── prompt/              # PromptCard UI
│   │   └── ui/                  # AdSenseSlot, PremiumBadge, Newsletter
│   ├── lib/
│   │   ├── data/                # Static Datasets (professions, prompts, guides)
│   │   └── utils/               # Markdown and String Parsers
│   └── types/                   # Shared Type Definitions
├── public/                      # Static assets
├── package.json
└── README.md
```

---

## ⚙️ Environment Variables

Create a `.env.local` file in the root directory:

```env
# Production URL (used for sitemaps and metadata)
NEXT_PUBLIC_SITE_URL=https://promptmaze.com

# AdSense configurations
NEXT_PUBLIC_ENABLE_ADSENSE=false
NEXT_PUBLIC_ADSENSE_ID=pub-XXXXXXXXXXXXXXXX
```

---

## 🚀 Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### 3. Build & Production Check

```bash
npm run build
```

This compiles the static routes, dynamically fetches all slugs from the programmatic data layer, and outputs fully static sitemap and robot parameters with zero build warnings.

---

## 🎯 Programmatic SEO Strategy

1. **Structured URL Taxonomy**:
   - Hubs: `/[profession]` (e.g. `/teachers`)
   - Category pages: `/[profession]/[category]` (e.g. `/teachers/lesson-plan-prompts`)
   - Prompts: `/prompt/[slug]` (e.g. `/prompt/lesson-planning-world-history-prompts`)
   - Guides: `/guides/[slug]` (e.g. `/guides/what-is-prompt-engineering`)
2. **Metadata Generation**: Dynamic `generateMetadata()` exports custom titles, descriptions, canonical URLs, and OpenGraph tags.
3. **Google Crawling**: Dynamic sitemaps crawl all dynamic URLs instantly upon updates.

---

## 💰 Monetization Ready

- **AdSenseSlot**: Insert `AdSenseSlot` component anywhere on a page. Toggle `NEXT_PUBLIC_ENABLE_ADSENSE=true` in Vercel to activate.
- **PremiumBadge**: Restrict specific high-value templates visually to prime the user database for monetization upgrades.
- **Newsletter**: Captures professional emails for future product/leads campaigns.

---

## 🚢 Vercel Deployment

1. Push your code to a GitHub repository.
2. Go to the [Vercel Dashboard](https://vercel.com/new).
3. Import the project.
4. Add environment variables if needed.
5. Click **Deploy**. Vercel will automatically build and serve the application globally.
