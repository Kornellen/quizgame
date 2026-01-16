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
    { path: "/quests/database", name: "Database" },
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
      </body>
    </html>
  );
}
