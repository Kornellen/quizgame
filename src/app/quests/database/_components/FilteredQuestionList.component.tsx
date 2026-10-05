"use client";
import Searchbar from "./Searchbar.component";
import { useEffect, useState } from "react";
import Pagination from "./Pagination";
import { Question } from "@/types/index.type";
import { getQuestionById } from "@/lib/questions/Question.action";

export default function FilteredQuestionsList({
  questions,
  page,
}: {
  questions: Question[];
  page: number;
}) {
  const [search, setSearch] = useState<number | null>(null);
  const [questionsState, setQuestionsState] = useState<Question[]>(questions);
  const numberOfQuestions = 415;

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setQuestionsState(questions);
    setSearch(null);
  }, [questions]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    const currentInputValue = e.currentTarget.value;

    if (currentInputValue.length === 0 || isNaN(Number(currentInputValue))) {
      setSearch(null);
      setQuestionsState(questions);
      return;
    }

    let nextSearch = Number(currentInputValue);

    if (nextSearch > 415) nextSearch = 415;
    if (nextSearch < 0) nextSearch = 415 + nextSearch;

    setSearch(nextSearch);

    setTimeout(async () => {
      const question = await getQuestionById(String(nextSearch));

      if (!question) return;

      setQuestionsState([
        {
          content: question.content,
          answers: question.answers ?? [],
          number: question.number,
        },
      ]);
    }, 200);
  }

  return (
    <>
      <Searchbar
        handleChange={handleChange}
        numOfQuestions={numberOfQuestions}
      />
      <Pagination
        page={page}
        lastQuestionId={questionsState[questionsState.length - 1].number}
        numOfQuestions={numberOfQuestions}
      />
      <ol className="">
        {questionsState
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
