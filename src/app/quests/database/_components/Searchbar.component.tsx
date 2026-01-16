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
        placeholder="Question's number"
        onChange={(e): void => handleChange(e)}
        max={415}
        min={1}
        className="w-100 lg:text-4xl text-3xl bg-gray-800 rounded-md p-2 placeholder:text-gray-300"
      />
      <pre>Questions count: {numOfQuestions}</pre>
    </div>
  );
}
