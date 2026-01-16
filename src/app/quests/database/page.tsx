"use client";
import { useMemo, useState } from "react";
import questions from "../../../../data.json";
import { Question } from "@/app/page";

export default function Page() {
  const cachedQuestions = useMemo((): Question[] => questions, []);
  const [search, setSearch] = useState<number | null>(null);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    const currentInputValue = e.currentTarget.value;
    if (currentInputValue.length === 0 || isNaN(Number(currentInputValue)))
      return setSearch(null);

    if (Number(currentInputValue) > cachedQuestions.length)
      return setSearch(415);

    if (Number(currentInputValue) < 0)
      return setSearch(415 + Number(currentInputValue));

    return setSearch(Number(currentInputValue));
  }

  return (
    <main className="min-h-screen min-w-full max-w-3xl py-32 px-16 bg-white dark:bg-gray-950">
      <div className="text-center">
        <p className="text-5xl text-center p-3 mb-2 rounded-md">Question DB</p>
        <input
          type="number"
          placeholder="Question's number"
          onChange={(e): void => handleChange(e)}
          max={415}
          min={1}
          className="w-100 text-4xl bg-gray-800 rounded-md p-2 placeholder:text-gray-300"
        />
        <pre>Questions count: {cachedQuestions.length}</pre>
      </div>

      <ol className="">
        {cachedQuestions
          .filter(
            (question) =>
              (question.number === Number(search) && question) ||
              search === null
          )
          .map((question) => (
            <li key={question.number} className="mt-10">
              <p className="text-3xl font-bold text-white ">
                <span>{question.number}</span>&#41; {question.content}
              </p>
              <div className="border-gray-400 text-xl border-2 p-3 grid grid-cols-1 grid-rows-1 mt-2 rounded-sm hover:bg-gray-800 shadow-2xs">
                <p className="col-span-1 text-3xl row-span-1 text-left p-3 mt-2 rounded-md">
                  {question.answers.find((answ) => answ.isCorrect)?.content}
                </p>
              </div>
            </li>
          ))}
      </ol>
    </main>
  );
}
