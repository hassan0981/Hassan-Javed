-- ==============================================================================
-- SUPABASE SQL MIGRATION FOR HASSAN PORTFOLIO CONTACT FORM & PROJECTS
-- Target Supabase Project: nhmplfjtctoxbbdrwjoj
-- URL: https://supabase.com/dashboard/project/nhmplfjtctoxbbdrwjoj/sql/new
-- ==============================================================================

-- 1. Create Messages Table for Contact Us Form
CREATE TABLE IF NOT EXISTS public.messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- 2. Enable Row Level Security (RLS)
ALTER TABLE public.messages ENABLE ROW LEVEL SECURITY;

-- 3. Create RLS Policies for Anonymous Submissions
DROP POLICY IF EXISTS "Allow public insert messages" ON public.messages;
CREATE POLICY "Allow public insert messages" 
  ON public.messages 
  FOR INSERT 
  WITH CHECK (true);

DROP POLICY IF EXISTS "Allow service role select messages" ON public.messages;
CREATE POLICY "Allow service role select messages" 
  ON public.messages 
  FOR SELECT 
  USING (true);

-- 4. Create Projects Table (Optional)
CREATE TABLE IF NOT EXISTS public.projects (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  subtitle TEXT,
  description TEXT NOT NULL,
  tech_stack TEXT[] DEFAULT '{}',
  live_url TEXT,
  github_url TEXT,
  video_id TEXT,
  featured BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Allow public read projects" ON public.projects;
CREATE POLICY "Allow public read projects" 
  ON public.projects 
  FOR SELECT 
  USING (true);
