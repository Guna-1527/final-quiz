"use client";


import { motion } from "framer-motion";
import Button from "./Button";

const CTA = () => {
  return (
    <motion.div
      id="about"
      className="w-full max-w-[1300px] mx-auto flex flex-col items-center text-center gap-6 px-8 py-16 rounded-2xl shadow-lg relative overflow-hidden bg-gradient-to-r from-blue-500 to-blue-700 text-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Floating Animated Icons */}
      <motion.div
        className="absolute top-[-5%] left-[10%] w-12 h-12 bg-yellow-300 rounded-full backdrop-blur-lg shadow-xl"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-5%] right-[15%] w-14 h-14 bg-white/50 rounded-full backdrop-blur-lg shadow-lg"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-[50%] left-[5%] w-10 h-10 bg-yellow-300 rounded-full backdrop-blur-lg shadow-lg"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[50%] right-[5%] w-10 h-10 bg-white/50 rounded-full backdrop-blur-lg shadow-lg"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Glow Effect */}
      <motion.div
        className="absolute inset-0 w-full h-full bg-blue-500 opacity-30 blur-3xl"
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Text Content */}
      <motion.h1
        className="text-5xl font-extrabold leading-tight z-10"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        Ready to <span className="text-yellow-300">Challenge</span> Your Knowledge?
      </motion.h1>

      <motion.p
        className="text-lg leading-relaxed z-10"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.2 } },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        Take fun and interactive quizzes across multiple categories. Compete, learn, and grow with{" "}
        <span className="font-semibold">Quizify</span>! Start now and test your skills.
      </motion.p>

      <motion.div
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.4 } },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Button
          name="Start Practicing Now!"
          width="220px"
          height="50px"
          backgroundColor="yellow-300"
          textColor="black"
          borderRadius="16px"
        />
      </motion.div>
    </motion.div>
  );
};

export default CTA;
