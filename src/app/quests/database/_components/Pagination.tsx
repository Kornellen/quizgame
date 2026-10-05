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
    "flex justify-center items-center w-20 bg-[#22252e] hover:bg-[#363a4a] select-none h-15 p-2 rounded-sm m-3";

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
        className={`${LINK_CLASSNAME} ${!(Number(page) > 1) && "hidden"}`}
      >
        Prev
      </Link>
      <div className={`grid lg:grid-cols-14 grid-cols-5 grid-rows-1`}>
        {pages.map((page) => {
          const linkPage = `?page=${page}`;
          return (
            <Link
              href={linkPage}
              className={`${LINK_CLASSNAME} col-span-1 row-span-1 ${linkPage === currentPage && "bg-[#282938]! hover:bg-[#313341]! outline-1 outline-[#59567c]"}`}
              key={`${page + "-pagi"}`}
            >
              {page}
            </Link>
          );
        })}
      </div>

      <Link
        href={`?page=${page + 1}`}
        className={`${LINK_CLASSNAME} ${!(lastQuestionId < numOfQuestions) && "hidden"}`}
      >
        Next
      </Link>
    </div>
  );
}
