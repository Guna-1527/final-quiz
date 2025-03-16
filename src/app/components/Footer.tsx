"use client";


import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

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
      className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-8 mt-10 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      variants={footerVariants}
      viewport={{ once: true }}
    >
      <div className="container mx-auto flex flex-col items-center text-center space-y-4">
        <motion.h2 className="text-3xl font-bold" variants={iconVariants}>
          Quizify - Elevate Your Learning
        </motion.h2>
        <motion.p className="text-sm text-gray-200" variants={iconVariants}>
          Challenge yourself with interactive quizzes and improve your knowledge daily!
        </motion.p>
        
        <motion.div className="flex space-x-6 mt-4" variants={iconVariants}>
          <FaFacebookF className="text-xl cursor-pointer hover:text-blue-300 transition" />
          <FaTwitter className="text-xl cursor-pointer hover:text-blue-300 transition" />
          <FaInstagram className="text-xl cursor-pointer hover:text-pink-300 transition" />
          <FaLinkedinIn className="text-xl cursor-pointer hover:text-blue-300 transition" />
        </motion.div>
        
        <motion.p className="text-xs text-gray-300 mt-4" variants={iconVariants}>
          &copy; {new Date().getFullYear()} Quizify. All rights reserved.
        </motion.p>
      </div>
      
      {/* Floating Animated Elements */}
      <motion.div
        className="absolute top-0 left-1/4 w-24 h-24 bg-white opacity-10 rounded-full"
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      ></motion.div>
      <motion.div
        className="absolute bottom-0 right-1/4 w-32 h-32 bg-white opacity-10 rounded-full"
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      ></motion.div>
    </motion.footer>
  );
};

export default Footer;
