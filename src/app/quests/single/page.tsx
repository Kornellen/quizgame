import QuestComponent from "../_components/Quest.component";
import { QuestionService } from "@/lib/questions/Questions.service";
import NewQuestionBtn from "./_components/NewQuestionBtn";

const service = QuestionService.getInstance();

export default async function Page() {
  console.time("Question fetch");
  const question = await service.getRandomQuestion();
  console.timeEnd("Question fetch");
  if (!question) return <p>Quest not found!</p>;

  return (
    <main className="min-h-screen min-w-full max-w-3xl py-32 px-16 bg-white dark:bg-gray-950">
      <QuestComponent question={question} />
      <NewQuestionBtn />
    </main>
  );
}
