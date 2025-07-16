"use client";
import { useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { motion } from "motion/react";
import { cn } from "../../lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string[];
    image: string;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });

  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const breakpoints = content.map((_, i) => i / cardLength);
    const closestIndex = breakpoints.reduce((acc, bp, i) => {
      return Math.abs(latest - bp) < Math.abs(latest - breakpoints[acc])
        ? i
        : acc;
    }, 0);
    setActiveCard(closestIndex);
  });

  const backgroundColors = ["#0f172a", "#000000", "#171717"];

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="w-11/12 mx-auto relative flex h-[30rem] justify-center  space-x-10 overflow-y-auto scrollbar-none rounded-md p-10"
      ref={ref}
    >
      <div className="w-1/2 relative flex items-start px-20">
        <div className="">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-20">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                className="text-2xl font-bold text-slate-100"
              >
                {item.title}
              </motion.h2>

              <ul className="mt-6 list-disc pl-5 text-lg text-slate-300">
                {item.description.map((line, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                    transition={{ duration: 0.3, delay: idx * 0.1 }}
                  >
                    {line}
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>

      <div
        className={cn(
          "sticky top-10 hidden h-80 w-1/2 overflow-hidden rounded-md bg-cover bg-center lg:block",
          contentClassName
        )}
        style={{
          backgroundImage: `url(${content[activeCard].image})`,
        }}
      ></div>
    </motion.div>
  );
};
