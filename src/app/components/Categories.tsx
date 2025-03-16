"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

// Define category type
interface Category {
  id: number;
  name: string;
}

const Categories = () => {
  const router = useRouter();
  const [categories, setCategories] = useState<Category[]>([]); // ✅ Typed state
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null); // ✅ Typed error state

  useEffect(() => {
    async function fetchCategories() {
      try {
        const { data, error } = await supabase.from("categories").select("id, name");

        if (error) throw error;

        setCategories(data as Category[]); // ✅ Explicitly cast data
      } catch (err) {
        setError("Failed to load categories." + err);
      } finally {
        setLoading(false);
      }
    }

    fetchCategories();
  }, []);

  const handleCategoryClick = (categoryId: number) => {
    router.push(`/quiz?category=${categoryId}`);
  };

  if (loading) return <p className="text-center text-gray-600">Loading categories...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="w-full flex flex-wrap gap-4 justify-center p-6">
      {categories.map((category) => (
        <div
          key={category.id}
          className="flex items-center justify-between border border-gray-300 px-4 py-2 rounded-lg shadow-md bg-white hover:bg-gray-100 transition cursor-pointer"
          onClick={() => handleCategoryClick(category.id)}
        >
          <span className="text-gray-800 font-medium">{category.name}</span>
        </div>
      ))}
    </div>
  );
}


export default Categories;