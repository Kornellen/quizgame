"use client";
import { LinkProp } from "@/types/index.type";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav({ links }: { links: LinkProp[] }) {
  const pathname = usePathname();

  return (
    <nav className="flex items-center lg:gap-10 lg:justify-center lg:h-20 p-3 text-2xl bg-[#24242e80] min-w-full flex-wrap sm:justify-start sm:gap-5 sm:h-25">
      {links.map((link) => (
        <Link
          className={`hover:bg-[#2b2b38] hover:scale-125 hover:ease-out duration-300 p-3 rounded-md${pathname === link.path ? ` bg-[#24242e] hover:bg-[#21212b]` : ""}`}
          key={link.name}
          href={link.path}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
}
