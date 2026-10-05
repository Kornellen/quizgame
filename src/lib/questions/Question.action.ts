"use server";
import { Question } from "@/types/index.type";
import { QuestionService } from "./Questions.service";

const service = QuestionService.getInstance();
export async function getRandomQuestion(): Promise<Question | null> {
  let question: Question | null = { number: 0, content: "", answers: [] };
  let lastId = 0;
  do {
    const q = await service.getRandomQuestion();
    if (!q) {
      lastId = 0;
      return (question = null);
    }
    question = q;
    lastId = q.number;
  } while (question?.number !== lastId);
  return question;
}

export async function getPageQuestions(
  lastSeenId: number = 1,
  questionsPerPage: number = 50,
): Promise<Question[] | null> {
  return service.getPageOfQuestions(lastSeenId, questionsPerPage);
}

export async function getFullExam(): Promise<Question[] | null> {
  const IDs = new Array<number>();

  while (IDs.length < 20) {
    const id = Math.floor(Math.random() * 415) + 1;
    if (!IDs.includes(id)) IDs.push(id);
  }

  const questions: Question[] | null = await service.getExamQuestions(IDs);

  return questions;
}

export async function getQuestionById(questionId: string) {
  return await service.getQuestionById(questionId);
}
