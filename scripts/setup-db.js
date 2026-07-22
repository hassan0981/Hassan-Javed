const { Client } = require("pg");

async function main() {
  const regions = [
    "aws-0-us-east-1",
    "aws-0-us-east-2",
    "aws-0-us-west-1",
    "aws-0-us-west-2",
    "aws-0-eu-central-1",
    "aws-0-eu-west-1",
    "aws-0-eu-west-2",
    "aws-0-eu-west-3",
    "aws-0-ap-southeast-1",
    "aws-0-ap-southeast-2",
    "aws-0-ap-northeast-1",
    "aws-0-ap-south-1",
    "aws-0-sa-east-1",
    "aws-0-ca-central-1",
    "aws-0-me-central-1",
  ];

  const password = "HassanJaved0987654321";
  const ref = "nhmplfjtctoxbbdrwjoj";

  const sql = `
    CREATE TABLE IF NOT EXISTS public.messages (
      id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      subject TEXT,
      message TEXT NOT NULL,
      created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
    );

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

    ALTER TABLE public.messages ENABLE ROW LEVEL SECURITY;
    ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;

    DROP POLICY IF EXISTS "Allow anon insert messages" ON public.messages;
    CREATE POLICY "Allow anon insert messages" ON public.messages FOR INSERT WITH CHECK (true);

    DROP POLICY IF EXISTS "Allow public read messages" ON public.messages;
    CREATE POLICY "Allow public read messages" ON public.messages FOR SELECT USING (true);
  `;

  for (const r of regions) {
    const connStr = `postgresql://postgres.${ref}:${password}@${r}.pooler.supabase.com:6543/postgres`;
    console.log("Checking region pooler:", r);

    const client = new Client({
      connectionString: connStr,
      ssl: { rejectUnauthorized: false },
      connectionTimeoutMillis: 3000,
    });

    try {
      await client.connect();
      console.log("🔥 SUCCESS! Connected to Supabase DB via region:", r);
      await client.query(sql);
      console.log("✅ SUCCESS! Table 'messages' created in public schema!");
      await client.end();
      return;
    } catch (err) {
      if (!err.message.includes("ENOTFOUND")) {
        console.log(`Region ${r} responded with error:`, err.message);
      }
    }
  }

  console.log("Completed checking all regions.");
}

main();
