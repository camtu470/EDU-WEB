import type { Category } from "../categories/category.types";

export interface Course {
  id: number;
  title: string;
  categoryId: number;
  description: string;
  fullDescription: string;
  duration: string;
  mode: "Online" | "Offline";
  price: number;
  image: string;

  learningContent: string[];
  curriculum: string[];
  voice: string[];
  tags: string[]; // e.g., ["Online", "Zoom", "3 buổi/tuần"]
}

export type CourseWithCategory = Course & {
  category: Category;
};
