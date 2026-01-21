import "dotenv/config";
import { PrismaClient } from "@/generated/prisma/client";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

const adapter = new PrismaPg(pool);

const prisma = new PrismaClient({
  adapter,
  log: ["query", "error", "warn", "info"],
});

async function clearDB() {
  if (!(await prisma.$queryRawUnsafe("SELECT 1;")))
    throw new Error("DB Connection Error");

  await prisma.$executeRawUnsafe(
    `TRUNCATE TABLE "Quest" RESTART IDENTITY CASCADE;`,
  );

  await console.log("Cleared DB");
}

clearDB()
  .catch((err) => console.error("Error: " + err))
  .finally(() => prisma.$disconnect());
