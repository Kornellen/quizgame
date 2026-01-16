import { getAllQuestions } from "@/lib/questions/Question.action";
import FilteredQuestionsList from "./_components/FilteredQuestionList.component";

export default async function Page() {
  const questions = await getAllQuestions();

  if (!questions) return <p>no questions found</p>;

  return (
    <>
      <p className="lg:text-5xl text-4xl text-center p-3 mb-2 rounded-md">
        Question DB
      </p>
      <FilteredQuestionsList questions={questions} />
    </>
  );
}
