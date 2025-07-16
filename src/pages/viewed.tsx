// ViewedCoursesPage.tsx
import { useEffect, useState } from "react";
import type { CourseWithCategory } from "../components/features/courses/course.types";
import CourseCard from "../components/ui/CourseCard";

export default function ViewedCoursesPage() {
  const [viewed, setViewed] = useState<CourseWithCategory[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("viewedProducts");
    if (stored) setViewed(JSON.parse(stored));
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-6">Khoá học đã xem gần đây</h1>
      {viewed.length === 0 ? (
        <p>Chưa có khoá học nào được xem.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {viewed.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              onViewDetail={() => {}}
            />
          ))}
        </div>
      )}
    </div>
  );
}
