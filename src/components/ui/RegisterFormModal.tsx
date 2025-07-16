// components/RegisterFormModal.tsx
import { useState } from "react";
import { ImCancelCircle } from "react-icons/im";
import { Button } from "../ui/Button";

export default function RegisterFormModal({
  courseTitle,
  onClose,
}: {
  courseTitle: string;
  onClose: () => void;
}) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      `Bạn đã đăng ký khóa học: ${courseTitle}\nTên: ${name}\nEmail: ${email}`
    );
    onClose();
  };

  return (
    <div className="px-4 fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-[60]">
      <div className="bg-white rounded-xl w-[500px] p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
        >
          <ImCancelCircle className="text-2xl" />
        </button>

        <h2 className="text-2xl font-bold mb-4 text-center">
          Đăng kí khóa học
        </h2>
        <img
          src="https://i.pinimg.com/736x/33/5a/87/335a87bcaec36975ce838d03ed82df29.jpg"
          alt=""
          className="w-20 h-20 lg:w-32 lg:h-32 mx-auto"
        />
        <input
          type="text"
          readOnly
          value={"Khóa học : " + courseTitle}
          className="w-full p-2 text-md lg:text-base bg-gray-200 text-gray-700 outline-none border rounded mb-4"
        />
        {/* <p className="text-sm text-center mb-4 text-gray-600 italic">
          {courseTitle}
        </p> */}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Họ và tên"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="p-2 border rounded"
          />
          <input
            type="number"
            placeholder="Số điện thoại"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            className="p-2 border rounded"
          />
          <input
            type="email"
            placeholder="Email của bạn"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="p-2 border rounded"
          />
          <textarea
            placeholder="Ghi chú (không bắt buộc)"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            rows={3}
            className="p-2 border rounded"
          />

          <Button type="submit" variant="secondary" size="lg">
            Gửi đăng kí
          </Button>
        </form>
      </div>
    </div>
  );
}
