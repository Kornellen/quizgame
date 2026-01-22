"use client";
import { LinkProp } from "@/types/index.type";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav({ links }: { links: LinkProp[] }) {
  const pathname = usePathname();

  return (
    <nav className="flex items-center lg:gap-10 lg:justify-center lg:h-20 p-3 text-2xl bg-gray-700 min-w-full flex-wrap sm:justify-start sm:gap-5 sm:h-25">
      {links.map((link) => (
        <Link
          className={`hover:bg-gray-800 p-3 rounded-md${pathname === link.path ? ` bg-gray-900 hover:bg-gray-800` : ""}`}
          key={link.name}
          href={link.path}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
}
