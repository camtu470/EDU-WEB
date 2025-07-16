import { IoIosPricetags } from "react-icons/io";
import { IoTime } from "react-icons/io5";
import { FaRecordVinyl } from "react-icons/fa";
import { Button } from "../ui/Button";
import type { CourseWithCategory } from "../features/courses/course.types";
import FavoriteToggle from "./FavoriteToggle";

interface Props {
  course: CourseWithCategory;
  onViewDetail: (course: CourseWithCategory) => void;
}

export default function CourseCard({ course, onViewDetail }: Props) {
  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-8 border rounded-2xl shadow p-4 md:p-6 bg-white hover:shadow-lg transition cursor-pointer">
      {/* Hình ảnh khóa học */}
      <img
        src={course.image}
        alt={course.title}
        className="w-full md:w-4/12 h-48 md:h-auto object-cover rounded-xl"
      />

      {/* Nội dung */}
      <div className="w-full md:w-8/12 flex flex-col gap-2">
        <div className="flex justify-between items-start gap-2">
          <div className="text-sm text-gray-600 italic flex items-center gap-1">
            <IoIosPricetags className="text-orange-500" />
            {course.category?.title ?? "Không rõ danh mục"}
          </div>

          <FavoriteToggle course={course} />
        </div>

        <h2 className="capitalize font-semibold text-sm md:text-lg">
          {course.title}
        </h2>
        <p className="text-xs md:text-sm text-gray-500 line-clamp-2">
          {course.description}
        </p>

        {/* Thông tin thêm */}
        <div className="flex flex-wrap gap-3 border-b pb-4 pt-2">
          <p className="p-2 px-4 bg-[#FFF1ED] text-xs text-[#FD6A40] rounded-2xl flex items-center gap-1">
            <IoTime /> {course.duration}
          </p>
          <p className="p-2 px-4 bg-[#E2FFF2] text-xs text-[#1DBF73] rounded-2xl flex items-center gap-1">
            <FaRecordVinyl /> {course.mode}
          </p>
        </div>

        {/* Giá + nút */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 py-2">
          <p className="text-[#FD4917] text-lg font-medium">
            Giá:{" "}
            <strong className="text-2xl md:text-3xl">
              {course.price.toLocaleString()}
              <sup className="text-sm ml-1">VND</sup>
            </strong>
          </p>

          <Button
            variant="basic"
            size="sm"
            className="w-full sm:w-5/12 md:w-5/12"
            onClick={() => {
              const stored = localStorage.getItem("viewedProducts");
              const viewed: CourseWithCategory[] = stored
                ? JSON.parse(stored)
                : [];

              const alreadyViewed = viewed.some((c) => c.id === course.id);
              if (!alreadyViewed) {
                const updated = [course, ...viewed].slice(0, 10);
                localStorage.setItem("viewedProducts", JSON.stringify(updated));
              }

              onViewDetail(course);
            }}
          >
            Xem chi tiết
          </Button>
        </div>
      </div>
    </div>
  );
}
