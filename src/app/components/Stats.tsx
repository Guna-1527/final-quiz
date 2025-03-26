"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

// Stats Data
const stats = [
  { label: "Quizzes", value: 1000 },
  { label: "Users", value: 50000 },
  { label: "Categories", value: 20 },
  { label: "Top Scorers", value: 5000 },
];

const StatsSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true });
  const [counts, setCounts] = useState(stats.map(() => 0));

  // Counting animation logic
  useEffect(() => {
    if (inView) {
      stats.forEach((stat, index) => {
        let start = 0;
        const end = stat.value;
        const duration = 3000; // Total duration (3 seconds)
        const stepTime = Math.max(10, Math.floor(duration / end)); // Step interval

        const timer = setInterval(() => {
          start += Math.ceil(end / (duration / stepTime));
          if (start > end) start = end;

          setCounts((prevCounts) => {
            const newCounts = [...prevCounts];
            newCounts[index] = start;
            return newCounts;
          });

          if (start >= end) clearInterval(timer);
        }, stepTime);
      });
    }
  }, [inView]);

  return (
    <section ref={ref} className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 ">Quizify Stats</h2>
        <p className="text-lg text-gray-700 mb-10">
          See how many users are challenging themselves daily!
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="border-2 border-gray-300 shadow-lg rounded-xl p-8 bg-white">
                <CardHeader>
                  <CardTitle className="text-4xl font-extrabold text-center text-gray-700">
                    {counts[index]}+
                  </CardTitle>
                  <CardDescription className="text-center text-gray-600">{stat.label}</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
