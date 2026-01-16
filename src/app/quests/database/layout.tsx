export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen min-w-full p-2 lg:p-10 bg-white dark:bg-gray-950">
      {children}
    </main>
  );
}
