"use client";

import { useEffect, useState } from "react";
import { MdArrowRightAlt } from "react-icons/md";
import { Link } from "react-router-dom";
import { courseApi } from "../../../api/courseApi";
import type { CourseWithCategory } from "./course.types";
import CourseDetailModal from "../../features/courses/[id]";
import CourseCard from "../../ui/CourseCard";

export default function Courses() {
  const [courses, setCourses] = useState<CourseWithCategory[]>([]);
  const [selectedCourse, setSelectedCourse] =
    useState<CourseWithCategory | null>(null);

  useEffect(() => {
    courseApi.getCoursesWithCategory().then(setCourses);
  }, []);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between">
        <h1 className="text-xl md:text-2xl font-bold">Courses</h1>
        <Link
          to="/courses"
          className="flex gap-1 items-center border px-3 py-1 rounded-md text-sm hover:bg-gray-100"
        >
          Xem thêm <MdArrowRightAlt className="text-sm md:text-2xl" />
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 ">
        {courses.slice(0, 6).map((course) => (
          <CourseCard
            key={course.id}
            course={course}
            onViewDetail={setSelectedCourse}
          />
        ))}
      </div>

      {selectedCourse && (
        <CourseDetailModal
          course={selectedCourse}
          onClose={() => setSelectedCourse(null)}
        />
      )}
    </div>
  );
}
