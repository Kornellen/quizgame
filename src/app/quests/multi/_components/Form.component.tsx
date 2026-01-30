"use client";
import { Question } from "@/types/index.type";
import FormQuests from "./FormQuests.component";
import { useState } from "react";

export default function Form({ questions }: { questions: Question[] }) {
  const [isSubmit, setIsSubmit] = useState<boolean>(false);
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (isSubmit) return;

    const userConfirm = confirm("Are you sure (Y/N)?");

    if (!userConfirm) return;

    setIsSubmit(true);

    const correctAnswers = Array<string>();

    for (let idx = 0; idx < questions.length; idx++) {
      const correctAnswer = questions[idx].answers.find(
        (answ) => answ.isCorrect,
      );

      if (correctAnswer) correctAnswers.push(correctAnswer.content);
    }

    e.currentTarget
      .querySelectorAll("div ul li input[type='radio']")
      .forEach((input) => input.setAttribute("disabled", "true"));

    let correctUserAnsw: number = 0;
    const allInputsLabels = Array.from(
      e.currentTarget.querySelectorAll("div ul li input[type='radio'] + label"),
    );

    const checkedInputsWithLabels = e.currentTarget.querySelectorAll(
      "div ul li input[type='radio']:checked + label",
    );

    if (checkedInputsWithLabels.length < correctAnswers.length)
      allInputsLabels.forEach((input) =>
        correctAnswers.includes(input.textContent)
          ? input.parentElement?.classList.add(
              "bg-green-500",
              "hover:bg-green-700",
            )
          : null,
      );

    checkedInputsWithLabels.forEach((input) => {
      if (correctAnswers.includes(input.textContent)) {
        input.parentElement?.classList.add(
          "bg-green-500!",
          "hover:bg-green-700!",
        );
        return (correctUserAnsw += 1);
      }
      input.parentElement?.classList.add("bg-red-500!", "hover:bg-red-700!");

      allInputsLabels.forEach((input) =>
        correctAnswers.includes(input.textContent)
          ? input.parentElement?.classList.add(
              "bg-green-500!",
              "hover:bg-green-700!",
            )
          : null,
      );
    });

    alert(
      `Correct: ${correctUserAnsw} / ${correctAnswers.length}. It\'s ${
        (correctUserAnsw / correctAnswers.length) * 100
      }%`,
    );
  }

  return (
    <form onSubmit={handleSubmit} method="post">
      <FormQuests questions={questions} />
      <div className="grid lg:grid-cols-4 grid-cols-6 grid-rows-1">
        <button
          className="m-4 lg:col-start-2 col-start-1 lg:col-span-1 col-span-3 h-15 bg-gray-500 hover:bg-gray-700 text-2xl p-3 rounded-sm"
          type="submit"
        >
          Submit
        </button>
        <button
          className="m-4 lg:col-span-1 col-span-3 h-15 bg-gray-500 hover:bg-gray-700 text-2xl p-3 rounded-sm"
          type="button"
          onClick={() => location.reload()}
        >
          New
        </button>
      </div>
    </form>
  );
}
