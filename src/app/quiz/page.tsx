"use client";

import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";
import { useRouter } from "next/navigation";
import { FaPlayCircle, FaChartBar } from "react-icons/fa";

export default function QuizPage() {
  const [categories, setCategories] = useState<{ id: string; name: string }[]>(
    []
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchCategories = async () => {
      const { data, error } = await supabase
        .from("categories")
        .select("id, name");
      if (error) {
        console.error("Error fetching categories:", error.message);
        setError("Failed to load categories.");
      } else {
        setCategories(data || []);
      }
      setLoading(false);
    };
    fetchCategories();
  }, []);

  return (
    <div className="p-4 w-full h-[calc(100vh-4rem)] overflow-y-auto  no-scrollbar bg-gray-100">
      <h1 className="text-2xl font-bold text-gray-800 mb-3">🎯 Take a Quiz</h1>
      <p className="text-gray-600 mb-4">
        Select a category and start your quiz.
      </p>

      {/* Error Message */}
      {error && <p className="text-red-500">{error}</p>}

      {/* Quiz Categories */}
      {loading ? (
        <p className="text-gray-500">Loading categories...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {categories.map((category) => (
            <div
              key={category.id}
              onClick={() => router.push(`/quiz/${category.id}`)}
              className="p-4 bg-white shadow-md rounded-lg cursor-pointer hover:bg-blue-100 transition"
            >
              <h2 className="text-lg font-semibold text-gray-700">
                {category.name}
              </h2>
              <button className="mt-2 flex items-center gap-2 cursor-pointer hover:bg-blue-500 text-blue-600 font-medium">
                <FaPlayCircle /> Start Quiz
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Leaderboard Section */}
      <div className="mt-6 bg-white shadow-md p-4 rounded-lg">
        <h2 className="text-lg font-semibold mb-2">🏆 Leaderboard</h2>
        <p className="text-gray-500">
          Top players and highest scores will appear here.
        </p>
        <button className="mt-2 flex items-center gap-2 text-blue-600 font-medium">
          <FaChartBar /> View Leaderboard
        </button>
      </div>
    </div>
  );
}
