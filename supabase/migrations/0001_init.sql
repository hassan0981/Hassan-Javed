-- Supabase Migration File for Muhammad Hassan Javed Portfolio

-- 1. Create messages table for Contact Form submissions
create table if not exists public.messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  subject text,
  message text not null,
  created_at timestamp with time zone default now()
);

-- Enable RLS on messages
alter table public.messages enable row level security;

-- Messages security: Only service role key should be able to insert/select.
-- No public SELECT/UPDATE/DELETE policy needed.

-- 2. Optional projects table for data-driven projects grid
create table if not exists public.projects (
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

-- Enable RLS on projects
alter table public.projects enable row level security;

-- Public read access policy for projects (if populated in Supabase)
create policy "Allow public read access for projects"
  on public.projects
  for select
  using (true);
