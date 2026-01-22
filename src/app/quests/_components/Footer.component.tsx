import Link from "next/link";
import { LinkProp } from "./Nav.component";

export default function Footer({ links }: { links: LinkProp[] }) {
  return (
    <footer className="flex items-center flex-wrap lg:justify-center lg:gap-5 lg:h-15 p-3 text-xl">
      <p className="w-full text-center">
        Copyright &copy; 2026
        {new Date().getFullYear() === 2026
          ? ""
          : "-" + new Date().getFullYear()}{" "}
        Kornellen
      </p>
      <ul className="grid grid-cols-3 grid-rows-2 items-center">
        {links.map((link) => (
          <Link
            className="row-span-1 col-span-1 hover:bg-gray-800 p-3 rounded-md"
            key={link.name}
            href={link.path}
          >
            {link.name}
          </Link>
        ))}
        <li>
          <Link
            className="row-span-1 col-span-1 hover:bg-gray-800 p-3 rounded-md"
            href={"https://github.com/Kornellen/quizgame/"}
          >
            Source Code
          </Link>
        </li>
      </ul>
    </footer>
  );
}
