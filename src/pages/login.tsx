import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/Button";

export default function LoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    const validEmail = "abc@gmail.com";
    const validPassword = "123456";

    if (email === validEmail && password === validPassword) {
      const user = { name: "Nguyễn Văn A", email };
      localStorage.setItem("user", JSON.stringify(user));

      alert("Đăng nhập thành công!");
      navigate("/");
    } else {
      setError("Email hoặc mật khẩu không đúng!");
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 py-12 px-4">
      {/* FORM BÊN TRÁI */}
      <div className="w-full md:w-1/2 flex flex-col gap-4">
        <p className="font-bold text-4xl md:text-6xl text-color text-center">
          Chào mừng bạn !
        </p>
        <p className="text-sm text-center px-4 md:px-10 font-medium text-gray-600">
          Vui lòng đăng nhập để tiếp tục sử dụng các dịch vụ của chúng tôi.
        </p>
        <div className="flex flex-col text-sm text-gray-500 mx-auto gap-1">
          <p>Email : abc@gmail.com</p>
          <p>Mật khẩu : 123456</p>
        </div>
        <form onSubmit={handleLogin} className="flex flex-col gap-4 mt-6">
          <input
            type="email"
            placeholder="Nhập email của bạn"
            className="border border-gray-700 rounded-full p-3 px-6"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Nhập mật khẩu"
            className="border border-gray-700 rounded-full p-3 px-6"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <a
            href="#"
            className="ml-auto font-medium text-sm text-color hover:underline"
          >
            Quên mật khẩu?
          </a>
          {error && <p className="text-red-500 text-sm">{error}</p>}

          <Button
            variant="primary"
            size="lg"
            type="submit"
            className="w-full md:w-10/12 mx-auto mt-4"
          >
            Đăng nhập
          </Button>

          <p className="text-center text-sm">
            Chưa có tài khoản?{" "}
            <a href="#" className="font-semibold text-color  hover:underline">
              Đăng ký ngay
            </a>
          </p>
        </form>
      </div>

      {/* HÌNH ẢNH BÊN PHẢI */}
      <div className="w-full md:w-1/2">
        <img
          src="https://cdn-icons-png.flaticon.com/512/8662/8662284.png"
          alt="Hình minh họa đăng nhập"
          className="w-9/12 md:w-10/12 object-cover mx-auto"
        />
      </div>
    </div>
  );
}
