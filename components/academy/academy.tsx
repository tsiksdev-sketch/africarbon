'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import { GraduationCap, Users, Monitor, Briefcase, Landmark, Layers, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const learningAreas = [
  "Carbon trading essentials",
  "Climate change and sustainability",
  "Carbon project development",
  "Article 6 readiness",
  "Renewable Energy Certificates and energy attribute markets",
  "ESG and sustainability reporting",
  "GHG accounting and carbon footprinting",
  "MRV systems",
  "Climate finance",
  "Policy and advocacy",
  "Sector-specific carbon project development",
  "Community climate action",
];

const formats = [
  { icon: Monitor, label: "Online self-paced courses" },
  { icon: Briefcase, label: "Executive masterclasses" },
  { icon: Users, label: "Customised corporate training" },
  { icon: Landmark, label: "Government and regulator training" },
  { icon: Layers, label: "Sector-specific workshops" },
  { icon: GraduationCap, label: "Technical clinics" },
  { icon: Users, label: "Institutional capacity-building programmes" },
  { icon: Monitor, label: "Research briefs and market intelligence notes" },
];

const audiences = [
  "Government and regulator teams",
  "Corporate sustainability and ESG teams",
  "Renewable energy producers",
  "Project developers and project owners",
  "Banks and financial institutions",
  "NGOs and community organisations",
  "Students, professionals and researchers",
  "Boards and executive teams",
];

const Academy = () => (
  <div className="min-h-screen">

    <section className="px-6 pb-16 pt-20">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-4xl rounded-2xl border border-border bg-card p-8 md:p-10"
      >
        <h2 className="font-heading text-2xl font-bold">Capacity building remains central to AICTS</h2>
        <p className="mt-4 text-muted-foreground">
          AICTS began with a strong training and capacity-building mandate. Today, AICTS Academy remains a core pillar
          within a wider advisory and implementation institution. The Academy helps clients move from awareness to
          practical readiness.
        </p>
      </motion.div>
    </section>

    <section className="px-6 pb-16">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-6 font-heading text-3xl font-bold">Training and learning areas</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 bg-">
          {learningAreas.map((a, i) => (
            <motion.div
              key={a}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.3, delay: (i % 6) * 0.04 }}
              className="flex items-start gap-3 rounded-lg border border-border bg-lime-500 text-white p-4 transition-colors hover:border-primary/40"
            >
              <Check className="mt-0.5 h-6 w-6 shrink-0 text-yellow-500" />
              <span className="text-sm">{a}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="px-6 pb-16">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-6 font-heading text-3xl font-bold">Delivery formats</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {formats.map((f, i) => (
            <motion.div
              key={f.label + i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.35, delay: (i % 4) * 0.05 }}
              className="rounded-xl border  border-lime-500 hover:bg-lime-600 hover:text-white p-5"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg  bg-lime-500 /10">
                <f.icon className="h-4 w-4 text-white" />
              </div>
              <p className="mt-3 text-sm font-medium">{f.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="px-6 pb-16">
      <div className="mx-auto max-w-5xl rounded-2xl border border-border bg-linear-to-br from-accent/10 to-transparent p-8 md:p-10">
        <h2 className="font-heading text-2xl font-bold">Who the Academy serves</h2>
        <div className="mt-6 grid gap-2 sm:grid-cols-2">
          {audiences.map((a) => (
            <div key={a} className="flex items-center gap-3 text-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              <span className="text-muted-foreground">{a}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="px-6 pb-32">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-3xl rounded-2xl border border-border bg-linear-to-br from-lime-600/30 to-transparent p-10 text-center"
      >
        <h2 className="font-heading text-3xl font-bold text-transparent bg-clip-text bg-linear-to-r from-emerald-500 via-lime-400 to-green-500">Build practical carbon market capacity</h2>
        <p className="mt-3 text-muted-foreground">
          Speak to AICTS Academy about online learning, executive training, regulator workshops or customised
          institutional programmes.
        </p>
        <Button  className="mt-6 bg-lime-500" asChild>
          <Link href="./contact">Request Training Support <ArrowRight className="h-4 w-4" /></Link>
        </Button>
      </motion.div>
    </section>

  
  </div>
);

export default Academy;
