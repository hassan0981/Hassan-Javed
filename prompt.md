# Antigravity Build Prompt — Muhammad Hassan Javed Portfolio

Paste everything below (from "## PROJECT BRIEF" to the end) into Antigravity as a single prompt. It's written so the agent can build the whole project in one pass.

---

## PROJECT BRIEF

Build a complete, production-ready **one-page developer portfolio website** using **Next.js 14+ (App Router, TypeScript)**, **Tailwind CSS**, **Framer Motion**, and **Supabase** (for storing contact form submissions). No CMS, no picture of the person — the design itself has to carry the "wow factor."

### Tech stack (use exactly this)
- Next.js 14+ (App Router, TypeScript, `src/` directory)
- Tailwind CSS (with a custom design-token config, no default look)
- Framer Motion for element/scroll animations
- Lenis (or `@studio-freight/lenis`) for buttery smooth scrolling
- Supabase JS client for:
  - Storing contact form submissions in a `messages` table
  - (Optional, wire it but don't require it) storing project rows in a `projects` table so projects are data-driven instead of hardcoded
- `lucide-react` for icons
- `react-icons` for tech-stack logos (or simple-icons via `react-icons/si`)
- Deployed target: Vercel

### Design direction — "developer-grade, not agency-cliché"
Not pure black, not pure white — a **rich charcoal/slate base** that feels like a premium code editor, with **electric, saturated accent colors** so it reads as bright and eye-catching against the medium-dark base. Think "VS Code Dark+ meets a modern SaaS landing page," not a generic dark portfolio template.

**Exact palette:**
- Background base: `#0B1120` → `#111827` gradient mesh (slate-950/900 range, not full black)
- Surface / card: `#161F32` with 1px border `#25324a` and subtle inner glow on hover
- Primary accent: Electric Indigo `#6366F1` → Cyan `#22D3EE` gradient (used for CTAs, headings highlights, glow effects, cursor trail)
- Secondary accent: Violet `#A78BFA` for hover states and tags
- Text: Off-white `#E5E7EB` for body, `#F9FAFB` for headings, `#94A3B8` for muted/meta text
- Success/accent pop: `#34D399` (used sparingly, e.g. "Available for work" dot)

Typography:
- Headings: `Space Grotesk` or `Clash Display` (bold, geometric, techy)
- Body: `Inter`
- Code/mono accents (badges, terminal-style bits, section labels like `01. About`): `JetBrains Mono`

### Layout — single page, sticky nav, sections in this order
1. **Navbar** — sticky, glassmorphism (blurred translucent bg on scroll), logo/initials mark "MHJ", links to each section, an "Available for work" pill with pulsing dot, resume download button, smooth-scroll anchor links, mobile hamburger with slide-in menu.
2. **Hero** — full viewport height.
   - Animated gradient-mesh / aurora background (canvas or CSS, slowly shifting, low opacity, not distracting)
   - Optional subtle particle or constellation network background (canvas, connects dots near cursor) — since there's no photo, this is the visual anchor
   - Kicker line in mono font: `Hi, I'm`
   - Big headline: "Muhammad Hassan Javed" with a gradient-text animated reveal (letters/words fade+slide up staggered on load)
   - Animated role subtitle using a typewriter/cycling-text effect: "Full-Stack Developer", "Next.js & MERN Specialist", "React Native Developer", "AI/ML Enthusiast"
   - Short summary (2 lines, from CV summary, in muted text)
   - Two CTAs: "View Projects" (gradient button, magnetic hover effect) and "Get In Touch" (outline button)
   - Scroll-down indicator (animated bouncing chevron / mouse icon)
3. **About** — two-column: short narrative pulled from CV summary + a stats/metrics strip (animated count-up numbers on scroll into view): e.g. "1+ yrs experience", "6+ projects shipped", "5+ tech stacks", "BS CS 2026". Include a small "currently" line: final-year CS student at University of Central Punjab, graduating 2026, working in freelance full-stack + internship background.
4. **Experience** — vertical animated timeline (scroll-triggered line-draw + fade-in cards):
   - **Application Developer Intern — ACME One** (Sep 2025 – Nov 2025): React Native UI components, REST API integration, contributed to an AR-based mobile app, optimized data flow, built an Office Management System app.
   - **Freelance Full-Stack Developer — Remote (Upwork & Direct Clients)** (Mar 2025 – Jun 2026): built bouncydigital.com and agntaxconsultant.pk; stack: React, React Native, Firebase, Node.js, MongoDB.
5. **Projects** — the centerpiece. Grid of project cards (bento-grid or alternating layout), each with:
   - Hover state: card lifts, gradient border glow, tilt-on-hover (subtle 3D tilt via Framer Motion `useMotionValue`/`useTransform` following cursor)
   - A **"Watch Demo" play button** on each card → opens an **animated modal/lightbox** with a video player embedding a **YouTube unlisted video** via iframe (`https://www.youtube.com/embed/{videoId}`), with a scale+fade entrance animation and backdrop blur; closes on ESC/backdrop click. Each project's `videoId` lives in `/data/projects.ts` as a clearly commented placeholder string for Hassan to swap in once he records and uploads the demo (upload as "Unlisted" on YouTube — free, no storage/bandwidth cost on Vercel, and the URL is only reachable by people with the link, not searchable).
   - Tech-stack pill badges per project (icons for React, Next.js, Node, MongoDB, Supabase, Firebase, WordPress, Python, Java as relevant)
   - Live-site + GitHub icon links where relevant
   - Projects to include (use this content exactly, tightened for web):
     1. **Mashhoor** — AI-Powered Influencer Marketing Platform (MERN Stack). AI-driven platform for Pakistani startups/SMEs to find credible influencers and detect fake engagement: niche categorisation, engagement analysis, Trust Score fake-follower detection, ROI prediction for campaigns, AI chatbot for outreach automation, sentiment analysis on responses.
     2. **BouncyDigital.com** — Next.js, Supabase. Fully responsive company portfolio site; Supabase powers blog content and contact form submissions; SMTP email integration for automated contact notifications.
     3. **AgnTaxConsultant.pk** — WordPress. Mobile-responsive portfolio-style site for a tax consultancy; custom plugin configuration; WhatsApp integration for direct client inquiries.
     4. **Email Spam Detector** — Python, Machine Learning. Spam classification system using statistical ML models to classify emails by content.
     5. **Pet Care Tracker** — Java, Firebase (Android app). Tracks pet health records and medical history; search functionality, disease tracking, role-based authentication.
6. **Skills** — grouped, animated grid/marquee:
   - Languages: C++, Java, TypeScript, JavaScript
   - Frontend: React.js, Next.js, React Native, Tailwind CSS, HTML/CSS, Responsive UI
   - Backend: Node.js, Express.js, RESTful APIs
   - Databases: Firebase/Firestore, Supabase, MongoDB, MySQL
   - Mobile: Expo, React Navigation, Push Notifications
   - Other: MERN Stack, WordPress, Project Management, Problem Solving
   - Presentation idea: an infinite auto-scrolling marquee row of tech logos (pause on hover) PLUS a categorized grid below it with icon + skill name, staggered fade-in on scroll.
7. **Education & Certifications** — compact animated cards:
   - BS Computer Science, University of Central Punjab (2022 – 2026)
   - FSc Pre-Engineering, Crescent College (2020 – 2022)
   - Certification: Speed Programming Competition 2025, University of Central Punjab
8. **Contact** — split layout:
   - Left: heading "Let's build something great", email, phone, location (Lahore, Pakistan — keep it city-level, not full street address, for privacy), social icons (GitHub, LinkedIn, Upwork)
   - Right: contact form (Name, Email, Subject, Message) with floating labels, focus glow animation, client + server validation, submit button with loading spinner state, success/error toast animation
   - On submit: insert row into Supabase `messages` table via API route (`/api/contact`), server-side using the Supabase service role key (never exposed to client)
9. **Footer** — minimal: copyright, "Built with Next.js & Supabase", back-to-top button (animated, appears after scrolling past hero).

### Animation inventory (spread these across the site, don't overdo any single one)
- Scroll-triggered fade+slide-up reveals on every section (Framer Motion `whileInView`)
- Staggered children animation for lists/grids (cards, skill pills, timeline items)
- Magnetic buttons (button visually pulls slightly toward cursor within its hover radius)
- Cursor-following gradient blob / custom cursor dot (desktop only, disabled on touch)
- Animated gradient text on the hero name
- Typewriter/cycling role text in hero
- Count-up number animation for the About stats strip
- 3D tilt-on-hover for project cards
- Video modal with scale+backdrop-blur transition
- Sticky navbar background blur + shrink on scroll
- Smooth-scroll (Lenis) for all anchor navigation
- Subtle animated background (aurora gradient mesh or particle network) in hero and optionally a faint version behind the Skills section
- Page-load intro: a brief staggered reveal of the hero content (not a full loading screen, keep it fast — under ~800ms)
- Respect `prefers-reduced-motion` — provide a reduced-motion fallback that keeps fades but drops parallax/tilt/particles

### Responsiveness & quality bar
- Mobile-first, test breakpoints at 375px, 768px, 1024px, 1440px
- Timeline collapses to a single-column stacked layout on mobile
- Project grid: 1 column mobile → 2 tablet → 2–3 desktop (bento-style)
- Marquee/skills row still works with touch scroll on mobile
- Lighthouse targets: Performance 90+, Accessibility 95+, best practices for image/video lazy-loading
- Semantic HTML, proper heading hierarchy, alt text, keyboard-navigable nav and modal (focus trap in the video modal), visible focus states
- Use `next/font` for font loading, `next/image` isn't needed for photos (none) but use it for any icons/graphics if applicable

### Supabase setup
Create and wire this table (write the SQL migration file too):

```sql
create table messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  subject text,
  message text not null,
  created_at timestamp with time zone default now()
);

alter table messages enable row level security;

-- Only allow inserts via the server (service role bypasses RLS anyway);
-- no public select/update/delete policies needed.
```

Optional `projects` table (for making the Projects section data-driven later):
```sql
create table projects (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text not null,
  tech_stack text[] not null,
  video_url text,
  live_url text,
  github_url text,
  sort_order int default 0,
  created_at timestamp with time zone default now()
);
```

Environment variables to set up (`.env.local`, and add a `.env.example`):
```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
```
The contact API route (`app/api/contact/route.ts`) must use the **service role key** server-side only, validate incoming fields, and return proper JSON error/success responses. The client-side Supabase instance (anon key) should not be used to write `messages` directly — go through the API route so the service role key stays server-only.

### Content — use my real info

**Name:** Muhammad Hassan Javed
**Role:** Full-Stack Developer (Next.js / MERN / React Native) — Computer Science Graduate
**Location:** Lahore, Pakistan
**Email:** hass.javed25@gmail.com
**Phone:** 0321-8844167

**Summary (use/trim for hero + about):**
Computer Science graduate with a strong foundation in full-stack web and mobile application development. Proficient in the MERN Stack, Next.js, React Native, and WordPress, with hands-on experience building responsive, scalable, user-focused applications. Familiar with Machine Learning concepts and model development, with practical experience on AI-driven projects. Quick learner, strong problem-solver, passionate about emerging technologies, committed to clean, maintainable code.

Use the Experience, Projects, Skills, and Education content exactly as listed in the sections above — that's the full CV content, don't invent extra jobs or projects.

**No profile photo anywhere** — the hero and about sections must be designed to feel complete and premium without a headshot (rely on typography, gradient shapes, and the particle/aurora background instead of a photo placeholder).

### Project structure to generate
```
/src
  /app
    layout.tsx
    page.tsx
    /api/contact/route.ts
    globals.css
  /components
    Navbar.tsx
    Hero.tsx
    About.tsx
    Experience.tsx
    Projects.tsx
    ProjectCard.tsx
    VideoModal.tsx
    Skills.tsx
    Education.tsx
    Contact.tsx
    Footer.tsx
    ui/ (Button, Badge, MagneticButton, CountUp, AnimatedText, Marquee, CustomCursor, ParticleBackground)
  /lib
    supabase/client.ts
    supabase/server.ts
  /data
    projects.ts
    experience.ts
    skills.ts
/supabase
  migrations/0001_init.sql
.env.example
```

### Deliverable expectations
- Fully working `npm run dev` project, no TODOs left in critical paths (contact form must actually work end-to-end against Supabase once env vars are filled in)
- Clean, componentized, typed code — no single giant page file
- Include a short README explaining how to set up Supabase env vars and run the project
- Mark clearly (with a comment + a placeholder file name) exactly where I need to drop in real demo video files/links for each project, since I'll record those myself later

Build this now, section by section, starting with the project scaffold and Tailwind config/design tokens, then the layout components, then each section in the order listed above.