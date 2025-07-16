import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "../../ui/Button";
import { PiApplePodcastsLogo, PiCodesandboxLogoLight } from "react-icons/pi";
import { BiLogoGitlab, BiLogoGraphql } from "react-icons/bi";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";

import type { Category } from "./category.types";
import { useNavigate } from "react-router-dom";
// Map icon string → icon component
const iconMap: Record<string, React.ReactNode> = {
  gitlab: <BiLogoGitlab />,
  graphql: <BiLogoGraphql />,
  podcasts: <PiApplePodcastsLogo />,
  codesandbox: <PiCodesandboxLogoLight />,
};

export default function Categories() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [startIndex, setStartIndex] = useState(0);
  const [maxDisplay, setMaxDisplay] = useState(5);

  const navigate = useNavigate();


  useEffect(() => {
    axios
      .get("http://localhost:3001/categories")
      .then((res) => {
        setCategories(res.data);
        setTimeout(() => setLoading(false), 2000);
      })
      .catch((err) => {
        console.error("Lỗi khi lấy danh mục:", err);
        setLoading(false);
      });
  }, []);
  useEffect(() => {
    const updateMaxDisplay = () => {
      const width = window.innerWidth;
      if (width < 640) setMaxDisplay(1); //moblie
      else if (width < 1024) setMaxDisplay(3); // tablet
      else setMaxDisplay(5); // desktop
    };

    updateMaxDisplay();
    window.addEventListener("resize", updateMaxDisplay);
    return () => window.removeEventListener("resize", updateMaxDisplay);
  }, []);

  // Navigation
  const handleNext = () => {
    if (startIndex + maxDisplay < categories.length) {
      setStartIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex((prev) => prev - 1);
    }
  };

  const visibleCategories = categories.slice(
    startIndex,
    startIndex + maxDisplay
  );

  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <h1 className="text-xl md:text-3xl">Danh mục</h1>
        <div className="flex gap-2 text-3xl">
          <button
            onClick={handlePrev}
            disabled={startIndex === 0}
            className="h-6 w-6 md:h-10 md:w-10  rounded-full border flex items-center justify-center hover:bg-gray-100 disabled:opacity-50"
          >
            <GrFormPrevious />
          </button>
          <button
            onClick={handleNext}
            disabled={startIndex + maxDisplay >= categories.length}
            className="h-6 w-6 md:h-10 md:w-10 rounded-full border flex items-center justify-center hover:bg-gray-100 disabled:opacity-50"
          >
            <GrFormNext />
          </button>
        </div>
      </div>

      {loading ? (
        <div className="flex items-center justify-center">
          <svg
            className="animate-spin h-5 w-5 text-color mr-2"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            ></path>
          </svg>
          <p className="text-color text-sm">Đang tải dữ liệu...</p>
        </div>
      ) : (
        <div
          className={`grid gap-6 ${
            maxDisplay === 1
              ? "grid-cols-1"
              : maxDisplay === 3
              ? "grid-cols-1 sm:grid-cols-3"
              : "grid-cols-1 sm:grid-cols-3 lg:grid-cols-5"
          }`}
        >
          {visibleCategories.map((cat) => (
            <div
              key={cat.id}
              className="flex flex-col gap-3 p-6 border rounded-2xl shadow"
            >
              <div className="border-b pb-4 flex justify-center text-5xl text-color">
                {iconMap[cat.icon] || <div>❓</div>}
              </div>
              <div className="flex flex-col gap-1 pb-1">
                <p className="font-bold text-xl capitalize text-color">
                  {cat.title}
                </p>
                <p className="font-thin text-sm">
                  {cat.totalCourses} Khóa có sẵn
                </p>
              </div>
              <Button
                variant="basic"
                size="sm"
                className="w-9/12 mx-auto mt-auto"
                onClick={() => navigate(`/courses?categoryId=${cat.id}`)}
              >
                Xem thêm
              </Button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
