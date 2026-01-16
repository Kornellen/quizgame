"use server";
import { QuestionService } from "./Questions.service";

const service = QuestionService.getInstance();
export async function getRandomQuestion() {
  const question = await service.getRandomQuestion();
  return question;
}
