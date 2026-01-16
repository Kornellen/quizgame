"use server";
import { Question } from "@/app/page";
import { QuestionService } from "./Questions.service";

const service = QuestionService.getInstance();
export async function getRandomQuestion(): Promise<Question | null> {
  const question = await service.getRandomQuestion();
  return question;
}

export async function getAllQuestions(): Promise<Question[] | null> {
  const questions = await service.getAllQuestions();

  return questions;
}

export async function getFullExam(): Promise<Question[] | null> {
  const IDs = new Array<number>();

  while (IDs.length < 20) {
    const id = Math.floor(Math.random() * 415) + 1;
    if (!IDs.includes(id)) IDs.push(id);
  }

  const questions: Question[] = await service.getExamQuestions(IDs);

  return questions;
}
