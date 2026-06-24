'use client'

import { motion } from "framer-motion";
import Link from "next/link";
import { Calculator as Calc, BookOpen, ClipboardCheck, Gauge, BarChart3, ListChecks, ArrowRight, ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui/button";

const tools = [
  { icon: Calc, title: "Carbon Calculator", body: "Estimate emissions and begin understanding your carbon footprint. Use the result as a starting point, not a verified GHG inventory.", to: "/tools/carbon", cta: "Open calculator" },
  { icon: BookOpen, title: "Carbon Market Glossary", body: "Understand key terms across carbon credits, Article 6, RECs, ESG, MRV, climate finance and sustainability reporting.", to: "/tools/glossary", cta: "Browse glossary" },
  { icon: Gauge, title: "Carbon Opportunity Diagnostic", body: "A short readiness check for project owners exploring whether a project may have a credible carbon pathway.", to: "/tools/diagnostic", cta: "Start diagnostic" },
  { icon: ClipboardCheck, title: "REC Readiness Checklist", body: "A practical checklist for renewable energy producers preparing generator documentation, metering evidence and market-entry discussions.", to: "/tools/diagnostic", cta: "Get checklist" },
  { icon: BarChart3, title: "ESG and GHG Data Checklist", body: "A starting checklist for organisations preparing carbon footprint assessments, GHG inventories or ESG baseline reports.", to: "/tools/diagnostic", cta: "Get checklist" },
  { icon: ListChecks, title: "MRV Readiness Checklist", body: "A checklist for projects preparing monitoring plans, evidence files, stakeholder records and verification-readiness documentation.", to: "/tools/diagnostic", cta: "Get checklist" },
];

const Tools = () => (
  <div className="min-h-screen">
   

    

    <section id="tools" className="px-6 pb-16 py-20">
      <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2 lg:grid-cols-3">
        {tools.map((t, i) => (
          <motion.div
            key={t.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: (i % 3) * 0.06 }}
            whileHover={{ y: -4 }}
            className="group rounded-2xl border border-lime-500 bg-card p-6 transition-colors hover:border-primary/40"
          >
            <div className="flex items-center justify-center rounded-lg ">
              <t.icon className="h-5 w-5 text-lime-500" />
            </div>
            <h3 className="mt-4 font-heading text-lg font-semibold">{t.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{t.body}</p>
            <Button variant="ghost" size="sm" className="mt-4 -ml-3 text-emerald-500" asChild>
              <Link href={t.to}>{t.cta} <ArrowRight className="h-3.5 w-3.5" /></Link>
            </Button>
          </motion.div>
        ))}
      </div>
    </section>

    <section className="px-6 pb-16 py-20">
      <div className="mx-auto flex max-w-3xl gap-4 rounded-xl border border-dashed border-red-300 shadow-lg bg-card/40 p-6">
        <ShieldAlert className="h-5 w-5 shrink-0 text-red-500" />
        <p className="text-sm text-muted-foreground">
          <span className="font-semibold text-red-500">Disclaimer. </span>
          AICTS tools are for initial guidance only. They do not replace a full carbon footprint assessment, feasibility
          study, registry process, verification process, legal advice or financial advice.
        </p>
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
        <h2 className="font-heading text-3xl font-bold">Need help interpreting your results?</h2>
        <p className="mt-3 text-muted-foreground">
          AICTS can help translate your tool results into a practical advisory, training, project development or
          implementation pathway.
        </p>
        <Button  className="mt-6 bg-lime-500" asChild>
          <Link href="/contact">Speak to AICTS <ArrowRight className="h-4 w-4" /></Link>
        </Button>
      </motion.div>
    </section>

    
  </div>
);

export default Tools;
