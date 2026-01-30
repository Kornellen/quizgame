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
                className={`flex items-center justify-center text-xl mt-2 mr-2 pl-2 rounded-md hover:bg-gray-700 has-[input:checked]:bg-gray-500`}
              >
                <input
                  type="radio"
                  className={`peer mr-4 w-4 h-4 checked:bg-gray-500 checked:border-gray-800 rounded-xs appearance-none bg-gray-200 ring-2 ring-gray-700 focus:ring-gray-900`}
                  name={`${question.number}-answ`}
                  id={`${question.number}-${answ.content}`}
                />{" "}
                <label
                  className="w-full h-fit p-4 select-none cursor-pointer"
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
