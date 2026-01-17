"use client";
import { Question } from "@/app/page";
import Searchbar from "./Searchbar.component";
import { useState } from "react";

export default function FilteredQuestionsList({
  questions,
}: {
  questions: Question[];
}) {
  const [search, setSearch] = useState<number | null>(null);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    const currentInputValue = e.currentTarget.value;
    if (currentInputValue.length === 0 || isNaN(Number(currentInputValue)))
      return setSearch(null);

    if (Number(currentInputValue) > 415) return setSearch(415);

    if (Number(currentInputValue) < 0)
      return setSearch(415 + Number(currentInputValue));

    return setSearch(Number(currentInputValue));
  }

  return (
    <>
      <Searchbar handleChange={handleChange} numOfQuestions={415} />
      <ol className="">
        {questions
          .filter(
            (question) =>
              (question.number === Number(search) && question) ||
              search === null,
          )
          .map((question) => (
            <li key={question.number} className="mt-10">
              <p className="lg:text-3xl text-2xl font-bold text-white ">
                <span>{question.number}</span>&#41; {question.content}
              </p>
              <div className="border-gray-400 border-2 p-3 grid grid-cols-1 grid-rows-1 mt-2 rounded-sm hover:bg-gray-800 shadow-2xs">
                <p className="col-span-1 lg:text-3xl text-2xl row-span-1 text-left p-3 mt-2 rounded-md">
                  {question.answers.find((answ) => answ.isCorrect)?.content}
                </p>
              </div>
            </li>
          ))}
      </ol>
    </>
  );
}
