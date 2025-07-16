// "use client";

// import { AnimatedTooltip } from "../../components/ui/animated-tooltip";
// import { Button } from "../../components/ui/Button";
// import { motion } from "framer-motion";

// export default function Header() {
//   const people = [
//     {
//       id: 1,
//       name: "John Doe",
//       designation: "Software Engineer",
//       image:
//         "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
//     },
//     {
//       id: 2,
//       name: "Robert Johnson",
//       designation: "Product Manager",
//       image:
//         "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     {
//       id: 3,
//       name: "Jane Smith",
//       designation: "Data Scientist",
//       image:
//         "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//   {
//     id: 4,
//     name: "John Doe",
//     designation: "Software Engineer",
//     image:
//       "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
//   },
//   {
//     id: 5,
//     name: "Robert Johnson",
//     designation: "Product Manager",
//     image:
//       "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//   },
//   {
//     id: 6,
//     name: "Jane Smith",
//     designation: "Data Scientist",
//     image:
//       "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//   },
// ];

// const animatedImagesLeft = [
//   {
//     src: "https://i.pinimg.com/1200x/fa/e1/90/fae1901e016f26ef04ee7a7bd629f460.jpg",
//     className: "w-24 h-24 top-[-60px] right-[40px]",
//     from: { x: -100, opacity: 0 },
//   },
//   {
//     src: "https://i.pinimg.com/736x/23/fe/df/23fedfc33d461bdfe6b3344390b491fd.jpg",
//     className: "w-24 h-24 top-[5px] left-[60px]",
//     from: { y: -100, opacity: 0 },
//   },
//   {
//     src: "https://i.pinimg.com/1200x/1a/5f/f2/1a5ff23647e263a8211c31edefe6b87b.jpg",
//     className: "w-52 h-52 top-[90px] left-[100px]",
//     from: { scale: 0.5, opacity: 0 },
//   },
//   {
//     src: "https://i.pinimg.com/736x/f3/a4/89/f3a4890c6a5e904caa76a3b3c30d48e9.jpg",
//     className: "w-32 h-32 bottom-[-40px] left-[30px]",
//     from: { y: 100, opacity: 0 },
//   },
//   {
//     src: "https://i.pinimg.com/1200x/cb/34/f8/cb34f8b7444c2e6b9288fb9427a69d5b.jpg",
//     className: "w-20 h-20 bottom-[10px] right-[-30px]",
//     from: { x: 100, opacity: 0 },
//   },
// ];

// const animatedImagesRight = [
//   {
//     src: "https://i.pinimg.com/736x/c6/15/99/c61599a3a4bd9c2c25d73a0d54880628.jpg",
//     className: "w-24 h-24 top-[-30px] right-[40px]",
//     from: { x: 100, opacity: 0 },
//   },
//   {
//     src: "https://i.pinimg.com/736x/23/fe/df/23fedfc33d461bdfe6b3344390b491fd.jpg",
//     className: "w-24 h-24 top-[10px] left-[50px]",
//     from: { y: -100, opacity: 0 },
//   },
//   {
//     src: "https://i.pinimg.com/736x/f9/64/c2/f964c232c980fee12b51aa13accd10c6.jpg",
//     className: "w-44 h-44 top-[90px] left-[100px]",
//     from: { scale: 0.5, opacity: 0 },
//   },
//   {
//     src: "https://i.pinimg.com/1200x/ef/15/01/ef1501ba923aa86850b08f3a1b05e13e.jpg",
//     className: "w-32 h-32 bottom-[-10px] left-[20px]",
//     from: { y: 100, opacity: 0 },
//   },
//   {
//     src: "https://i.pinimg.com/1200x/ef/15/01/ef1501ba923aa86850b08f3a1b05e13e.jpg",
//     className: "w-20 h-20 bottom-[40px] right-1",
//     from: { x: -100, opacity: 0 },
//   },
// ];

//   return (
//     <div className="w-full flex gap-4 p-10 py-20 relative">
//       {/* Left animated images */}
//       <div className="w-3/12 relative">
//         {animatedImagesLeft.map((img, i) => (
//           <motion.img
//             key={i}
//             src={img.src}
//             initial={img.from}
//             animate={{ x: 0, y: 0, scale: 1, opacity: 1 }}
//             transition={{ duration: 1, delay: i * 0.2, ease: "easeOut" }}
//             className={`absolute object-cover rounded-full shadow-md ${img.className}`}
//           />
//         ))}
//       </div>

//       {/* Main content */}
//       <div className="w-1/2 px-4 flex flex-col gap-4">
//         <p className="text-5xl font-extrabold text-center leading-[1.2]">
//           <span className="text-[#FD4917]">Antoree</span> <br />
//           Học mọi lúc, mọi nơi.
//         </p>
//         <p className="text-center text-md">
//           Antoree là nền tảng giáo dục trực tuyến tiên phong, kết nối hàng nghìn
//           học viên với đội ngũ giáo viên chất lượng cao trên toàn thế giới, mang
//           đến trải nghiệm học tập cá nhân hóa và linh hoạt theo nhu cầu.
//         </p>
//         <div className="flex justify-center w-full py-4">
//           <AnimatedTooltip items={people} />
//         </div>
//         <Button variant="primary" size="lg" className="w-1/2 mx-auto">
//           Đăng kí ngay
//         </Button>
//       </div>

//       {/* Right animated images */}
//       <div className="w-3/12 relative">
//         {animatedImagesRight.map((img, i) => (
//           <motion.img
//             key={i}
//             src={img.src}
//             initial={img.from}
//             animate={{ x: 0, y: 0, scale: 1, opacity: 1 }}
//             transition={{ duration: 1, delay: i * 0.2, ease: "easeOut" }}
//             className={`absolute object-cover rounded-full shadow-md ${img.className}`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

