import { PrismaClient } from "@/generated/prisma/client";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";

const globalPool = globalThis as unknown as { pool: Pool | undefined };
const globalAdapter = globalThis as unknown as {
  adapter: PrismaPg | undefined;
};

const pool =
  globalPool.pool ?? new Pool({ connectionString: process.env.DATABASE_URL });

const adapter = globalAdapter.adapter ?? new PrismaPg(pool);

const prismaGlobal = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma = prismaGlobal.prisma ?? new PrismaClient({ adapter });

if (process.env.NODE_ENV !== "production") prismaGlobal.prisma = prisma;
