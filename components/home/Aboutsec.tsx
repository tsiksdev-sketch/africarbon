"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { features, features2 } from "@/constants";
import { useLanguage } from "@/lib/i18n/language-context";




const FeaturesSection = () => {
  const { t } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);

  // ✅ triggers every time you re-enter the viewport
  const inView = useInView(ref, { margin: "-100px", amount: 0.1 });

  return (
    <section className="relative overflow-hidden py-20 px-6 bg-no-repeat bg-center bg-fixed">
      {/* Rotating background layer */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-center bg-no-repeat bg-fixed "
          style={{ backgroundImage: "url(/map.webp)" }}
        />
        {/* Optional: subtle overlay so content remains readable */}
        <div className="absolute inset-0 " />
      </div>

      {/* Rotate the layer via Tailwind arbitrary animation */}
      <style jsx>{`
        div[style*="map.webp"] {
          transform-origin: center;
          animation: mapSpin 14s linear infinite;
          /* scale so corners aren't visible while rotating */
          transform: scale(1.08);
        }

        @keyframes mapSpin {
          from {
            transform: scale(1.08) rotate(0deg);
          }
          to {
            transform: scale(1.08) rotate(360deg);
          }
        }
      `}</style>

      {/* Content */}
      <div ref={ref} className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-primary">
                What AICTS supports
          </p>
          <h2 className="font-heading text-2xl p-2 font-bold md:text-5xl text-transparent bg-clip-text bg-linear-to-r from-emerald-500 via-lime-400 to-green-500">
           A regional implementation partner for Africa’s climate economy
          </h2>
            
            <p className="mb-3 text-[16px] leading-relaxed p-2  text-muted-foreground">
             Africa's climate opportunity is growing, but market participation requires more than ambition. Projects, institutions and countries need credible policy, reliable data, documented baselines, stakeholder confidence, MRV systems and finance-ready evidence. AICTS supports this transition by combining carbon market knowledge, policy understanding, project development, stakeholder engagement, climate finance preparation and capacity building.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={
                inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
              }
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group rounded-xl border border-border bg-card p-8 transition-all duration-300 hover:border-lime-400 hover:shadow-(--shadow-glow)"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-lime-400/70 text-primary transition-colors group-hover:bg-primary/20">
                <feature.icon className="h-6 w-6 text-emerald-900" />
              </div>
              <h3 className="mb-3 font-heading text-lg ">
                {t(feature.title)}
              </h3>
             
            </motion.div>
          ))}

           {features2.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={
                inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
              }
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group rounded-xl border border-border bg-card p-8 transition-all duration-300 hover:border-lime-400 hover:shadow-(--shadow-glow)"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-lime-400/70 text-primary transition-colors group-hover:bg-primary/20">
                <feature.icon className="h-6 w-6 text-emerald-900" />
              </div>
              <h3 className="mb-3 font-heading text-lg ">
                {t(feature.title)}
              </h3>
            
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;