import { useEffect, useState } from "react";
import { IoIosPricetags } from "react-icons/io";
import { IoTime } from "react-icons/io5";
import { FaRecordVinyl, FaStar } from "react-icons/fa";
import type { CourseWithCategory } from "../components/features/courses/course.types";
import { courseApi } from "../api/courseApi";
import { Button } from "../components/ui/Button";
import { PlaceholdersAndVanishInput } from "../components/ui/placeholders-and-vanish-input";
import FavoriteToggle from "../components/ui/FavoriteToggle";
import CourseCard from "../components/ui/CourseCard";
import RegisterFormModal from "../components/ui/RegisterFormModal";
import CourseDetailModal from "../components/features/courses/[id]";

export default function CoursesPage() {
  const [courses, setCourses] = useState<CourseWithCategory[]>([]);
  const [selectedCourse, setSelectedCourse] =
    useState<CourseWithCategory | null>(null);
  const [minPrice, setMinPrice] = useState<number | "">("");
  const [maxPrice, setMaxPrice] = useState<number | "">("");
  const [searchTerm, setSearchTerm] = useState("");
  const [_favorites, setFavorites] = useState<CourseWithCategory[]>([]);
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    courseApi.getCoursesWithCategory().then(setCourses);
    const storedFavorites = localStorage.getItem("favoriteCourses");
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleSelectPriceRange = (min: number, max: number) => {
    setMinPrice(min);
    setMaxPrice(max);
  };

  const logCourseView = (course: CourseWithCategory) => {
    const history = JSON.parse(localStorage.getItem("courseHistory") || "[]");
    const updatedHistory = [
      course,
      ...history.filter((c: CourseWithCategory) => c.id !== course.id),
    ];
    localStorage.setItem(
      "courseHistory",
      JSON.stringify(updatedHistory.slice(0, 10))
    );
  };

  const filteredCourses = courses.filter((course) => {
    const matchesKeyword =
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.fullDescription.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPrice =
      (minPrice === "" || course.price >= minPrice) &&
      (maxPrice === "" || course.price <= maxPrice);
    return matchesKeyword && matchesPrice;
  });

  const totalPages = Math.ceil(filteredCourses.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedCourses = filteredCourses.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const placeholders = [
    "TOEIC cấp tốc",
    "Tiếng anh cho trẻ 6 tuổi",
    "Tiếng Anh Giao Tiếp Cơ Bản",
    "Toán Tư Duy Lớp 6",
  ];

  const tutors = [
    {
      id: 1,
      name: "John Smith",
      country: "Mỹ",
      avatar:
        "https://i.pinimg.com/736x/38/b7/fe/38b7fe455b99f45f9fcb8f47b824da5c.jpg",
      rating: 5,
      specialties: [
        "Giao tiếp tiếng Anh",
        "TOEIC luyện đề nâng cao",
        "Phát âm chuẩn Mỹ",
      ],
      reviews: 47,
    },
    {
      id: 2,
      name: "Anna Lee",
      country: "Canada",
      avatar:
        "https://i.pinimg.com/736x/a8/e5/60/a8e56020b5ab78e34affedf84dcdbc5f.jpg",
      rating: 4,
      specialties: ["IELTS Speaking", "Phát triển từ vựng", "Luyện nghe"],
      reviews: 28,
    },
    {
      id: 3,
      name: "David Tran",
      country: "Việt Nam",
      avatar:
        "https://i.pinimg.com/1200x/50/cb/cf/50cbcf0247865d6967c746311b84ce7b.jpg",
      rating: 5,
      specialties: ["Ngữ pháp căn bản", "Giao tiếp hàng ngày", "TOEFL"],
      reviews: 19,
    },
    {
      id: 4,
      name: "Maria Gonzales",
      country: "Mexico",
      avatar:
        "https://i.pinimg.com/736x/25/33/8f/25338f488af2c45912c15ebab325e363.jpg",
      rating: 4,
      specialties: ["Viết luận học thuật", "Giao tiếp công việc", "Nghe nói"],
      reviews: 33,
    },
    {
      id: 5,
      name: "Lee Min Ho",
      country: "Hàn Quốc",
      avatar:
        "https://i.pinimg.com/736x/a4/1a/97/a41a97e76816e399290c37341a0f4c58.jpg",
      rating: 5,
      specialties: [
        "Phỏng vấn xin việc",
        "Tiếng Anh cho công nghệ",
        "Giao tiếp",
      ],
      reviews: 51,
    },
  ];
  return (
    <div>
      <div className="flex flex-col-reverse md:flex-row-reverse pt-2">
        {/* Tutor Section */}
        <div className="hidden md:flex w-full md:w-3/12 flex-col gap-10 bg-[#235d2a] p-6">
          {tutors.map((tutor) => (
            <div
              key={tutor.id}
              className="flex flex-col gap-2 border rounded-lg p-4 shadow bg-white"
            >
              <div className="flex gap-2 items-center border-b pb-2">
                <img
                  src={tutor.avatar}
                  alt={tutor.name}
                  className="w-24 h-24 rounded-full object-cover border-[6px] border-gray-100"
                />
                <div className="flex flex-col">
                  <p className="font-medium text-xl">{tutor.name}</p>
                  <p className="text-sm text-gray-600">
                    Quốc gia : {tutor.country}
                  </p>
                  <div className="flex gap-1 mt-2 text-[#F6DF0E]">
                    {Array.from({ length: tutor.rating }).map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <p className="font-medium">Chuyên môn</p>
                <ul className="text-sm list-disc pl-6">
                  {tutor.specialties.map((s, i) => (
                    <li key={i}>{s}</li>
                  ))}
                </ul>
              </div>

              <a
                href="#"
                className="italic text-sm text-gray-600 font-medium hover:text-[#235d2a] hover:font-bold"
              >
                {tutor.reviews} Nhận xét
              </a>

              <Button
                variant="secondary"
                size="md"
                className="w-10/12 mx-auto mt-2"
              >
                Xem chi tiết
              </Button>
            </div>
          ))}
        </div>

        {/* Main Course Section */}
        <div className="w-full md:w-9/12 flex flex-col gap-10 p-6">
          {/* Search and Price Filter */}
          <div className="flex flex-col md:flex-row gap-3 lg:gap-6">
            <div className="w-full lg:w-1/2 flex flex-col gap-2">
              <p className="font-medium text-sm lg:text-lg text-color pl-0 lg:pl-4">
                Tìm kiếm khóa học
              </p>
              <PlaceholdersAndVanishInput
                placeholders={placeholders}
                onChange={handleChange}
                onSubmit={onSubmit}
              />
            </div>

            <div className="w-full lg:w-1/2 flex flex-col gap-2">
              <p className="font-medium text-sm lg:text-lg text-color">
                Khoảng giá
              </p>
              <div className="flex gap-2 items-center">
                <input
                  type="number"
                  placeholder="Tối thiểu"
                  value={minPrice}
                  onChange={(e) => setMinPrice(Number(e.target.value))}
                  className="rounded p-2 border w-1/2 text-sm lg:text-base"
                />
                <p>-</p>
                <input
                  type="number"
                  placeholder="Tối đa"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="rounded p-2 border w-1/2 text-sm lg:text-base"
                />
              </div>
              <div className="flex gap-2 lg:gap-4 mt-2">
                <p
                  onClick={() => handleSelectPriceRange(0, 500000)}
                  className="text-xs lg:text-lg p-2 px-4 lg:px-6 rounded bg-gray-200 text-black hover:bg-white hover:text-[#FD4917] hover:border hover:border-[#FD4917] transition-all duration-300 ease-in-out cursor-pointer"
                >
                  0 - 500k
                </p>
                <p
                  onClick={() => handleSelectPriceRange(500000, 1000000)}
                  className="text-xs lg:text-lg p-2 px-4 lg:px-6 rounded bg-gray-200 text-black hover:bg-white hover:text-[#FD4917] hover:border hover:border-[#FD4917] transition-all duration-300 ease-in-out cursor-pointer"
                >
                  500k - 1 triệu
                </p>
                <p
                  onClick={() => handleSelectPriceRange(1000000, 9999999)}
                  className="text-xs lg:text-lg p-2 px-4 lg:px-6 rounded bg-gray-200 text-black hover:bg-white hover:text-[#FD4917] hover:border hover:border-[#FD4917] transition-all duration-300 ease-in-out cursor-pointer"
                >
                  1 triệu - x triệu
                </p>
              </div>
            </div>
          </div>

          {/* 👉 Desktop/Tablet view: full course info */}
          <div className="hidden md:grid w-full grid-cols-1 gap-6">
            {paginatedCourses.map((course) => (
              <div
                key={course.id}
                className="flex flex-col md:flex-row gap-6 border rounded-2xl shadow p-6 bg-white hover:shadow-lg transition cursor-pointer"
              >
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full md:w-4/12 object-cover rounded-xl"
                />
                <div className="w-full md:w-8/12 flex flex-col gap-2">
                  <div className="flex justify-between items-center">
                    <p className="text-sm text-gray-700 flex gap-1 items-center italic">
                      <IoIosPricetags className="text-orange-600" />
                      {course.category?.title || "Chưa xác định"}
                    </p>
                    <FavoriteToggle course={course} />
                  </div>
                  <h2 className="capitalize text-color font-bold text-3xl">
                    {course.title}
                  </h2>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {course.fullDescription}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 items-start mt-2 border-b pb-6">
                    <div className="w-full sm:w-1/2 flex flex-col gap-2">
                      <p className="font-medium text-color text-sm">
                        Kiến thức
                      </p>
                      <ul className="list-disc list-inside text-sm text-gray-600">
                        {course.learningContent.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="w-full sm:w-1/2 flex flex-col gap-2">
                      <p className="font-medium text-color text-sm">Lộ trình</p>
                      <ul className="list-disc list-inside text-sm text-gray-600">
                        {course.curriculum.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3 border-b pb-6 mt-3">
                    <p className="p-2 px-4 bg-[#FFF1ED] text-xs text-[#FD6A40] rounded-2xl flex items-center gap-1">
                      <IoTime /> {course.duration}
                    </p>
                    <p className="p-2 px-4 bg-[#E2FFF2] text-xs text-[#1DBF73] rounded-2xl flex items-center gap-1">
                      <FaRecordVinyl /> {course.mode}
                    </p>
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
                  <div className="flex flex-col sm:flex-row sm:justify-between gap-4 py-4">
                    <p className="text-[#FD4917] text-xl sm:text-2xl font-medium">
                      Giá:{" "}
                      <strong className="text-4xl sm:text-5xl">
                        {course.price.toLocaleString()}
                        <sup className="text-sm ml-1 align-super">VND</sup>
                      </strong>
                    </p>
                    <Button
                      variant="secondary"
                      size="lg"
                      className="w-full sm:w-4/12"
                      onClick={() => {
                        setSelectedCourse(course);
                        logCourseView(course);
                        if (window.innerWidth >= 768) {
                          setShowRegisterForm(true);
                        }
                      }}
                    >
                      Đăng kí ngay
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 👉 Mobile view: CourseCard */}
          <div className="block md:hidden space-y-6">
            {filteredCourses.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                onViewDetail={(c) => {
                  setSelectedCourse(c);
                  logCourseView(c);
                }}
              />
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-2 lg:mt-6 gap-2 flex-wrap">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`px-3 py-1 lg:px-4 lg:py-2 border rounded-full ${
                      page === currentPage
                        ? "bg-[#FD4917] text-white font-bold"
                        : "bg-white text-[#FD4917] border-[#FD4917]"
                    } hover:bg-[#FD4917] hover:text-white transition-all`}
                  >
                    {page}
                  </button>
                )
              )}
            </div>
          )}
        </div>
        {selectedCourse && (
          <CourseDetailModal
            course={selectedCourse}
            onClose={() => setSelectedCourse(null)}
          />
        )}
        {/* 👉 Register Form Modal */}
        {showRegisterForm && selectedCourse && (
          <RegisterFormModal
            courseTitle={selectedCourse.title}
            onClose={() => setShowRegisterForm(false)}
          />
        )}
      </div>
    </div>
  );
}
