'use client'

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { Trees, Heart, Sprout, Users, BookOpen, Globe, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const areas = [
  { icon: Trees, label: "Tree growing and restoration" },
  { icon: Sprout, label: "Climate-smart community initiatives" },
  { icon: BookOpen, label: "Environmental education" },
  { icon: Users, label: "School and community engagement" },
  { icon: Globe, label: "Climate resilience awareness" },
  { icon: Heart, label: "Grassroots sustainability programmes" },
];

const GrowATree = () => {


  return (
    <div className="min-h-screen">
     

      

      <section className="px-6 pb-16 py-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-4xl rounded-2xl border border-border bg-card p-8 md:p-10"
        >
          <h2 className="font-heading text-2xl font-bold">Why it matters</h2>
          <p className="mt-4 text-muted-foreground">
            Through Grow A Tree Foundation, AICTS connects technical carbon market and sustainability advisory work with
            community-based environmental action. This strengthens AICTS's development orientation and reinforces the
            belief that climate markets must support real people, ecosystems and communities.
          </p>
        </motion.div>
      </section>

      <section className="px-6 pb-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-6 font-heading text-3xl font-bold">Areas of community impact</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {areas.map((a, i) => (
              <motion.div
                key={a.label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.35, delay: (i % 3) * 0.06 }}
                whileHover={{ y: -4 }}
                className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <a.icon className="h-5 w-5 text-lime-500" />
                </div>
                <p className="mt-4 font-heading font-semibold">{a.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-4xl rounded-2xl border border-border bg-linear-to-br from-accent/10 to-transparent p-8 md:p-10"
        >
          <h2 className="font-heading text-2xl font-bold">A practical community foundation</h2>
          <p className="mt-4 text-muted-foreground">
            Grow A Tree Foundation gives AICTS a practical community foundation and helps ensure that technical climate
            work remains connected to local development needs.
          </p>
        </motion.div>
      </section>

      <section className="px-6 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl rounded-2xl border border-border bg-linear-to-br from-lime-600/30 to-transparent p-10 text-center"
        >
          <h2 className="font-heading text-3xl font-bold  text-transparent bg-clip-text bg-linear-to-r from-emerald-500 via-lime-400 to-green-500">Connect climate markets with community impact</h2>
          <p className="mt-3 text-muted-foreground">
            Speak to AICTS about restoration, education, community climate action or development-aligned sustainability
            programmes.
          </p>
          <Button  className="mt-6 bg bg-lime-500" asChild>
            <Link href="/contact">Contact AICTS <ArrowRight className="h-4 w-4" /></Link>
          </Button>
        </motion.div>
      </section>

      
    </div>
  );
};

export default GrowATree;
