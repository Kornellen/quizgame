import SkeletonQuestion from "../_components/SkeletonQuestion";

export default function Loading() {
  const temp = new Array(40).fill(1, 0, 40);
  return (
    <>
      <h1 className="text-4xl text-center">
        We&apos;re preparing your exam. Please wait...
      </h1>
      {temp.map((_, idx) => (
        <SkeletonQuestion key={idx} />
      ))}
    </>
  );
}
