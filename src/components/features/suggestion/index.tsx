import { useState } from "react";

type Course = {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
};

export default function Suggestion() {
  const [suggestions, setSuggestions] = useState<Course[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSuggestClick = () => {
    setLoading(true);
    setSuggestions([]);
    setError(null); // reset lỗi trước đó

    setTimeout(() => {
      try {
        // Thử lấy từ localStorage
        const favorites: Course[] = JSON.parse(
          localStorage.getItem("favoriteCourses") || "[]"
        );
        const viewed: Course[] = JSON.parse(
          localStorage.getItem("viewedCourses") || "[]"
        );

        // Gộp, loại trùng ID, ưu tiên favorites
        const combined: { [key: number]: Course } = {};
        favorites.forEach((item) => {
          combined[item.id] = item;
        });
        viewed.forEach((item) => {
          if (!combined[item.id]) {
            combined[item.id] = item;
          }
        });

        const suggestionList = Object.values(combined).slice(0, 5); // lấy 5 gợi ý

        if (suggestionList.length === 0) {
          setError("Không tìm thấy gợi ý nào.");
        } else {
          setSuggestions(suggestionList);
        }
      } catch (err) {
        console.error("Lỗi khi lấy gợi ý:", err);
        setError("Không thể lấy gợi ý lúc này. Vui lòng thử lại sau.");
      } finally {
        setLoading(false);
      }
    }, 1000);
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto rounded-xl overflow-hidden shadow-2xl">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80')",
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-24 md:py-32 bg-gradient-to-b from-transparent via-black/50 to-black/80">
        <h1 className="text-3xl md:text-4xl font-extrabold text-white drop-shadow-lg mb-4 tracking-wide leading-tight">
          Gợi ý khóa học phù hợp với bạn
        </h1>

        <p className="text-sm md:text-base text-gray-200 mb-8 max-w-2xl mx-auto">
          Dựa trên các khóa học bạn đã xem hoặc yêu thích, chúng tôi đề xuất
          những khóa học phù hợp với bạn.
        </p>

        <div className="flex flex-col md:flex-row gap-4">
          <button
            onClick={handleSuggestClick}
            className="px-8 py-4 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white font-semibold rounded-full shadow-lg transform hover:scale-105 transition duration-300 ease-in-out text-lg"
          >
            {loading ? "Đang tải..." : "Gợi ý khóa học phù hợp"}
          </button>

          <a
            href="/courses"
            className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-gray-900 transition duration-300 ease-in-out text-lg"
          >
            Xem tất cả khóa học
          </a>
        </div>

        {/* Thông báo lỗi */}
        {error && (
          <p className="mt-6 text-red-300 bg-white/10 px-4 py-2 rounded shadow text-sm">
            ⚠ {error}
          </p>
        )}

        {/* Gợi ý hiển thị */}
        {suggestions.length > 0 && (
          <div className="mt-12 w-full max-w-3xl bg-white bg-opacity-90 backdrop-blur-md rounded-xl shadow p-6 text-left space-y-4">
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              Khóa học dành cho bạn:
            </h2>
            {suggestions.map((course) => (
              <div key={course.id} className="border-b pb-3 last:border-none">
                <div className="flex gap-2 items-center">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-20 h-20 rounded"
                  />
                  <div className="flex flex-col gap-1">
                    <h3 className="text-lg font-semibold text-[#235d2a]">
                      {course.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-4">
                      {course.description}
                    </p>
                    <p className="text-sm text-gray-600">
                      Giá :{" "}
                      <strong className="text-[#b42626]">
                        {course.price.toLocaleString()} VND
                      </strong>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
