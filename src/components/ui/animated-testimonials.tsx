"use client";

import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import {
  FaLongArrowAltLeft,
  FaLongArrowAltRight,
  FaStar,
} from "react-icons/fa";

type Testimonial = {
  name: string;
  designation: string;
  quote: string;
  src: string;
  rating: number;
  country: string;
  specialties: string[];
};

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const randomRotateY = () => Math.floor(Math.random() * 21) - 10;
  const testimonial = testimonials[active];

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 font-sans antialiased">
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Avatar Animation */}
        <div className="relative h-80 w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonial.src}
              initial={{ opacity: 0, scale: 0.9, rotate: randomRotateY() }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.9, rotate: randomRotateY() }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 origin-bottom"
            >
              <img
                src={testimonial.src}
                alt={testimonial.name}
                className="h-full w-full rounded-3xl object-cover shadow-lg"
                draggable={false}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Info Panel */}
        <motion.div
          key={active}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col justify-between shadow rounded-lg border p-4 lg:border-none lg:rounded-none lg:shadow-none"
        >
          <div>
            <h3 className="text-2xl font-bold text-[#235d2a]">
              {testimonial.name}
            </h3>
            <p className="text-sm text-gray-500">{testimonial.designation}</p>
            <div className="flex items-center gap-1 mt-2 text-yellow-400">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <FaStar key={i} />
              ))}
              <span className="ml-2 text-sm text-gray-600">
                ({testimonial.country})
              </span>
            </div>

            <div className="mt-3">
              <p className="font-semibold text-gray-800">Chuyên môn:</p>
              <ul className="list-disc list-inside text-sm text-gray-600">
                {testimonial.specialties.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>
            </div>

            <motion.p className="mt-6 text-gray-600 italic text-base">
              {testimonial.quote.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.02 * index }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </div>

          {/* Navigation */}
          <div className="flex gap-4">
            <button
              onClick={handlePrev}
              className="group flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 hover:bg-[#235d2a]"
            >
              <FaLongArrowAltLeft className="text-[#235d2a] group-hover:text-white" />
            </button>
            <button
              onClick={handleNext}
              className="group flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 hover:bg-[#235d2a]"
            >
              <FaLongArrowAltRight className="text-[#235d2a] group-hover:text-white" />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
