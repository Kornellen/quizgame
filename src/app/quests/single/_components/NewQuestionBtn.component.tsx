"use client";
export default function NewQuestionBtn() {
  return (
    <button
      className="w-full h-15 mt-4 bg-[#34325a] hover:bg-[#252342] text-2xl p-3 rounded-sm"
      onClick={() => location.reload()}
    >
      Next Question
    </button>
  );
}
