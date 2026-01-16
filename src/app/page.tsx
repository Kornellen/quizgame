"use client";

export type Answer = { content: string; isCorrect: boolean };

export type Question = {
  number: number;
  content: string;
  answers: Answer[];
};
export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-gray-950">
      <main className="min-h-screen min-w-full max-w-3xl py-32 px-16 bg-white dark:bg-gray-950"></main>
    </div>
  );
}
