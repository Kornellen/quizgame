export default function Button({
  children,
  onClick,
  type = "button",
  className,
}: {
  children: string;
  onClick?: () => void;
  type?: Pick<HTMLButtonElement, "type">["type"];
  className?: string;
}) {
  return (
    <button
      className={`${className} w-full h-15 m-4 bg-[#34325a] hover:bg-[#252342] text-2xl p-3 rounded-sm`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
}
