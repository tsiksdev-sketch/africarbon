"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { stats} from '@/constants';


const StatsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);

  return (
    <section ref={ref} className="relative overflow-hidden py-32 bg-green-800" >
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 -z-10 bg-green-600"
        
      />
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-12 px-6 md:grid-cols-6">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="text-center"
          >
            <p className="font-heading text-[16px] font-bold text-lime-500 md:text-[18px]">
              {stat.label}
            </p>
            <p className="mt-2 text-[16px] text-white">{stat.value}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
