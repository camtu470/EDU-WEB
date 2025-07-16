export default function CourseSkeleton() {
  return (
    <div className="animate-pulse flex flex-col md:flex-row gap-4 md:gap-8 border rounded-2xl shadow p-4 md:p-6 bg-white">
      <div className="w-full md:w-4/12 h-48 bg-gray-200 rounded-xl" />
      <div className="w-full md:w-8/12 flex flex-col gap-3">
        <div className="h-4 w-1/3 bg-gray-200 rounded" />
        <div className="h-6 w-3/4 bg-gray-300 rounded" />
        <div className="h-4 w-full bg-gray-200 rounded" />
        <div className="h-4 w-11/12 bg-gray-200 rounded" />
        <div className="flex gap-4 mt-2">
          <div className="h-6 w-20 bg-gray-300 rounded-full" />
          <div className="h-6 w-24 bg-gray-300 rounded-full" />
        </div>
        <div className="flex justify-between items-center pt-4">
          <div className="h-6 w-1/3 bg-gray-300 rounded" />
          <div className="h-10 w-32 bg-gray-300 rounded" />
        </div>
      </div>
    </div>
  );
}
