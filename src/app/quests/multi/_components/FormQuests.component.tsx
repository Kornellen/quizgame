"use client";

import { Question } from "@/types/index.type";

export default function FormQuests({ questions }: { questions: Question[] }) {
  return (
    <>
      {questions.map((question, idx) => (
        <div
          className="grid grid-cols-1 grid-rows-1 border-gray-400 bg-[#1b1b1b77] text-xl border-2 p-5  m-3 mt-5! rounded-lg shadow-md shadow-[#636363]"
          key={question.number}
        >
          <p className="underline underline-offset-9 text-3xl font-bold mb-4">
            {idx + 1}&#41; {question.content}
          </p>
          <ul className="m-1">
            {question.answers.map((answ, idx) => (
              <div key={answ.content}>
                {idx > 0 && <div className="w-full h-0.5 bg-black"></div>}
                <li
                  className={`flex items-center justify-center text-xl m-5 p-2 rounded-md hover:bg-[#0f0f0f] has-[input:checked]:bg-[#101011] hover:-translate-2 duration-300`}
                >
                  <input
                    type="radio"
                    className={`peer mr-4 w-4 h-4 checked:bg-[#151320] checked:border-gray-500 rounded-xs appearance-none bg-[#1b1c20] ring-2 ring-[#2c2c2c] focus:ring-[#202020] duration-300`}
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
              </div>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}
