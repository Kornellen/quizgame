"use client";
import { useMemo } from "react";
import questions from "../../data.json";

export type Answer = { content: string; isCorrect: boolean };

export type Question = {
  number: number;
  content: string;
  answers: Answer[];
};
export default function Home() {
  const cachedQuestions = useMemo((): Question[] => questions, []);

  function handleClick({
    answer,
    question,
    e,
  }: {
    answer: Answer;
    question: Question;
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>;
  }): void {
    const parent = e.currentTarget.parentElement;

    const btns = parent?.querySelectorAll("button");
    if (btns) {
      btns.forEach((btn) => {
        if (
          btn.classList.contains("bg-red-500 hover:bg-red-700") ||
          btn.classList.contains("bg-green-500 hover:bg-green-700")
        )
          btn.classList.remove(
            "bg-green-500",
            "hover:bg-green-700",
            "bg-red-500",
            "hover:bg-red-700"
          );
      });
      btns.forEach((btn) => btn.setAttribute("disabled", "true"));

      if (answer.isCorrect)
        return e.currentTarget.classList.add(
          "bg-green-500",
          "hover:bg-green-700"
        );
      else {
        const correct = question.answers.find((answ) => answ.isCorrect);

        const correctBtn = Array.from(btns).find(
          (btn) => btn.textContent === correct?.content
        );

        correctBtn?.classList.add("bg-green-500", "hover:bg-green-700");

        e.currentTarget.classList.add("bg-red-500", "hover:bg-red-700");
      }
    }
  }

  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-gray-950">
      <main className="min-h-screen min-w-full max-w-3xl py-32 px-16 bg-white dark:bg-gray-950">
        <ol className="">
          {cachedQuestions.map((question) => (
            <li key={question.number} className="mt-10">
              <p className="text-3xl font-bold text-white ">
                <span>{question.number}</span>) {question.content}
              </p>
              <div className="border-gray-400 text-xl border-2 p-3 grid grid-cols-1 grid-rows-3 mt-2 rounded-sm">
                {question.answers.map((answer) => (
                  <button
                    key={answer.content}
                    className="col-span-1 row-span-1 text-left p-3 mt-2 rounded-md hover:bg-gray-800"
                    onClick={(e) => handleClick({ answer, question, e })}
                  >
                    {answer.content}
                  </button>
                ))}
              </div>
            </li>
          ))}
        </ol>
      </main>
    </div>
  );
}
