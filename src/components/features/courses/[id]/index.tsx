import { useState } from "react";
import { FaRecordVinyl } from "react-icons/fa6";
import { IoTime } from "react-icons/io5";
import { IoIosPricetags } from "react-icons/io";
import { ImCancelCircle } from "react-icons/im";
import { Button } from "../../../ui/Button";

import type { CourseWithCategory } from "../course.types";
import RegisterFormModal from "../../../ui/RegisterFormModal";

export default function CourseDetailModal({
  course,
  onClose,
}: {
  course: CourseWithCategory;
  onClose: () => void;
}) {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-[60] px-4">
        <div className="bg-white rounded-xl w-full max-w-2xl md:max-w-4xl p-4 md:p-8 relative overflow-y-auto max-h-[90vh]">
          <button
            className="absolute top-2 right-2 md:top-4 md:right-4 text-gray-500 hover:text-red-500"
            onClick={onClose}
          >
            <ImCancelCircle className="text-xl md:text-3xl" />
          </button>
          <div className="flex flex-col gap-2 md:gap-4 mt-4 md:mt-0">
            {/* Header with image and title */}
            <div className="flex flex-col md:flex-row gap-4 md:gap-6">
              <img
                src={course.image}
                alt={course.title}
                className="w-full md:w-4/12 h-48 md:h-[130px] object-cover rounded-xl"
              />
              <div className="flex flex-col gap-2 w-full">
                <p className="text-xs md:text-sm text-gray-700 flex gap-1 items-center italic">
                  <IoIosPricetags className="text-orange-600" />
                  {course.category?.title || "Chưa xác định"}
                </p>
                <h2 className="capitalize text-color font-bold text-base md:text-3xl">
                  {course.title}
                </h2>
                <p className="text-xs md:text-sm text-gray-600 line-clamp-4">
                  {course.fullDescription}
                </p>
              </div>
            </div>

            {/* Nội dung học và lộ trình */}
            <div className="flex flex-col md:flex-row gap-2 md:gap-4 border-b pb-4">
              <div className="w-full md:w-1/2 flex flex-col gap-2">
                <p className="font-medium text-color text-sm">Kiến thức</p>
                <ul className="list-disc list-inside text-xs md:text-sm text-gray-600">
                  {course.learningContent.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="w-full md:w-1/2 flex flex-col gap-2">
                <p className="font-medium text-color text-sm">Lộ trình</p>
                <ul className="list-disc list-inside text-xs md:text-sm text-gray-600">
                  {course.curriculum.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Thông tin phụ */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 border-b pb-4 mt-2 md:mt-0">
              <div className="flex gap-3 flex-wrap">
                <p className="px-4 py-1 bg-[#FFF1ED] text-xs text-[#FD6A40] rounded-2xl flex items-center gap-1">
                  <IoTime /> {course.duration}
                </p>
                <p className="px-4 py-2 bg-[#E2FFF2] text-xs text-[#1DBF73] rounded-2xl flex items-center gap-1">
                  <FaRecordVinyl /> {course.mode}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 sm:mt-0">
                {course.voice.map((v, index) => {
                  const bgColors = [
                    "bg-[#FFF1ED] text-[#FD6A40]",
                    "bg-[#E2FFF2] text-[#1DBF73]",
                    "bg-blue-100 text-blue-800",
                    "bg-purple-100 text-purple-800",
                    "bg-pink-100 text-pink-800",
                    "bg-yellow-100 text-yellow-800",
                    "bg-red-100 text-red-800",
                  ];
                  const colorClass = bgColors[index % bgColors.length];

                  return (
                    <div
                      key={index}
                      className={`p-2 px-4 text-xs rounded-full ${colorClass}`}
                    >
                      {v}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Giá + Nút đăng ký */}
            <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <p className="text-[#FD4917] text-xl md:text-2xl font-medium ">
                Giá:{" "}
                <strong className="text-3xl md:text-5xl">
                  {course.price.toLocaleString()}
                  <sup className="text-sm ml-1 align-super">VND</sup>
                </strong>
              </p>

              <Button
                variant="secondary"
                size="md"
                onClick={() => setShowForm(true)}
                className="w-10/12 mx-auto md:mx-0 md:w-5/12"
              >
                Đăng ký ngay
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Hiển thị form đăng ký */}
      {showForm && (
        <RegisterFormModal
          courseTitle={course.title}
          onClose={() => setShowForm(false)}
        />
      )}
    </>
  );
}
