"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { FaQuestionCircle, FaStar, FaLightbulb, FaTrophy, FaBookOpen } from "react-icons/fa";

export default function Hero() {
  const router = useRouter();

  return (
    <section className="relative w-full h-screen flex flex-col justify-center items-center bg-white overflow-hidden">
      {/* Animated Falling Icons */}
      <motion.div className="absolute inset-0 flex justify-center">
        <FallingIcons />
      </motion.div>

      {/* Hero Text */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-6xl font-extrabold text-white text-center leading-tight drop-shadow-lg"
      >
        Welcome to <span className="bg-gradient-to-r from-yellow-300 to-pink-400 text-transparent bg-clip-text">Quizify</span> 🎉
      </motion.h1>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
        className="text-lg text-blue-600 mt-4 text-center max-w-xl"
      >
        Challenge yourself with exciting quizzes and level up your knowledge! 🚀
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1, ease: "easeOut" }}
        className="mt-6 flex gap-4"
      >
        <button
          onClick={() => router.push("/auth/login")}
          className="px-6 py-3 bg-blue-600 text-white font-semibold text-lg rounded-lg shadow-lg hover:bg-blue-700 transition cursor-pointer"
        >
          Start Playing ▶️
        </button>
        <button
          onClick={() => router.push("/auth/login")}
          className="px-6 py-3 border border-blue-600 text-blue-600 font-semibold text-lg rounded-lg hover:bg-blue-100 transition cursor-pointer"
        >
          Login 🚀
        </button>
      </motion.div>
    </section>
  );
}

// Animated Falling Icons
function FallingIcons() {
  const icons = [
    <FaQuestionCircle size={30} className="text-blue-500" />,
    <FaStar size={30} className="text-yellow-400" />,
    <FaLightbulb size={30} className="text-blue-300" />,
    <FaTrophy size={30} className="text-red-400" />,
    <FaBookOpen size={30} className="text-green-400" />,
  ];

  return (
    <div className="absolute w-full h-full pointer-events-none">
      {Array(15)
        .fill(0)
        .map((_, index) => {
          const randomX = Math.random() * 100; // Random X position
          const randomDelay = Math.random() * 4; // Random start delay
          const randomSize = Math.random() * 15 + 20; // Varying icon size
          const randomDuration = Math.random() * 4 + 8; // Slower fall (8-12s)

          return (
            <motion.div
              key={index}
              className="absolute"
              style={{ left: `${randomX}%`, top: "-5%" }}
              initial={{ y: "-100vh", opacity: 1 }}
              animate={{ y: "100vh", opacity: 0 }}
              transition={{
                duration: randomDuration,
                delay: randomDelay,
                repeat: Infinity,
                ease: "easeOut",
              }}
            >
              {icons[Math.floor(Math.random() * icons.length)]}
            </motion.div>
          );
        })}
    </div>
  );
}
