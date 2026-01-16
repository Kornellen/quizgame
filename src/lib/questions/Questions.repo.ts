import { IQuestionsRepo } from "./IQuestionsRepo";
import { prisma } from "../prisma";
import { Answer, Question } from "@/app/page";

export class QuestionsRepo implements IQuestionsRepo {
  private constructor() {}

  private static instance: IQuestionsRepo;

  public static getInstance(): QuestionsRepo {
    if (!this.instance) this.instance = new QuestionsRepo();

    return this.instance;
  }

  async getRandomQuestion(questionId: number): Promise<Question | null> {
    const postData = await prisma.quest.findUnique({
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

    if (!postData) return null;

    const postDataDTO: Question = {
      number: postData.id,
      content: postData.content,
      answers: postData.answers.map(
        (answ): Answer => ({
          content: answ.content,
          isCorrect: answ.isCorrect,
        })
      ),
    };

    return postDataDTO;
  }
}
