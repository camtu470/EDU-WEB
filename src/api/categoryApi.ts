import axios from "axios";
import type { Category } from "../components/features/categories/category.types";

export const fetchCategories = async (): Promise<Category[]> => {
  const res = await axios.get("https://your-api.com/categories");
  return res.data;
};
