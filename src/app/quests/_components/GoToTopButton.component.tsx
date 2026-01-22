"use client";
export default function GoToTopBtn() {
  return (
    <div className="flex items-center justify-center mt-3">
      <button
        onClick={() => scrollTo({ top: 0 })}
        className="flex justify-center items-center lg:text-3xl lg:w-15 lg:h-15 w-10 h-10 text-xl rounded-md bg-gray-800 hover:bg-gray-600"
      >
        ↑
      </button>
    </div>
  );
}
