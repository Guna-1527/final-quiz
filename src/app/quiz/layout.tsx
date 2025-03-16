"use client";

import React, { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";
import { useParams, useRouter } from "next/navigation";
import { FaUserCircle } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

export default function QuizLayout({ children }: { children: React.ReactNode }) {
  const [categories, setCategories] = useState<{ id: string; name: string }[]>([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const params = useParams();
  const router = useRouter();
  const categoryIdFromUrl = params?.categoryId as string;

  // Fetch categories on mount
  useEffect(() => {
    const fetchCategories = async () => {
      const { data, error } = await supabase.from("categories").select("id, name");
      if (error) {
        console.error("Error fetching categories:", error.message);
        setError("Failed to load categories.");
      } else {
        setCategories(data || []);
      }
    };
    fetchCategories();
  }, []);

  return (
    <div className="flex flex-col w-screen h-screen bg-gray-100">
      {/* Navbar */}
      <header className="bg-white shadow-md h-16 px-6 flex justify-between items-center border-b">
        <div className="flex items-center gap-4">
          {/* Hamburger Icon */}
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="text-gray-600">
            {isSidebarOpen ? <IoClose size={26} /> : <FiMenu size={26} />}
          </button>
          <h1
            className="text-2xl font-bold text-blue-600 cursor-pointer"
            onClick={() => router.push("/")}
          >
            📚 MyQuizApp
          </h1>
        </div>
        <div className="flex items-center gap-6">
          <button className="text-gray-600 hover:text-blue-600 transition">Home</button>
          <button className="text-gray-600 hover:text-blue-600 transition">About</button>
          <button className="text-gray-600 hover:text-blue-600 transition">Contact</button>
          <FaUserCircle size={28} className="cursor-pointer text-gray-600 hover:text-blue-600" />
        </div>
      </header>

      {/* Main Layout */}
      <div className="flex flex-1 h-[calc(100vh-4rem)]">
        {/* Sidebar (Fully Collapses) */}
        <aside
          className={`bg-white shadow-lg border-r p-6 overflow-y-auto h-[calc(100vh-4rem)] fixed top-16 transition-all duration-300 ${
            isSidebarOpen ? "w-72 left-0" : "w-0 -left-72"
          }`}
        >
          <h2 className="text-lg font-bold text-gray-700 mb-4">📂 Categories</h2>
          {error && <p className="text-red-500">{error}</p>}
          <ul className="space-y-2">
            {categories.map((category) => (
              <li
                key={category.id}
                className={`p-3 rounded-lg text-gray-700 hover:bg-blue-100 transition cursor-pointer ${
                  categoryIdFromUrl === category.id ? "bg-blue-600 text-white" : ""
                }`}
                onClick={() => router.push(`/quiz/${category.id}`)}
              >
                {category.name}
              </li>
            ))}
          </ul>
        </aside>

        {/* Main Content (Expands When Sidebar is Closed) */}
        <main
          className={`p-8 overflow-y-auto transition-all no-scrollbar duration-300 flex-1 ${
            isSidebarOpen ? "ml-72" : "ml-0"
          }`}
        >
          {children}
        </main>

        {/* Quick Links Sidebar */}
        <aside className="w-72 bg-white shadow-lg border-l p-6 overflow-y-auto">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">🔗 Quick Links</h2>
          <ul className="space-y-3">
            <li className="p-3 bg-gray-200 rounded-lg hover:bg-blue-100 transition cursor-pointer">
              <a href="#">🏆 Leaderboard</a>
            </li>
            <li className="p-3 bg-gray-200 rounded-lg hover:bg-blue-100 transition cursor-pointer">
              <a href="#">🔥 Daily Challenges</a>
            </li>
            <li className="p-3 bg-gray-200 rounded-lg hover:bg-blue-100 transition cursor-pointer">
              <a href="#">📈 Top Quizzes</a>
            </li>
            <li className="p-3 bg-gray-200 rounded-lg hover:bg-blue-100 transition cursor-pointer">
              <a href="#">📢 Latest Updates</a>
            </li>
          </ul>

          {/* Ad Section */}
          <div className="mt-6 p-5 bg-gray-300 rounded-lg text-center">
            <p className="text-sm text-gray-700">Advertisement</p>
            <p className="text-xs text-gray-600">Your ad here</p>
          </div>
        </aside>
      </div>
    </div>
  );
}
