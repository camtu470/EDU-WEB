import { useEffect, useRef, useState } from "react";
import { FaHeart, FaBars } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { Button } from "../../components/ui/Button";

export default function Navbar() {
  const [userName, setUserName] = useState<string | null>(null);
  const [favoriteCount, setFavoriteCount] = useState(0);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      const user = JSON.parse(userData);
      setUserName(user.name);
    }

    const loadFavorites = () => {
      const favorites = JSON.parse(
        localStorage.getItem("favoriteCourses") || "[]"
      );
      setFavoriteCount(favorites.length);
    };

    loadFavorites();

    const syncData = () => {
      const user = localStorage.getItem("user");
      setUserName(user ? JSON.parse(user).name : null);
      loadFavorites();
    };

    window.addEventListener("storage", syncData);
    window.addEventListener("favoriteChanged", loadFavorites);

    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("storage", syncData);
      window.removeEventListener("favoriteChanged", loadFavorites);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUserName(null);
    setShowDropdown(false);
    setShowMobileMenu(false);
    navigate("/");
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md px-6 md:px-10 py-4 flex justify-between items-center z-[60]">
      {/* Logo */}
      <a href="/" className="flex items-center gap-2">
        <img
          src="https://commercial.static.antoree.com/assets/images/logo_withtagline.svg"
          alt="Antoree"
          className="h-8 object-cover"
        />
      </a>

      {/* Hamburger menu button (mobile) */}
      <div className="md:hidden">
        <button
          onClick={() => setShowMobileMenu(!showMobileMenu)}
          className="text-2xl text-gray-700"
        >
          {showMobileMenu ? <IoClose /> : <FaBars />}
        </button>
      </div>

      {/* Main menu */}
      <ul
        className={`${
          showMobileMenu ? "flex" : "hidden"
        } md:flex flex-col md:flex-row md:items-center md:gap-6 absolute md:static top-full left-0 w-full md:w-4/12 md:justify-around bg-white md:bg-transparent shadow-md md:shadow-none z-100 rounded-b-xl text-gray-800 font-medium transition-all duration-300 ease-in-out`}
      >
        <li className="px-6 md:px-0 md:py-0">
          <button
            onClick={() => {
              navigate("/teachers");
              setShowMobileMenu(false);
            }}
            className="hover:text-black text-[#235d2a] font-medium text-sm md:text-base"
          >
            Giáo viên
          </button>
        </li>
        <li className="px-6  md:px-0 md:py-0">
          <button
            onClick={() => {
              navigate("/community");
              setShowMobileMenu(false);
            }}
            className="hover:text-[#235d2a] font-medium text-sm md:text-base"
          >
            Cộng đồng
          </button>
        </li>
        <li className="px-6  md:px-0 md:py-0">
          <button
            onClick={() => {
              navigate("/aboutus");
              setShowMobileMenu(false);
            }}
            className="hover:text-[#235d2a] font-medium text-sm md:text-base"
          >
            Về chúng tôi
          </button>
        </li>
        <li className="px-6  md:px-0 md:py-0">
          <button
            onClick={() => {
              navigate("/contact");
              setShowMobileMenu(false);
            }}
            className="hover:text-[#235d2a] font-medium text-sm md:text-base"
          >
            Liên hệ
          </button>
        </li>

        {userName ? (
          <>
            <li className="px-6 md:hidden">
              <button
                onClick={() => navigate("/favorites")}
                className="hover:text-[#235d2a] font-normal text-sm md:text-lg"
              >
                Khóa học yêu thích
              </button>
            </li>
            <li className="px-6 md:hidden">
              <button
                className="hover:text-[#235d2a] font-normal text-sm md:text-lg"
                onClick={() => navigate("/views")}
              >
                Lịch sử xem
              </button>
            </li>
            <li className="px-6 pb-4 md:hidden">
              <button
                onClick={handleLogout}
                className="text-red-600 text-sm md:text-lg"
              >
                Đăng xuất
              </button>
            </li>
          </>
        ) : (
          <>
            <li className="px-6 py-2 md:hidden">
              <button onClick={() => navigate("/register")}>Đăng ký</button>
            </li>
            <li className="px-6 py-2 md:hidden">
              <button onClick={() => navigate("/login")}>Đăng nhập</button>
            </li>
          </>
        )}
      </ul>

      {/* Right side (desktop) */}
      <div className="hidden md:flex items-center gap-6">
        {userName ? (
          <>
            {/* Dropdown từ tên */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="font-medium hover:text-black text-[#235d2a] text-base"
              >
                Xin chào, {userName} ▾
              </button>

              {showDropdown && (
                <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-md w-48 border z-100">
                  <button
                    onClick={() => {
                      navigate("/favorites");
                      setShowDropdown(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Khoá học yêu thích
                  </button>
                  <button
                    onClick={() => {
                      navigate("/views");
                      setShowDropdown(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Lịch sử xem
                  </button>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
                  >
                    Đăng xuất
                  </button>
                </div>
              )}
            </div>

            {/* Yêu thích */}
            <div className="relative">
              <button
                onClick={() => navigate("/favorites")}
                className="text-xl text-red-500"
              >
                <FaHeart className="text-2xl" />
              </button>
              {favoriteCount > 0 && (
                <span className="absolute -top-2 -right-3 text-white bg-red-500 text-xs font-bold px-1.5 py-0.5 rounded-full">
                  {favoriteCount}
                </span>
              )}
            </div>
          </>
        ) : (
          <>
            {/* <button
              onClick={() => navigate("/login")}
              className="bg-[#14B24C] text-white font-bold p-2 px-4 rounded"
            >
              Đăng nhập
            </button> */}
            <Button
              variant="primary"
              size="sm"
              onClick={() => navigate("/login")}
              className=" mx-auto"
            >
              Đăng nhập
            </Button>
          </>
        )}
      </div>
    </nav>
  );
}
