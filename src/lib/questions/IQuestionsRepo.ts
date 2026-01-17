import { Answer } from "@/generated/prisma/client";

export type QuestionDetials = {
  id: number;
  content: string;
  answers: Pick<Answer, "content" | "isCorrect">[];
};

export interface IQuestionsRepo {
  getRandomQuestion(questId: number): Promise<QuestionDetials | null>;

  getAllQuestions(): Promise<QuestionDetials[] | null>;

  getQuestionById(index: number): Promise<QuestionDetials | null>;
}
