"use client";
import { Answer, Question } from "@/app/page";

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
export default function QuestComponent({ question }: { question: Question }) {
  return (
    <>
      <p className="lg:text-3xl text-2xl font-bold text-white ">
        <span>{question.number}</span>&#41; {question.content}
      </p>
      <div className="border-gray-400 lg:text-xl text-lg border-2 lg:p-3 p-1 grid grid-cols-1 grid-rows-3 lg:mt-2 mt-1 rounded-sm">
        {question.answers.map((answer) => (
          <button
            key={answer.content}
            className="col-span-1 row-span-1 text-left lg:p-3 p-1 lg:mt-2 mt-1 rounded-md hover:bg-gray-800"
            onClick={(e) => handleClick({ answer, question, e })}
          >
            {answer.content}
          </button>
        ))}
      </div>
    </>
  );
}
