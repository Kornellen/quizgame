"use client";
import { useMemo } from "react";
import questions from "../../data.json";
import QuestComponent from "./quests/_components/Quest.component";

export type Answer = { content: string; isCorrect: boolean };

export type Question = {
  number: number;
  content: string;
  answers: Answer[];
};
export default function Home() {
  const cachedQuestions = useMemo((): Question[] => questions, []);

  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-gray-950">
      <main className="min-h-screen min-w-full max-w-3xl py-32 px-16 bg-white dark:bg-gray-950">
        <ol className="">
          {cachedQuestions.map((question) => (
            <li key={question.number} className="mt-10">
              <QuestComponent question={question} />
            </li>
          ))}
        </ol>
      </main>
    </div>
  );
}
