"use client";
export default function NewQuestionBtn() {
  return (
    <button
      className="w-50 h-15 mt-4 bg-gray-500 hover:bg-gray-700 text-2xl p-3 rounded-sm"
      onClick={() => location.reload()}
    >
      Next Question
    </button>
  );
}
