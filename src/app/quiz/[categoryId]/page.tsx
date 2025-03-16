"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { supabase } from "../../lib/supabase";
import type { JSX } from "react";

import {
  AiOutlineCalculator,
  AiOutlineCode,
  AiOutlineBook,
  AiOutlineExperiment,
  AiOutlineBulb,
  AiOutlineFolder,
} from "react-icons/ai"; // Import icons

// Function to get an icon based on category name
const getCategoryIcon = (categoryName: string): JSX.Element => {
  const icons: Record<string, JSX.Element> = {
    Math: <AiOutlineCalculator className="w-6 h-6 text-gray-700" />,
    Science: <AiOutlineExperiment className="w-6 h-6 text-gray-700" />,
    Programming: <AiOutlineCode className="w-6 h-6 text-gray-700" />,
    "General Knowledge": <AiOutlineBook className="w-6 h-6 text-gray-700" />,
    "Logical Reasoning": <AiOutlineBulb className="w-6 h-6 text-gray-700" />,
  };

  return icons[categoryName] || <AiOutlineFolder className="w-6 h-6 text-gray-700" />; // Default icon
};

const SubcategoryPage = () => {
  const params = useParams();
  const router = useRouter();
  const categoryId = params?.categoryId as string;

  const [subcategories, setSubcategories] = useState<{ id: string; name: string }[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchSubcategories() {
      if (!categoryId) return;

      const { data, error } = await supabase
        .from("aptitude_subcategories")
        .select("id, name")
        .eq("category_id", categoryId);

      if (error) setError(error.message);
      else setSubcategories(data || []);

      setLoading(false);
    }

    fetchSubcategories();
  }, [categoryId]);

  if (loading) return <p className="text-center text-gray-500">Loading subcategories...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-left">Select a Subcategory</h1>

      {subcategories.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {subcategories.map((sub) => (
            <div
              key={sub.id}
              className="p-4 bg-gray-200 hover:bg-gray-300 rounded-md cursor-pointer flex items-center space-x-3"
              onClick={() => router.push(`/quiz/${categoryId}/${sub.id}`)}
            >
              {getCategoryIcon(sub.name)}
              <span className="text-gray-800">{sub.name}</span>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-left">No subcategories available.</p>
      )}
    </div>
  );
};

export default SubcategoryPage;
