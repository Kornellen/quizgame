import Link from "next/link";
import { QUESTIONS_PER_PAGE } from "../page";
import { useSearchParams } from "next/navigation";

export default function Pagination({
  page,
  lastQuestionId,
  numOfQuestions,
}: {
  page: number;
  lastQuestionId: number;
  numOfQuestions: number;
}) {
  const currentPage = `?page=${useSearchParams().get("page")}`;

  const LINK_CLASSNAME =
    "flex justify-center items-center w-20 bg-gray-800 hover:bg-gray-700 select-none h-15 p-2 rounded-sm m-3";

  const numOfPages = Math.ceil(numOfQuestions / QUESTIONS_PER_PAGE);
  const pages = Array<number>(numOfPages);

  for (let page = 1; page < numOfPages + 1; page++)
    if (!pages.includes(page)) pages.push(page);

  return (
    <div
      className={`flex grid-cols-1 grid-rows-1 gap-2 items-center justify-center`}
    >
      <Link
        href={`?page=${page > 1 ? page - 1 : 1}`}
        className={`${LINK_CLASSNAME} ${!(Number(page) > 1) ? "pointer-events-none bg-gray-500! text-gray-700!" : ""}`}
      >
        Prev
      </Link>
      <div className={`grid lg:grid-cols-14 grid-cols-5 grid-rows-1`}>
        {pages.map((page) => {
          const linkPage = `?page=${page}`;
          return (
            <Link
              href={linkPage}
              className={`${LINK_CLASSNAME} col-span-1 row-span-1 ${linkPage === currentPage ? "bg-[#172238]! hover:bg-gray-600 outline-1 outline-indigo-600" : ""}`}
              key={`${page + "-pagi"}`}
            >
              {page}
            </Link>
          );
        })}
      </div>

      <Link
        href={`?page=${page + 1}`}
        className={`${LINK_CLASSNAME} ${!(lastQuestionId < numOfQuestions) ? "pointer-events-none bg-gray-500! text-gray-700!" : ""}`}
      >
        Next
      </Link>
    </div>
  );
}
