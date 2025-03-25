"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useInView } from "react-intersection-observer"; // For trigger on viewport visibility

// Call-to-Action Section
const CTASec = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <section
      ref={ref}
      className="relative bg-white py-24 text-black"
    >
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading with Animation */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Take Your Learning to the Next Level
        </motion.h2>

        {/* Subheading with Animation */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-xl text-gray-700 mb-8"
        >
          Join thousands of learners and boost your knowledge today. Start your
          journey now!
        </motion.p>

        {/* CTA Button with Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
        >
          <Button className="w-64 h-12 font-bold tracking-widest cursor-pointer rounded-md shadow-lg">
            Start Now
          </Button>
        </motion.div>

      </div>
    </section>
  );
};

export default CTASec;
