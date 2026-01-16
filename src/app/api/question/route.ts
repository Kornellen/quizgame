import { QuestionService } from "@/lib/questions/Questions.service";

const questionService = QuestionService.getInstance();
export async function GET(): Promise<Response> {
  const question = questionService.getRandomQuestion();

  return Response.json(question);
}
