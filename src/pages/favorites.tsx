import { useEffect, useState } from "react";
import type { CourseWithCategory } from "../components/features/courses/course.types";
import CourseCard from "../components/ui/CourseCard";
import CourseDetailModal from "../components/features/courses/[id]";
import { Button } from "../components/ui/Button";
import { useNavigate } from "react-router-dom";
export default function FavoritesPage() {
  const navigate = useNavigate();
  const [favorites, setFavorites] = useState<CourseWithCategory[]>([]);
  const [selectedCourse, setSelectedCourse] =
    useState<CourseWithCategory | null>(null);

  // Load danh sách yêu thích từ localStorage
  useEffect(() => {
    const stored = localStorage.getItem("favoriteCourses");
    if (stored) {
      setFavorites(JSON.parse(stored));
    }
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-6">Khoá học yêu thích</h1>

      {favorites.length === 0 ? (
        <div className="w-1/2 mx-auto  flex flex-col gap-4">
          <img
            src="https://i.pinimg.com/736x/7f/de/9c/7fde9c7872cca39f2091789fae56689f.jpg"
            alt=""
            className="w-1/2 mx-auto"
          />
          <p className="text-center">Bạn chưa chọn thích khóa học nào</p>
          <Button
            variant="secondary"
            size="lg"
            className="w-4/12 mx-auto"
            onClick={() => navigate("/")}
          >
            Khám phá ngay
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {favorites.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              onViewDetail={setSelectedCourse}
            />
          ))}
        </div>
      )}

      {/* Modal chi tiết khoá học */}
      {selectedCourse && (
        <CourseDetailModal
          course={selectedCourse}
          onClose={() => setSelectedCourse(null)}
        />
      )}
    </div>
  );
}
