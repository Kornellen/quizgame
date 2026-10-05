export default function Searchbar({
  numOfQuestions,
  handleChange,
}: {
  numOfQuestions: number;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="text-center">
      <input
        type="number"
        placeholder="Numer pytania"
        onChange={(e): void => handleChange(e)}
        max={415}
        min={1}
        className="w-100 lg:text-4xl text-3xl bg-[#22252eaa] rounded-md p-3 placeholder:text-gray-300"
      />
      <pre>Liczba pytań w bazie: {numOfQuestions}</pre>
    </div>
  );
}
