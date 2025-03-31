"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Brain } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // Change background after scrolling 50px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md border-b border-gray-300"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1300px] mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <h1
          className="text-3xl font-bold cursor-pointer flex gap-1 items-center text-bold"
          onClick={() => router.push("/")}
        >
           <Brain  className="hover:rotate-12 animate-bounce"/>
          Quizzify
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center font-medium">
          <Button variant="ghost" asChild>
            <Link href="#hero">Home</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="#categories">Categories</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="#about">About Us</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="#contact">Contact Us</Link>
          </Button>
          <Button className="cursor-pointer" onClick={() => router.push("/auth")}>Sign Up</Button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-64 p-6 bg-white">
              <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Quizify</h1>
                <Button variant="ghost" size="icon" onClick={() => setMenuOpen(false)}>
                  <X className="h-6 w-6" />
                </Button>
              </div>
              <nav className="flex flex-col gap-4 text-lg font-medium">
                <Button variant="ghost" asChild>
                  <Link href="#hero" onClick={() => setMenuOpen(false)}>Home</Link>
                </Button>
                <Button variant="ghost" asChild>
                  <Link href="#categories" onClick={() => setMenuOpen(false)}>Categories</Link>
                </Button>
                <Button variant="ghost" asChild>
                  <Link href="#about" onClick={() => setMenuOpen(false)}>About Us</Link>
                </Button>
                <Button variant="ghost" asChild>
                  <Link href="#contact" onClick={() => setMenuOpen(false)}>Contact Us</Link>
                </Button>
                <div className="cursor-pointer">
                  <Button onClick={() => { setMenuOpen(false); router.push("/auth"); }}>Sign Up</Button>
                  </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
