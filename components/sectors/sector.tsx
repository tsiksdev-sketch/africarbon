'use client'

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Zap, Landmark, Mountain, Building2, Cpu, Trees, Droplets, Factory, Recycle, GraduationCap, ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const sectors = [
  { key: "energy", icon: Zap, label: "Energy", body: "We support renewable energy developers, independent power producers and energy stakeholders with carbon project screening, REC readiness, baseline assessment, MRV design, climate finance documentation and market-entry support." },
  { key: "banking", icon: Landmark, label: "Banking and Finance", body: "We support financial institutions with carbon footprint assessments, ESG reporting, sustainability strategy, climate finance readiness, green product development support and carbon market capacity building." },
  { key: "mining", icon: Mountain, label: "Mining and Industry", body: "We support mining and industrial stakeholders with carbon footprinting, ESG baselines, sustainability reporting, restoration opportunities, renewable energy transition pathways, stakeholder engagement and climate finance readiness." },
  { key: "public", icon: Building2, label: "Public Sector", body: "We support government and public-sector institutions with carbon market policy advisory, Article 6 readiness, regulatory frameworks, stakeholder consultations and capacity building." },
  { key: "tech", icon: Cpu, label: "Technology", body: "We support technology stakeholders with sustainability positioning, carbon data systems, digital MRV, ESG reporting, climate innovation and platform-based market enablement." },
  { key: "agri", icon: Trees, label: "Agriculture and Forestry", body: "We support climate-smart agriculture, agroforestry, REDD+, restoration and land-use initiatives with carbon feasibility, stakeholder engagement, safeguards, MRV and climate finance preparation." },
  { key: "water", icon: Droplets, label: "Water and Sanitation", body: "We support water access and sanitation programmes with carbon opportunity assessment, climate finance concepts, stakeholder engagement, MRV and community resilience framing." },
  { key: "manuf", icon: Factory, label: "Manufacturing", body: "We help manufacturers measure emissions, develop reduction pathways, improve ESG reporting and prepare for evolving buyer, investor and regulatory expectations." },
  { key: "waste", icon: Recycle, label: "Waste and Circular Economy", body: "We support waste-sector stakeholders to assess emissions reduction, methane avoidance, circular economy and carbon finance opportunities." },
  { key: "ngo", icon: GraduationCap, label: "Education, NGOs and Development Finance", body: "We support learning institutions, NGOs and development finance actors with capacity building, programme design, carbon readiness, safeguards, MRV, sustainability reporting and climate finance documentation." },
];

const Sectors = () => {
  const [open, setOpen] = useState<string | null>("energy");

  return (
    <div className="min-h-screen">
 

      <section className="px-6 pb-32 pt-20">
        <div className="mx-auto max-w-5xl space-y-3">
          {sectors.map((s, i) => {
            const isOpen = open === s.key;
            return (
              <motion.div
                key={s.key}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.35, delay: (i % 6) * 0.04 }}
                className={`overflow-hidden rounded-xl border border-emerald-500 transition-colors ${isOpen ? "border-primary/40 bg-card" : "border-border bg-card"}`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : s.key)}
                  className="flex w-full items-center gap-4 p-5 text-left"
                >
                  <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition-colors ${isOpen ? "bg-lime-500 " : "bg-lime-200 text-primary"}`}>
                    <s.icon className="h-4 w-4 text text-yellow-300" />
                  </div>
                  <span className="flex-1 font-heading text-lg font-semibold">{s.label}</span>
                  <span className={`text-2xl text-muted-foreground transition-transform ${isOpen ? "rotate-45" : ""}`}>+</span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="px-5 pb-5 pl-19 text-sm text-muted-foreground">{s.body}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mt-16 max-w-3xl rounded-2xl border border-border bg-linear-to-br from-lime-600/30 to-transparent p-10 text-center"
        >
          <h2 className="font-heading text-3xl font-bold text-transparent bg-clip-text bg-linear-to-r from-emerald-500 via-lime-400 to-green-500">Need a sector-specific approach?</h2>
          <p className="mt-3 text-muted-foreground">
            AICTS can tailor carbon, REC, ESG, MRV, policy or climate finance support to your sector and country context.
          </p>
          <Button  className="mt-6 bg-lime-500" asChild>
            <Link href="./contact">Speak to AICTS <ArrowRight className="h-4 w-4" /></Link>
          </Button>
        </motion.div>
      </section>

    
    </div>
  );
};

export default Sectors;
