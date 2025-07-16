import axios from "axios";
import type {
  Course,
  CourseWithCategory,
} from "../components/features/courses/course.types";
import type { Category } from "../components/features/categories/category.types";

const API_URL = "http://localhost:3001";

export const courseApi = {
  async getCoursesWithCategory(): Promise<CourseWithCategory[]> {
    const [coursesRes, categoriesRes] = await Promise.all([
      axios.get<Course[]>(`${API_URL}/courses`),
      axios.get<Category[]>(`${API_URL}/categories`),
    ]);

    const categories = categoriesRes.data;

    return coursesRes.data.map((course) => {
      const category = categories.find((c) => +c.id === course.categoryId);
      return {
        ...course,
        category: category ?? {
          id: 0,
          title: "Không rõ",
          icon: "",
          totalCourses: 0,
        },
      };
    });
  },

  async getCourseWithCategoryById(
    id: number
  ): Promise<CourseWithCategory | null> {
    try {
      const courseRes = await axios.get<Course>(`${API_URL}/courses/${id}`);
      const course = courseRes.data;

      const categoryRes = await axios.get<Category>(
        `${API_URL}/categories/${course.categoryId}`
      );
      const category = categoryRes.data;

      return {
        ...course,
        category,
      };
    } catch (error) {
      console.error("Không lấy được chi tiết khóa học:", error);
      return null;
    }
  },
};
