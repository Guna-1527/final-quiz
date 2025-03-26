'use client';

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer"; // Import hook from the package
import { supabase } from "../lib/supabase";

// Define category type
interface Category {
  id: number;
  name: string;
}

const Categories = () => {
  const router = useRouter();
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch categories from Supabase
  useEffect(() => {
    async function fetchCategories() {
      try {
        const { data, error } = await supabase.from("categories").select("id, name");

        if (error) throw error;

        setCategories(data as Category[]);
      } catch (err) {
        setError("Failed to load categories. " + err);
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
    <motion.div
      id="categories"
      className="w-full flex flex-wrap gap-4 justify-center p-6"
    >
      <CategorySection categories={categories} handleCategoryClick={handleCategoryClick} />
    </motion.div>
  );
};

const CategorySection = ({ categories, handleCategoryClick }: { categories: Category[], handleCategoryClick: (categoryId: number) => void }) => {
  // useInView hook to track if the section is in view
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger only once
    threshold: 0.5, // Trigger when 50% of the section is visible
  });

  return (
    <motion.div
      ref={ref} // Attach ref to the section
      className="w-full flex flex-wrap gap-4 justify-center p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }} // Trigger animation on inView state
      transition={{ duration: 0.5 }}
    >
      {categories.map((category, index) => (
        <motion.div
          key={category.id}
          className="flex items-center justify-center border border-gray-300 px-6 py-3 rounded-lg shadow-md bg-white hover:bg-gray-100 transition cursor-pointer"
          onClick={() => handleCategoryClick(category.id)}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }} // Animation starts when section is visible
          transition={{
            duration: 0.4,
            delay: inView ? index * 0.1 : 0, // Delay for each category item
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="text-gray-800 font-medium">{category.name}</span>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Categories;
