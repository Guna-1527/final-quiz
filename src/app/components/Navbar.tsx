"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    sectionId: string
  ) => {
    e.preventDefault();
    setMenuOpen(false); // Close menu on mobile

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-lg shadow-md border-b border-gray-300 z-50">
      <div className="max-w-[1300px] mx-auto flex justify-between items-center px-6 py-3">
        {/* Logo */}
        <h1
          className="text-3xl font-extrabold text-blue-600 cursor-pointer hover:scale-105 transition"
          onClick={() => router.push("/")}
        >
          Quizzify
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center text-gray-700 font-medium">
          <Link
            href="#"
            onClick={(e) => handleScroll(e, "hero")}
            className="hover:text-blue-600 transition"
          >
            Home
          </Link>
          <Link
            href="#"
            onClick={(e) => handleScroll(e, "categories")}
            className="hover:text-blue-600 transition"
          >
            Categories
          </Link>
          <Link
            href="#"
            onClick={(e) => handleScroll(e, "about")}
            className="hover:text-blue-600 transition"
          >
            About Us
          </Link>
          <Link
            href="#"
            onClick={(e) => handleScroll(e, "contact")}
            className="hover:text-blue-600 transition"
          >
            Contact Us
          </Link>
          <button
            onClick={() => router.push("/auth/signup")}
            className="px-5 py-2 text-lg bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            Sign Up
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-gray-700 text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden absolute top-[60px] w-full bg-white shadow-md border-t border-gray-200 py-4 text-center">
          <Link
            href="#"
            onClick={(e) => handleScroll(e, "hero")}
            className="block py-2 hover:text-blue-600 transition"
          >
            Home
          </Link>
          <Link
            href="#"
            onClick={(e) => handleScroll(e, "categories")}
            className="block py-2 hover:text-blue-600 transition"
          >
            Categories
          </Link>
          <Link
            href="#"
            onClick={(e) => handleScroll(e, "about")}
            className="block py-2 hover:text-blue-600 transition"
          >
            About Us
          </Link>
          <Link
            href="#"
            onClick={(e) => handleScroll(e, "contact")}
            className="block py-2 hover:text-blue-600 transition"
          >
            Contact Us
          </Link>
          <button
            onClick={() => router.push("/auth/signup")}
            className="mt-3 px-5 py-2 cursor-pointer text-lg bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            Sign Up
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
