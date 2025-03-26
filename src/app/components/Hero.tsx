'use client';

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Head from "next/head"; // Next.js Head component for SEO

export default function Hero() {
  const router = useRouter();

  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        <title>Government Exam and Interview Preparation</title> {/* Title for SEO */}
        <meta name="description" content="Ace your government exams and interviews with confidence using our expert resources and engaging quizzes. Prepare and succeed!" />
        <meta name="keywords" content="government exams, interview preparation, quiz platform, exam preparation, online quizzes" />
        <meta property="og:title" content="Ace Your Exams – Prepare with Confidence" />
        <meta property="og:description" content="Challenge yourself with exciting quizzes and level up your knowledge. Perfect for government exams and interviews." />
        <meta property="og:image" content="/path-to-image.jpg" /> {/* Add a relevant image for social media sharing */}
        <meta property="og:url" content="https://www.yoursite.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ace Your Exams – Prepare with Confidence" />
        <meta name="twitter:description" content="Prepare for government exams and interviews with confidence! Engage in quizzes that level up your knowledge." />
      </Head>

      <section className="relative w-full h-screen flex flex-col justify-center items-center overflow-hidden">
        {/* Hero Text */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}  // Start from below the screen
          animate={{ opacity: 1, y: 0 }}   // Animate to original position
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-6xl font-extrabold max-w-7xl text-center leading-tight"
        >
          <span className="relative inline-block overflow-hidden">
            <motion.span
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="absolute top-0 left-0 h-full bg-black"
            ></motion.span>
            <span className="relative text-white px-2 z-10">Ace Your Exams</span>
          </span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1, ease: "easeOut" }}
            className="block text-black"
          >
          Prepare with Confidence, Succeed with Ease!
          </motion.span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 50 }}  // Start from below the screen
          animate={{ opacity: 1, y: 0 }}   // Animate to original position
          transition={{ delay: 1.5, duration: 1, ease: "easeOut" }}  // Added delay to animate after header
          className="text-lg mt-4 text-center max-w-xl"
        >
          Challenge yourself with exciting quizzes and level up your knowledge!
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}  // Start from below the screen
          animate={{ opacity: 1, y: 0 }}   // Animate to original position
          transition={{ delay: 2, duration: 1, ease: "easeOut" }}  // Added delay to animate after subtext
          className="mt-6 flex gap-4"
        >
          <Button
            className="w-[150px] h-[50px] font-bold tracking-wide cursor-pointer"
            onClick={() => router.push("/auth/login")}
            aria-label="Start Playing"
          >
            Start Playing
          </Button>
          <Button
            className="w-[150px] h-[50px] font-bold tracking-wide cursor-pointer"
            variant="outline"
            onClick={() => router.push("/auth/login")}
            aria-label="Login"
          >
            Login
          </Button>
        </motion.div>
      </section>
    </>
  );
}
