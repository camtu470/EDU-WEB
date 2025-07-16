import Blog from "../components/features/blog";
import Categories from "../components/features/categories";
import Courses from "../components/features/courses";
import Suggestion from "../components/features/suggestion";
import Tutor from "../components/features/tutor";
import Header from "../layouts/header";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="flex flex-col gap-10 px-6 md:px-10 py-10">
        <Categories />
        <Tutor />
        <Courses />
        <Suggestion />
        <Blog />
      </div>
    </div>
  );
}
