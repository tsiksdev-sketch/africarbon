'use client'

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { principles , standards } from "@/constants";



const Governance = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 250]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.2]);

  return (
    <div className="min-h-screen">
     

      <section ref={ref} className="relative overflow-hidden pt-32 pb-24 px-6">
        <motion.div style={{ y, opacity }} className="absolute inset-0 -z-10 bg-(--gradient-hero)" />
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-primary">Trust</p>
          <h1 className="font-heading text-5xl font-bold md:text-6xl">
            Method &amp; <span className="text-gradient">Governance</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            How we choose what to teach, how we verify what we cite, and how we hold
            ourselves accountable when the science moves.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl flex flex-row">
              <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {principles.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="rounded-xl border border-border bg-card p-6"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <p.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="px-6 pb-32">
        <div className="mx-auto max-w-5xl rounded-2xl border border-border bg-linear-to-br from-primary/5 to-transparent p-10">
          <h2 className="font-heading text-3xl font-bold">Standards we audit against</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Every framework below shapes either our curriculum, our project selection,
            or how we vet the evidence we cite.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
            {standards.map((s) => (
              <div key={s.name} className="flex items-center justify-between rounded-lg border border-border bg-background/40 px-4 py-3">
                <span className="font-heading font-semibold">{s.name}</span>
                <span className="text-xs text-muted-foreground">{s.role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      </section>

     
    </div>
  );
};

export default Governance;
