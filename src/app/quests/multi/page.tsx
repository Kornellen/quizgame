import { getFullExam } from "@/lib/questions/Question.action";
import Form from "./_components/Form.component";

export const cache = "no-store";
export default async function Page() {
  const examQuestions = await getFullExam();

  if (!examQuestions) return <h1>Error</h1>;

  return <Form questions={examQuestions} />;
}
