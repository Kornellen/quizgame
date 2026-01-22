"use client";

import { Question } from "@/types/index.type";

export default function FormQuests({ questions }: { questions: Question[] }) {
  return (
    <>
      {questions.map((question, idx) => (
        <div
          className="grid grid-cols-1 grid-rows-1 border-gray-400 text-xl border-2 p-3  m-3 rounded-md"
          key={question.number}
        >
          <p className="underline underline-offset-5 text-2xl mb-4">
            {idx + 1}&#41; {question.content}
          </p>
          <ul className="m-2">
            {question.answers.map((answ) => (
              <li
                key={answ.content}
                className="flex items-center text-xl mt-2 mr-2 p-3 rounded-md hover:bg-gray-700"
              >
                <input
                  type="radio"
                  className="mr-4 w-1/12 h-4"
                  name={`${question.number}-answ`}
                  id={`${question.number}-${answ.content}`}
                />{" "}
                <label
                  className="w-11/12"
                  htmlFor={`${question.number}-${answ.content}`}
                >
                  {answ.content}
                </label>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}
