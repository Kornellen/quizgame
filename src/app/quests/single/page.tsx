import QuestComponent from "../_components/Quest.component";
import NewQuestionBtn from "./_components/NewQuestionBtn.component";
import { getRandomQuestion } from "@/lib/questions/Question.action";

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
