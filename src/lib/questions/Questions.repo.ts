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

    const questionDataDTO: Question = {
      number: questionData.id,
      content: questionData.content,
      answers: questionData.answers.map(
        (answ): Answer => ({
          content: answ.content,
          isCorrect: answ.isCorrect,
        })
      ),
    };

    return questionDataDTO;
  }
  async getAllQuestions(): Promise<Question[] | null> {
    const questions = await prisma.quest.findMany({
      select: {
        content: true,
        id: true,
        answers: { select: { isCorrect: true, content: true } },
      },
    });

    const questionsDTO: Question[] = questions.map(
      (question): Question => ({
        number: question.id,
        content: question.content,
        answers: question.answers.map(
          (answ): Answer => ({
            content: answ.content,
            isCorrect: answ.isCorrect,
          })
        ),
      })
    );

    return questionsDTO;
  }

  async getQuestionById(id: number): Promise<Question | null> {
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

    const questionDTO: Question = {
      number: question.id,
      content: question.content,
      answers: question.answers.map(
        (answ): Answer => ({
          content: answ.content,
          isCorrect: answ.isCorrect,
        })
      ),
    };

    return questionDTO;
  }
}
