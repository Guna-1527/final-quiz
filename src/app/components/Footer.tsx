"use client";

import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

// Animations
const footerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};

const iconVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3 } },
};

const Footer = () => {
  return (
    <motion.footer
      className="w-full bg-gray-900 text-white py-10 mt-10 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      variants={footerVariants}
      viewport={{ once: true }}
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center px-6">
        <motion.h2 className="text-3xl font-bold tracking-wide" variants={iconVariants}>
          Quizify - Elevate Your Learning
        </motion.h2>
        <motion.p className="text-sm text-gray-400 mt-2" variants={iconVariants}>
          Challenge yourself with interactive quizzes and improve your knowledge daily!
        </motion.p>

        <Separator className="my-4 bg-gray-700 w-full" />

        {/* Social Icons */}
        <motion.div className="flex space-x-4 mt-4" variants={iconVariants}>
          <Button variant="ghost" size="icon" className="text-white hover:text-blue-400">
            <FaFacebookF className="text-lg" />
          </Button>
          <Button variant="ghost" size="icon" className="text-white hover:text-blue-400">
            <FaTwitter className="text-lg" />
          </Button>
          <Button variant="ghost" size="icon" className="text-white hover:text-pink-400">
            <FaInstagram className="text-lg" />
          </Button>
          <Button variant="ghost" size="icon" className="text-white hover:text-blue-400">
            <FaLinkedinIn className="text-lg" />
          </Button>
        </motion.div>

        <Separator className="my-4 bg-gray-700 w-full" />

        {/* Copyright */}
        <motion.p className="text-xs text-gray-500 mt-2" variants={iconVariants}>
          &copy; {new Date().getFullYear()} Quizify. All rights reserved.
        </motion.p>
      </div>

      {/* Floating Animated Elements */}
      <motion.div
        className="absolute top-5 left-1/4 w-24 h-24 bg-white opacity-10 rounded-full"
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      ></motion.div>
      <motion.div
        className="absolute bottom-5 right-1/4 w-32 h-32 bg-white opacity-10 rounded-full"
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      ></motion.div>
    </motion.footer>
  );
};

export default Footer;
