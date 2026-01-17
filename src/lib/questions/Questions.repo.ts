import { IQuestionsRepo, QuestionDetials } from "./IQuestionsRepo";
import { prisma } from "../prisma";

export class QuestionsRepo implements IQuestionsRepo {
  private constructor() {}

  private static instance: IQuestionsRepo;

  public static getInstance(): QuestionsRepo {
    if (!this.instance) this.instance = new QuestionsRepo();

    return this.instance;
  }
  async getRandomQuestion(questionId: number): Promise<QuestionDetials | null> {
    const questionData = await prisma.quest.findUnique({
      where: { id: questionId },
      select: {
        content: true,
        id: true,
        answers: {
          select: {
            isCorrect: true,
            content: true,
          },
        },
      },
    });

    if (!questionData) return null;

    return questionData;
  }
  async getAllQuestions(): Promise<QuestionDetials[] | null> {
    const questions = await prisma.quest.findMany({
      select: {
        id: true,
        content: true,
        answers: { select: { isCorrect: true, content: true } },
      },
      orderBy: { id: "asc" },
    });

    return questions;
  }

  async getQuestionById(id: number): Promise<QuestionDetials | null> {
    const question = await prisma.quest.findUnique({
      where: { id: id },
      select: {
        content: true,
        id: true,
        answers: {
          select: {
            isCorrect: true,
            content: true,
          },
        },
      },
    });

    if (!question) return null;

    return question;
  }
}
