import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PIP Konkurs Ćwiczenie czy coś",
  description: "Strona z pytaniami do konkursu z PIP (baza 25/26)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const addresses = [
    { path: "/", name: "Home" },
    { path: "/quests/multi", name: "Multi Question Test" },
    { path: "/quests/single", name: "Single Question Test" },
    { path: "/quests/database?page=1", name: "Database" },
  ];
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className="flex items-center lg:gap-10 lg:justify-center lg:h-20 p-3 text-2xl bg-gray-700 min-w-full flex-wrap sm:justify-start sm:gap-5 sm:h-25">
          {addresses.map((address) => (
            <Link
              className="hover:bg-gray-800 p-3 rounded-md"
              key={address.name}
              href={address.path}
            >
              {address.name}
            </Link>
          ))}
        </nav>
        {children}
        <footer className="flex items-center flex-wrap lg:justify-center lg:gap-5 lg:h-15 p-3 text-xl">
          <p className="w-full text-center">
            Copyright &copy; 2026
            {new Date().getFullYear() === 2026
              ? ""
              : "-" + new Date().getFullYear()}{" "}
            Kornellen
          </p>
          <p className="w-full text-center">Links:</p>
          <ul className="grid grid-cols-3 grid-rows-2 items-center">
            {addresses.map((address) => (
              <Link
                className="row-span-1 col-span-1 hover:bg-gray-800 p-3 rounded-md"
                key={address.name}
                href={address.path}
              >
                {address.name}
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
      </body>
    </html>
  );
}
