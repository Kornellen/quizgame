import QuestComponent from "../_components/Quest.component";
import { getRandomQuestion } from "@/lib/questions/Question.action";
import NewQuestionBtn from "./_components/NewQuestionBtn.component";

export const dynamic = "force-dynamic";

export default async function Page() {
  const question = await getRandomQuestion();

  if (!question) return <p>Quest not found!</p>;

  return (
    <>
      <QuestComponent question={question} />
      <NewQuestionBtn />
    </>
  );
}
