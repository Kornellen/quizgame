import { Question } from "@/app/page";

export interface IQuestionsRepo {
  getRandomQuestion(questId: number): Promise<Question | null>;
}
