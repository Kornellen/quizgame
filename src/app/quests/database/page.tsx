import { getPageQuestions } from "@/lib/questions/Question.action";
import FilteredQuestionsList from "./_components/FilteredQuestionList.component";
import GoToTopBtn from "../_components/GoToTopButton.component";

export const dynamic = "force-dynamic";
type Props = {
  searchParams?: {
    page?: string;
  };
};

const QUESTIONS_PER_PAGE = 30;

export default async function Page({ searchParams }: Props) {
  let lastSeenId = 1;
  let page = 1;
  const sp = await searchParams;

  if (sp && sp.page) page = Number(await sp.page);

  if (page > 1) lastSeenId = Math.abs((page - 1) * QUESTIONS_PER_PAGE) + 1;

  const questions = await getPageQuestions(lastSeenId, QUESTIONS_PER_PAGE);

  if (!questions) return <p>no questions found</p>;

  return (
    <>
      <p className="lg:text-5xl text-4xl text-center p-3 mb-2 rounded-md">
        Question DB
      </p>
      <FilteredQuestionsList questions={questions} page={page} />
      <GoToTopBtn />
    </>
  );
}
