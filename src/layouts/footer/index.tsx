import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white text-black">
      <div className="w-full p-10 pt-14 bg-gray-100">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          <div className="col-span-2">
            <a href="/" className="flex items-center gap-2">
              <img
                src="https://commercial.static.antoree.com/assets/images/logo_withtagline.svg"
                alt="Antoree"
                className="h-8 object-cover"
              />
            </a>

            <nav className="flex flex-col space-y-2 mt-4">
              <p className="text-sm">
                Antoree là nền tảng học trực tuyến tiên phong kết nối học viên
                với gia sư toàn cầu. Chúng tôi cung cấp các khóa học 1 kèm 1,
                linh hoạt theo nhu cầu, giúp người học tiến bộ nhanh chóng. Với
                đội ngũ gia sư chất lượng, Antoree cam kết mang đến trải nghiệm
                học tập cá nhân hóa và hiệu quả.
              </p>
            </nav>
          </div>
          <div>
            <p className=" text-sm md:text-base uppercase font-bold text-color mb-3 tracking-wider">
              Start Learning
            </p>
            <nav className="flex flex-col space-y-2">
              <a
                href="#"
                className="text-sm hover:text-[#235d2a] transition duration-150"
              >
                UX/UI Design
              </a>
              <a
                href="#"
                className="text-sm hover:text-[#235d2a] transition duration-150"
              >
                Software Development
              </a>
              <a
                href="#"
                className="text-sm hover:text-[#235d2a] transition duration-150"
              >
                Workplace Skills
              </a>
              <a
                href="#"
                className="text-sm hover:text-[#235d2a] transition duration-150"
              >
                Job Search
              </a>
              <a
                href="#"
                className="text-sm hover:text-[#235d2a] transition duration-150"
              >
                Digital Freelancing
              </a>
            </nav>
          </div>

          <div>
            <p className="text-sm md:text-base uppercase font-bold text-color mb-3 tracking-wider">
              Open Study Hub
            </p>
            <nav className="flex flex-col space-y-2">
              <a
                href="#"
                className="text-sm hover:text-[#235d2a] transition duration-150"
              >
                Job Search
              </a>
              <a
                href="#"
                className="text-sm hover:text-[#235d2a] transition duration-150"
              >
                Soft Skills
              </a>
              <a
                href="#"
                className="text-sm hover:text-[#235d2a] transition duration-150"
              >
                Workplace Success
              </a>
              <a
                href="#"
                className="text-sm hover:text-[#235d2a] transition duration-150"
              >
                Tech careers
              </a>
            </nav>
          </div>

          <div className="col-span-2 md:col-span-2">
            <p className="text-sm md:text-base uppercase font-bold text-color mb-3 tracking-wider">
              Sign up for NewsL TR
            </p>
            <div className="flex gap-2 items-center">
              {" "}
              <input
                type="email"
                placeholder="Enter your email..."
                className="w-9/12 md:w-10/12 bg-gray-100 border border-gray-700 rounded-full py-2 px-4 text-sm text-black placeholder-gray-800 focus:outline-none focus:border-green-800 focus:ring-1 focus:ring-green-800  appearance-none"
              />
              <button className="w-3/12 md:w-2/12 bg-[#235d2a] hover:bg-[#298534] text-white rounded-full py-2 md:px-4 font-medium text-sm text-center transition duration-200 ">
                Gửi
              </button>
            </div>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="">
                <FaFacebook className="text-2xl text-gray-700 hover:text-[#298534] transition" />
              </a>
              <a href="#" className="">
                <FaTwitter className="text-2xl text-gray-700 hover:text-[#298534] transition" />
              </a>
              <a href="#" className="">
                <FaInstagram className="text-2xl text-gray-700 hover:text-[#298534] transition" />
              </a>
              <a href="#" className="">
                <FaYoutube className="text-2xl text-gray-700 hover:text-[#298534] transition" />
              </a>
            </div>

            <div className="flex space-x-4 social-icon">
              <a href="#" className="text-gray-400 hover:text-white">
                <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fill-rule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fill-rule="evenodd"
                    d="M12.315 2c2.43 0 2.784.01 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.05 1.024.06 1.378.06 3.808s-.01 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.05-1.378.06-3.808.06s-2.784-.01-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.05-1.024-.06-1.378-.06-3.808s.01-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.01 9.255 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.06-1.03.048-1.634.208-2.121.41a3.109 3.109 0 00-1.162.763 3.109 3.109 0 00-.763 1.162c-.202.487-.362 1.09-.41 2.121-.05 1.023-.06 1.351-.06 3.807v.468c0 2.456.01 2.784.06 3.807.048 1.03.208 1.634.41 2.121a3.109 3.109 0 00.763 1.162 3.109 3.109 0 001.162.763c.487.202 1.09.362 2.121.41 1.023.05 1.351.06 3.807.06h.468c2.456 0 2.784-.01 3.807-.06 1.03-.048 1.634-.208 2.121-.41a3.109 3.109 0 001.162-.763 3.109 3.109 0 00.763-1.162c.202-.487.362-1.09.41-2.121.05-1.023.06-1.351.06-3.807v-.468c0-2.456-.01-2.784-.06-3.807-.048-1.03-.208-1.634-.41-2.121a3.109 3.109 0 00-.763-1.162 3.109 3.109 0 00-1.162-.763c-.487-.202-1.09-.362-2.121-.41-1.023-.05-1.351-.06-3.807-.06zm-1.928 2.81a6.156 6.156 0 100 12.312 6.156 6.156 0 000-12.312zm0 1.802a4.354 4.354 0 110 8.708 4.354 4.354 0 010-8.708zm6.441-2.553a1.44 1.44 0 100-2.88 1.44 1.44 0 000 2.88z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className=" py-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500">
          <div className="flex flex-wrap justify-center sm:justify-start gap-x-4 gap-y-1 mb-3 sm:mb-0">
            <a href="#" className="hover:text-gray-300">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gray-300">
              Terms of Use
            </a>
            <a href="#" className="hover:text-gray-300">
              Cookies policy
            </a>
            <a href="#" className="hover:text-gray-300">
              Media Kit
            </a>
            <a href="#" className="hover:text-gray-300">
              US Financials
            </a>
          </div>
          <div className="flex items-center gap-2 text-center sm:text-right">
            <span className="font-bold text-sm text-white">your company</span>
            <span>Copyright 2025 @ Company . All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
