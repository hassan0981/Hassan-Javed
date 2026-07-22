import { defineConfig } from "@prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  datasource: {
    url: process.env.DIRECT_URL || "postgresql://postgres:HassanJaved0987654321@db.nhmplfjtctoxbbdrwjoj.supabase.co:5432/postgres",
  },
});
