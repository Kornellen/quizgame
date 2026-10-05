export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen min-w-full max-w-3xl py-32 px-16 bg-white dark:bg-[#0f0f14]">
      {children}
    </main>
  );
}
