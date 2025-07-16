import { FaHeart } from "react-icons/fa";
import { useEffect, useState } from "react";
import type { CourseWithCategory } from "../features/courses/course.types";

interface Props {
  course: CourseWithCategory;
}

export default function FavoriteToggle({ course }: Props) {
  const [favorites, setFavorites] = useState<CourseWithCategory[]>([]);
  const [isFavorited, setIsFavorited] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("favoriteCourses");
    if (stored) {
      const parsed: CourseWithCategory[] = JSON.parse(stored);
      setFavorites(parsed);
      setIsFavorited(parsed.some((c) => c.id === course.id));
    }
  }, [course.id]);

  const toggleFavorite = () => {
    const storedUser = localStorage.getItem("user");
    if (!storedUser) {
      alert("Bạn cần đăng nhập để sử dụng chức năng yêu thích!");
      return;
    }

    let updated: CourseWithCategory[];
    if (isFavorited) {
      updated = favorites.filter((c) => c.id !== course.id);
      alert("Đã xóa khỏi danh sách yêu thích!");
    } else {
      updated = [...favorites, course];
      alert("Đã thêm vào danh sách yêu thích!");
    }

    localStorage.setItem("favoriteCourses", JSON.stringify(updated));
    setFavorites(updated);
    setIsFavorited(!isFavorited);

    // 🔔 Gửi sự kiện tùy chỉnh
    window.dispatchEvent(new Event("favoriteChanged"));
  };

  return (
    <button
      onClick={toggleFavorite}
      title={isFavorited ? "Bỏ yêu thích" : "Thêm yêu thích"}
    >
      <FaHeart
        className={`text-sm md:text-xl transition-colors duration-300 ${
          isFavorited ? "text-red-500" : "text-gray-300"
        }`}
      />
    </button>
  );
}
