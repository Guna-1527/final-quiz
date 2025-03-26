"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { FaStar } from 'react-icons/fa'; // Importing an icon for rating
import { useInView } from 'react-intersection-observer'; // Importing the hook from the package

// Sample testimonial data
const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    role: 'Developer',
    feedback: 'This quiz platform helped me improve my skills! Highly recommend.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Jane Smith',
    role: 'Designer',
    feedback: 'The quizzes are engaging, and I love the variety of topics.',
    rating: 4,
  },
  {
    id: 3,
    name: 'Alex Johnson',
    role: 'Project Manager',
    feedback: 'A fantastic tool for team-building and learning together.',
    rating: 5,
  },
];

const TestimonialSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-12 text-gray-800">What Our Users Say</h2>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ testimonial }: { testimonial: any }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation once when the section comes into view
    threshold: 0.5, // When 50% of the section is visible, trigger animation
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
      transition={{ duration: 0.6, delay: 0.2 * testimonial.id }}
      className="flex justify-center"
    >
      <Card className="max-w-sm bg-white shadow-lg rounded-xl p-6 hover:scale-105 transition-all duration-300 ease-in-out">
        <CardContent>
          <CardTitle className="text-xl font-semibold text-indigo-700">{testimonial.name}</CardTitle>
          <div className="flex items-center justify-center mt-2">
            <span className="text-sm text-gray-500">{testimonial.role}</span>
          </div>
          <div className="mt-4 text-gray-600">
            <p className="italic">"{testimonial.feedback}"</p>
          </div>
          <div className="flex justify-center mt-4 space-x-1">
            {Array.from({ length: testimonial.rating }).map((_, index) => (
              <FaStar key={index} className="text-yellow-500" />
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default TestimonialSection;
