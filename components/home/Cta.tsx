"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const CTASection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.95, 1]);

  // Make the pattern subtly shift (but keep it always visible)
  const tileShiftX = useTransform(scrollYProgress, [0, 1], ["0%", "-6%"]);
  const tileShiftY = useTransform(scrollYProgress, [0, 1], ["0%", "5%"]);

  // Slight “throb” of saturation/contrast via opacity (never to 0)
  const patternOpacity = useTransform(scrollYProgress, [0, 1], [0.18, 0.32]);

  return (
    <section ref={ref} className="px-6 py-5  md:py-20">
      <motion.div
        style={{ scale }}
        className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-lime-500 bg-card p-6 md:p-16 text-center relative"
      >
        {/* Pattern tiles background (emerald + lime only, always visible) */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden rounded-2xl">
          {/* Base radial texture (no yellow) */}
          <div className="absolute inset-0 bg-[radial-gradient(800px_circle_at_20%_10%,rgba(16,185,129,0.35),transparent_55%),radial-gradient(900px_circle_at_85%_0%,rgba(163,230,53,0.28),transparent_60%)]" />

          {/* Moving tile overlay */}
          <motion.div
            style={{
              x: tileShiftX,
              y: tileShiftY,
              opacity: patternOpacity,
            }}
            className="absolute inset-0"
          >
            {/* Tiles using multiple repeating-linear-gradients */}
            <div
              className="h-full w-full bg-[
                repeating-linear-gradient(90deg,rgba(16,185,129,0.20)_0px,rgba(16,185,129,0.20)_1px,transparent_1px,transparent_22px),
                repeating-linear-gradient(0deg,rgba(163,230,53,0.18)_0px,rgba(163,230,53,0.18)_1px,transparent_1px,transparent_22px),
                repeating-linear-gradient(45deg,rgba(16,185,129,0.10)_0px,rgba(16,185,129,0.10)_1px,transparent_1px,transparent_22px),
                repeating-linear-gradient(-45deg,rgba(163,230,53,0.10)_0px,rgba(163,230,53,0.10)_1px,transparent_1px,transparent_22px)
              ]"
            />
          </motion.div>

          {/* A second pattern layer for richness, also always visible */}
          <div className="absolute inset-0 opacity-60 mix-blend-overlay">
            <div className="absolute inset-0 bg-[radial-gradient(2px_2px_at_20%_30%,rgba(163,230,53,0.55),transparent_60%),radial-gradient(2px_2px_at_70%_40%,rgba(16,185,129,0.5),transparent_60%),radial-gradient(2px_2px_at_40%_80%,rgba(163,230,53,0.45),transparent_60%)]" />
          </div>
        </div>

        {/* Content */}
        <motion.h2
          // Never fade away; only allow small rise when in view
          initial={false}
          animate={inView ? { y: 0 } : { y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-heading text-2xl font-bold md:text-5xl text-transparent bg-clip-text bg-linear-to-r from-emerald-400 via-lime-300 to-emerald-200"
        >
         Ready to structure your climate {" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-lime-300 to-emerald-300">
            Opportunity 
          </span>
          ?
        </motion.h2>

        <motion.p
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mt-6 max-w-xl text-[18px] text-muted-foreground"
        >
         Speak to AICTS about carbon markets, RECs, ESG, MRV, Article 6, policy, climate finance or capacity-building support.
        </motion.p>

        <motion.div
          className="mt-10"
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {/* Interactive hover */}
          <motion.div
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            <Link href='/courses'>
              <Button size="lg" className="bg-lime-500 text-white">
             Start a Conversation
            </Button>
            </Link>
            
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CTASection;