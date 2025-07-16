"use client";

import React from "react";
import { cn } from "../../../lib/utils"; // hoặc dùng `clsx`

export default function Blog() {
  const items = [
    {
      title: "Bình minh của sự sáng tạo",
      description: "Khám phá sự ra đời của những ý tưởng và phát minh đột phá.",
      image:
        "https://i.pinimg.com/1200x/de/99/65/de99654ff0c43b3c4e8f99ffae8ec418.jpg",
    },
    {
      title: "Cuộc cách mạng số",
      description: "Tìm hiểu sức mạnh chuyển đổi của công nghệ hiện đại.",
      image:
        "https://i.pinimg.com/1200x/12/a4/c7/12a4c75a77bcf361d81e52c45a232c2a.jpg",
    },
    {
      title: "Nghệ thuật thiết kế",
      description: "Khám phá vẻ đẹp của thiết kế tinh tế và chức năng.",
      image:
        "https://i.pinimg.com/736x/de/7e/e7/de7ee7c6d16a5957d1aeedc9cf4b80b8.jpg",
    },
    {
      title: "Sức mạnh giao tiếp",
      description:
        "Hiểu rõ tầm quan trọng của giao tiếp hiệu quả trong cuộc sống.",
      image:
        "https://i.pinimg.com/1200x/eb/2f/0e/eb2f0e79249321ded23bf1e660349b58.jpg",
    },
    {
      title: "Hành trình tri thức",
      description: "Cùng theo đuổi sự hiểu biết và khám phá thế giới.",
      image:
        "https://i.pinimg.com/736x/64/d9/8f/64d98f09303942b6ce122003ae20e8fa.jpg",
    },
  ];

  return (
    <BentoGrid className="w-11/12 mx-auto py-6">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          image={item.image}
          className={i === 4 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}

// ===== Grid Container Component =====
const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div className="flex flex-col">
      <h2 className="text-2xl font-bold mb-4">Tin tức nổi bật</h2>
      <div
        className={cn(
          "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
};

const BentoGridItem = ({
  className,
  title,
  description,
  image,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  image?: string;
}) => {
  return (
    <div
      className={cn(
        "group/bento shadow-input flex flex-col justify-between space-y-2 rounded-xl border border-neutral-200 bg-white p-4 md:p-6 transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none",
        className
      )}
    >
      {image && (
        <img
          src={image}
          alt={typeof title === "string" ? title : ""}
          className="w-full h-40 md:h-48 object-cover rounded-lg"
        />
      )}
      <div className="transition duration-200 group-hover/bento:translate-x-2">
        <div className="mt-2 mb-2 text-base md:text-lg font-semibold text-neutral-800 dark:text-neutral-200">
          {title}
        </div>
        <div className="text-sm text-neutral-600 dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};
