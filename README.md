# Muhammad Hassan Javed — Developer Portfolio Website

A production-ready, highly polished one-page developer portfolio website built with **Next.js 14+ (App Router, TypeScript)**, **Tailwind CSS**, **Framer Motion**, **Lenis Smooth Scroll**, and **Supabase**.

## 🚀 Tech Stack

- **Framework**: Next.js 14+ (App Router, TypeScript)
- **Styling**: Tailwind CSS with custom design tokens (`#0B1120` base, Electric Indigo `#6366F1` & Cyan `#22D3EE` accents)
- **Animations**: Framer Motion & Canvas Particle Network
- **Smooth Scroll**: `@lenis/react`
- **Database**: Supabase JS Client (`messages` table for contact submissions)
- **Icons**: `lucide-react` & `react-icons`

---

## 📹 How to Update Project Demo Video Links

Each project card has a **"Watch Demo"** button that opens an interactive lightbox modal embedding a YouTube unlisted video.

To update the demo video for any project:
1. Record your screen demo and upload it to YouTube as **Unlisted**.
2. Copy the video ID from the YouTube URL (e.g., for `https://www.youtube.com/watch?v=abc123XYZ`, the ID is `abc123XYZ`).
3. Open [`/src/data/projects.ts`](file:///c:/Users/Ahsan%20Javed/Desktop/HASSAN_PORTFOLIO/src/data/projects.ts) and locate the project object.
4. Replace the `videoId` property (currently `"dQw4w9WgXcQ"`) with your real YouTube video ID:

```typescript
{
  id: "mashhoor",
  title: "Mashhoor",
  ...
  videoId: "YOUR_ACTUAL_YOUTUBE_VIDEO_ID",
}
```

---

## 🗄️ Supabase Setup & Environment Variables

1. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```
2. Fill in your Supabase credentials in `.env.local`:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
   SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
   ```
3. Run the SQL migration in your Supabase SQL Editor:
   - Open [`/supabase/migrations/0001_init.sql`](file:///c:/Users/Ahsan%20Javed/Desktop/HASSAN_PORTFOLIO/supabase/migrations/0001_init.sql)
   - Copy the SQL content and run it in the Supabase Dashboard SQL Editor to create the `messages` table with Row Level Security (RLS).

---

## 💻 Local Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the portfolio.

---

## 🏗️ Production Build Verification

To verify the production build locally:

```bash
npm run build
npm run start
```
