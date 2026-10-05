"use client";
import { Answer, Question } from "@/types/index.type";

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
          "hover:bg-red-700",
        );
    });
    btns.forEach((btn) => btn.setAttribute("disabled", "true"));

    if (answer.isCorrect) {
      e.currentTarget.classList.remove("hover:bg-[#24263a]");
      return e.currentTarget.classList.add(
        "bg-green-500",
        "hover:bg-green-700",
      );
    } else {
      e.currentTarget.classList.remove("hover:bg-[#24263a]");
      const correct = question.answers.find((answ) => answ.isCorrect);

      const correctBtn = Array.from(btns).find(
        (btn) => btn.textContent === correct?.content,
      );

      correctBtn?.classList.add("bg-[#319615]", "hover:bg-[#227823]");

      e.currentTarget.classList.add("bg-[#c22929]", "hover:bg-[#8f1f1f]");
    }
  }
}
export default function QuestComponent({ question }: { question: Question }) {
  return (
    <div className="grid grid-cols-1 grid-rows-1 border-gray-400 bg-[#1b1b1b77] text-xl border-2 p-5  m-3 rounded-lg shadow-md shadow-[#636363]">
      <p className="lg:text-3xl text-2xl font-bold text-white">
        <span>{question.number}</span>&#41; {question.content}
      </p>
      <div className="lg:text-xl text-lg lg:p-3 p-1 grid grid-cols-1 grid-rows-3 lg:mt-2 mt-1 rounded-sm">
        {question.answers.map((answer, idx) => (
          <button
            key={answer.content}
            className="col-span-1 row-span-1 text-left lg:p-3 p-1 lg:mt-2 mt-1 rounded-md hover:bg-[#24263a]"
            onClick={(e) => handleClick({ answer, question, e })}
          >
            {answer.content}
          </button>
        ))}
      </div>
    </div>
  );
}
