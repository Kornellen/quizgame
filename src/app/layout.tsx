import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "./quests/_components/Nav.component";
import Footer from "./quests/_components/Footer.component";

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

const addresses = [
  { path: "/", name: "Home" },
  { path: "/quests/multi", name: "Multi Question Test" },
  { path: "/quests/single", name: "Single Question Test" },
  { path: "/quests/database?page=1", name: "Database" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Nav links={addresses} />
        {children}
        <Footer links={addresses} />
      </body>
    </html>
  );
}
