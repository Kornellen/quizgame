export default function SkeletonQuestion() {
  return (
    <div className="animate-pulse duration-300">
      <p className="lg:text-3xl text-2xl font-bold text-white bg-gray-800 w-full"></p>
      <div className="border-gray-400 lg:text-xl text-lg border-2 lg:p-3 p-1 grid grid-cols-1 grid-rows-3 lg:mt-2 mt-1 rounded-sm">
        <div className="col-span-1 row-span-1 text-left lg:p-3 p-2 lg:mt-2 mt-1 rounded-md bg-gray-800"></div>
        <div className="col-span-1 row-span-1 text-left lg:p-3 p-2 lg:mt-2 mt-1 rounded-md bg-gray-800"></div>
        <div className="col-span-1 row-span-1 text-left lg:p-3 p-2 lg:mt-2 mt-1 rounded-md bg-gray-800"></div>
      </div>
    </div>
  );
}
