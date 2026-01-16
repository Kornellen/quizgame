import { PrismaClient } from "@/generated/prisma/client";
import questions from "../data.json";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

const adapter = new PrismaPg(pool);

const prisma = new PrismaClient({ adapter });

async function seed() {
  for (const q of questions) {
    await prisma.quest.create({
      data: {
        id: q.number,
        content: q.content,
        answers: {
          create: q.answers.map((a) => ({
            content: a.content,
            isCorrect: a.isCorrect,
          })),
        },
      },
    });
  }

  console.log(`Imported ${questions.length} questions`);
}

seed()
  .catch((err) => console.error("Error: " + err))
  .finally(() => prisma.$disconnect());
