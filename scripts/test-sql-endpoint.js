const ref = "nhmplfjtctoxbbdrwjoj";
const serviceRoleKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5obXBsZmp0Y3RveGJiZHJ3am9qIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4NDY5ODEwNiwiZXhwIjoyMTAwMjc0MTA2fQ.vL7c1eYZhVX3dFKPEcwEQJgV1foc-5PZzqLUqBhYwug";

async function run() {
  const sql = `
    CREATE TABLE IF NOT EXISTS public.messages (
      id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      subject TEXT,
      message TEXT NOT NULL,
      created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
    );

    ALTER TABLE public.messages ENABLE ROW LEVEL SECURITY;
    DROP POLICY IF EXISTS "Allow anon insert messages" ON public.messages;
    CREATE POLICY "Allow anon insert messages" ON public.messages FOR INSERT WITH CHECK (true);
    DROP POLICY IF EXISTS "Allow public read messages" ON public.messages;
    CREATE POLICY "Allow public read messages" ON public.messages FOR SELECT USING (true);
  `;

  // Try Supabase SQL Query API
  try {
    const res = await fetch(`https://${ref}.supabase.co/rest/v1/rpc/exec_sql`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: serviceRoleKey,
        Authorization: `Bearer ${serviceRoleKey}`,
      },
      body: JSON.stringify({ query: sql }),
    });

    const text = await res.text();
    console.log("SQL API Response:", res.status, text);
  } catch (err) {
    console.error("Fetch error:", err);
  }
}

run();
