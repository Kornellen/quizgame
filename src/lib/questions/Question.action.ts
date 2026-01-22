"use server";
import { Question } from "@/types/index.type";
import { QuestionService } from "./Questions.service";

const service = QuestionService.getInstance();
export async function getRandomQuestion(): Promise<Question | null> {
  const question = await service.getRandomQuestion();
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
