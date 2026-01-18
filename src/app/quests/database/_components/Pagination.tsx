import Link from "next/link";

export default function Pagination({
  page,
  lastQuestionId,
  numOfQuestions,
}: {
  page: number;
  lastQuestionId: number;
  numOfQuestions: number;
}) {
  const linkClassName =
    "flex justify-center items-center w-20 bg-gray-800 hover:bg-gray-700 h-15 p-2 rounded-sm m-3";
  return (
    <div className="flex gap-2 flex-1 items-center justify-center">
      {Number(page) > 1 && (
        <Link href={`?page=${page - 1}`} className={linkClassName}>
          Prev
        </Link>
      )}

      <span>Page: {page}</span>
      {lastQuestionId < numOfQuestions && (
        <Link href={`?page=${page + 1}`} className={linkClassName}>
          Next
        </Link>
      )}
    </div>
  );
}
