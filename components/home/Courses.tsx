"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { courses } from "@/constants";


const CoursesSection = () => {
  const ref = useRef<HTMLDivElement>(null);

  // ✅ trigger every time section enters viewport (no once: true)
  const inView = useInView(ref, { margin: "-100px", amount: 0.1 });

  return (
    <section className="py-20 px-6 bg-slate-100">
      <div ref={ref} className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-primary">
           Services
        </p>
          <h2 className="font-heading text-2xl font-bold md:text-5xl text-transparent bg-clip-text bg-linear-to-r from-emerald-500 via-lime-400 to-green-500">
           Our integrated service pillars
          </h2>

          <p className="mb-3 text-[16px] leading-relaxed p-2  text-muted-foreground">
             AICTS works across seven connected pillars that help clients move from early-stage awareness to credible implementation.
          </p>
        </motion.div>

        <div className="flex flex-col gap-6">
          {courses.map((course, i) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
              animate={
                inView
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: i % 2 === 0 ? -60 : 60 }
              }
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="group flex flex-col justify-between gap-6 rounded-xl border border-border bg-lime-500 p-8 transition-all duration-300 hover:border-yellow-400 md:flex-row md:items-center"
            >
              <div className="flex-1">
                <div className="mb-2 flex items-center gap-3">
                  
                </div>
                <h3 className="mb-2 font-heading text-2xl font-semibold">{course.title}</h3>
                <p className="text-[16px] text-white">{course.description}</p>
              </div>

              <div className="flex items-center gap-8">
              

                <Link href={course.src} className="flex items-center gap-2">
                  <Button variant="ghost" size="icon" className="text-white">
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </Link>
                
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;