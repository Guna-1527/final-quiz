"use client";

import { useRouter } from "next/navigation";
import { supabase } from "../lib/supabase";
import { FaHome, FaChartBar, FaCog, FaSignOutAlt, FaList } from "react-icons/fa";

const menuItems = [
  { name: "Dashboard", icon: <FaHome size={20} />, path: "/dashboard" },
  { name: "Performance", icon: <FaChartBar size={20} />, path: "/dashboard/performance" },
  { name: "Settings", icon: <FaCog size={20} />, path: "/dashboard/settings" },
];

export default function Sidebar() {
  const router = useRouter();

  // Logout Function
  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("Logout Error:", error.message);
      return;
    }
    router.push("/"); // Redirect to home page after logout
  };

  return (
    <aside className="w-64 bg-white shadow-lg h-full flex flex-col p-4">
      {/* Logo */}
      <h1 className="text-2xl font-bold text-blue-600 mb-6">📚 MyQuizApp</h1>

      {/* Menu Items */}
      <nav className="flex-1 space-y-2">
        {menuItems.map(({ name, icon, path }) => (
          <button
            key={name}
            onClick={() => router.push(path)}
            className="flex items-center gap-3 w-full p-3 text-lg text-gray-700 hover:bg-blue-100 rounded-lg transition"
          >
            {icon}
            {name}
          </button>
        ))}

        {/* Categories Button */}
        <button
          onClick={() => router.push("/quiz")}
          className="flex items-center gap-3 w-full p-3 text-lg text-gray-700 hover:bg-blue-100 rounded-lg transition"
        >
          <FaList size={20} />
          Categories
        </button>
      </nav>

      {/* Logout */}
      <button
        onClick={handleLogout}
        className="flex items-center gap-3 p-3 text-lg text-red-600 hover:bg-red-100 rounded-lg transition"
      >
        <FaSignOutAlt size={20} />
        Logout
      </button>
    </aside>
  );
}
