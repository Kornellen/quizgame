import { Quest } from "@/generated/prisma/client";

export interface IQuestionsRepo {
  getRandomQuestion(): Quest;
}