"use client";

import { AnimatedTooltip } from "../../components/ui/animated-tooltip";
import { Button } from "../../components/ui/Button";
import { motion } from "framer-motion";

export default function Header() {
  const people = [
    {
      id: 1,
      name: "John Doe",
      designation: "Software Engineer",
      image:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&auto=format&fit=crop&w=3387&q=80",
    },
    {
      id: 2,
      name: "Robert Johnson",
      designation: "Product Manager",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 3,
      name: "Jane Smith",
      designation: "Data Scientist",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 4,
      name: "John Doe",
      designation: "Software Engineer",
      image:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
    },
    {
      id: 5,
      name: "Robert Johnson",
      designation: "Product Manager",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 6,
      name: "Jane Smith",
      designation: "Data Scientist",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
  ];

  const createAnimatedImages = (images: any[]) =>
    images.map((img, i) => (
      <motion.img
        key={i}
        src={img.src}
        initial={img.from}
        animate={{ x: 0, y: 0, scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: i * 0.2, ease: "easeOut" }}
        className={`absolute object-cover rounded-full shadow-md ${img.className}`}
      />
    ));

  const animatedImagesLeft = [
    {
      src: "https://i.pinimg.com/1200x/fa/e1/90/fae1901e016f26ef04ee7a7bd629f460.jpg",
      className: "w-24 h-24 top-[-60px] right-[40px]",
      from: { x: -100, opacity: 0 },
    },
    {
      src: "https://i.pinimg.com/736x/23/fe/df/23fedfc33d461bdfe6b3344390b491fd.jpg",
      className: "w-24 h-24 top-[5px] left-[60px]",
      from: { y: -100, opacity: 0 },
    },
    {
      src: "https://i.pinimg.com/1200x/1a/5f/f2/1a5ff23647e263a8211c31edefe6b87b.jpg",
      className: "w-52 h-52 top-[90px] left-[100px]",
      from: { scale: 0.5, opacity: 0 },
    },
    {
      src: "https://i.pinimg.com/736x/f3/a4/89/f3a4890c6a5e904caa76a3b3c30d48e9.jpg",
      className: "w-32 h-32 bottom-[-40px] left-[30px]",
      from: { y: 100, opacity: 0 },
    },
    {
      src: "https://i.pinimg.com/1200x/cb/34/f8/cb34f8b7444c2e6b9288fb9427a69d5b.jpg",
      className: "w-20 h-20 bottom-[10px] right-[-30px]",
      from: { x: 100, opacity: 0 },
    },
  ];
  const animatedImagesRight = [
    {
      src: "https://i.pinimg.com/736x/c6/15/99/c61599a3a4bd9c2c25d73a0d54880628.jpg",
      className: "w-24 h-24 top-[-30px] right-[40px] z-10",
      from: { x: 100, opacity: 0 },
    },
    {
      src: "https://i.pinimg.com/736x/23/fe/df/23fedfc33d461bdfe6b3344390b491fd.jpg",
      className: "w-24 h-24 top-[10px] left-[50px] z-10",
      from: { y: -100, opacity: 0 },
    },
    {
      src: "https://i.pinimg.com/736x/f9/64/c2/f964c232c980fee12b51aa13accd10c6.jpg",
      className: "w-44 h-44 top-[90px] left-[100px] z-10",
      from: { scale: 0.5, opacity: 0 },
    },
    {
      src: "https://i.pinimg.com/1200x/ef/15/01/ef1501ba923aa86850b08f3a1b05e13e.jpg",
      className: "w-32 h-32 bottom-[-10px] left-[20px] z-10",
      from: { y: 100, opacity: 0 },
    },
    {
      src: "https://i.pinimg.com/1200x/ef/15/01/ef1501ba923aa86850b08f3a1b05e13e.jpg",
      className: "w-20 h-20 bottom-[40px] right-1",
      from: { x: -100, opacity: 0 },
    },
  ];

  return (
    <div
      className="w-full px-6 md:px-10 lg:px-20 py-16 md:py-24 flex flex-col md:flex-row items-center gap-10 
  bg-gradient-to-br from-white via-[#e0f7f7] to-[#d4f0e8] 
  bg-opacity-80 z-40"
    >
      {/* Left images - hide on small screens */}
      <div className="w-full md:w-1/4 relative hidden md:block h-[400px]">
        {createAnimatedImages(animatedImagesLeft)}
      </div>

      {/* Center content */}
      <div className="w-full md:w-1/2 flex flex-col gap-2 text-center">
        <h1 className="text-3xl text-[#14B24C] sm:text-4xl lg:text-6xl font-extrabold uppercase">
          Antoree
        </h1>
        <h1 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold uppercase">
          Học mọi lúc - mọi nơi.
        </h1>

        <p className="text-gray-600 text-base md:text-lg mt-2 lg:px-4">
          Antoree là nền tảng giáo dục trực tuyến tiên phong, kết nối hàng nghìn
          học viên với đội ngũ giáo viên chất lượng cao trên toàn thế giới, mang
          đến trải nghiệm học tập cá nhân hóa và linh hoạt theo nhu cầu.
        </p>
        <div className="flex justify-center w-full mt-4">
          <AnimatedTooltip items={people} />
        </div>
        <Button
          variant="primary"
          size="lg"
          className="w-3/4 sm:w-1/2 mx-auto mt-6"
        >
          Đăng ký ngay
        </Button>
      </div>

      {/* Right images - hide on small screens */}
      <div className="w-full md:w-1/4 relative hidden md:block h-[400px]">
        {createAnimatedImages(animatedImagesRight)}
      </div>
    </div>
  );
}
