import { getFullExam } from "@/lib/questions/Question.action";
import Form from "./_components/Form.component";
import GoToTopBtn from "../_components/GoToTopButton.component";

export const dynamic = "force-dynamic";
export default async function Page() {
  const examQuestions = await getFullExam();

  if (!examQuestions)
    return <h1>There was an error generating your exam. Please try again</h1>;

  return (
    <>
      <Form questions={examQuestions} />
      <GoToTopBtn />
    </>
  );
}
