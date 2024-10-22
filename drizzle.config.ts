import type { Config } from "drizzle-kit";
import * as dotenv from "dotenv";

dotenv.config({
  path: ".env",
});

export default {
  schema: "./src/lib/db/schema.ts",
  out: "./drizzle",          // Optional: Specify the output directory
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,  // Changed from connectionString to url
  },
} satisfies Config;
