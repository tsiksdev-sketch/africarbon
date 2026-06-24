'use client'

import { ReactNode, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Check, Sparkles, FileText, ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui/button";

export type ServicePageProps = {


  who: string;
  how: string;
  delivers: string[];
  outputs: string[];
  integrityNote?: string;
  finalCta: { heading: string; copy: string; button: string; to: string };
};

const fade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.5 },
};

const ServicePageLayout = (p: ServicePageProps) => {

  return (
    <div className="min-h-screen">
  


      <section className="px-6 pb-16 py-20">
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          <motion.div {...fade} className="rounded-2xl border border-border bg-card p-7">
            <p className="text-xs uppercase tracking-[0.2em] text-primary">Who this is for</p>
            <p className="mt-4 text-muted-foreground">{p.who}</p>
          </motion.div>
          <motion.div {...fade} transition={{ duration: 0.5, delay: 0.08 }} className="rounded-2xl border border-border bg-card p-7">
            <p className="text-xs uppercase tracking-[0.2em] text-primary">How AICTS helps</p>
            <p className="mt-4 text-muted-foreground">{p.how}</p>
          </motion.div>
        </div>
      </section>

      <section className="px-6 pb-16">
        <div className="mx-auto max-w-5xl">
          <motion.h2 {...fade} className="font-heading text-3xl font-bold">What we deliver</motion.h2>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {p.delivers.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.35, delay: (i % 8) * 0.03 }}
                className="group flex items-start gap-3 rounded-lg border border-lime-500 bg-card p-4 transition-colors hover:border-primary/40"
              >
                <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <Check className="h-3.5 w-3.5 text-lime-500" />
                </div>
                <span className="text-sm">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-16">
        <div className="mx-auto max-w-5xl rounded-2xl border border-border bg-linear-to-br from-emerald-600/40 to-transparent p-8 md:p-10">
          <div className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-lime-500" />
            <h2 className="font-heading text-2xl font-bold">Typical outputs</h2>
          </div>
          <div className="mt-6 grid gap-2 sm:grid-cols-2 md:grid-cols-3">
            {p.outputs.map((o, i) => (
              <motion.div
                key={o}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.3, delay: (i % 9) * 0.03 }}
                className="rounded-lg border border-border/60 bg-background/40 px-3 py-2 text-sm"
              >
                {o}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {p.integrityNote && (
        <section className="px-6 pb-16">
          <motion.div {...fade} className="mx-auto flex max-w-3xl gap-4 rounded-xl border border-dashed border-red-500 shadow-lg bg-card/40 p-6">
            <ShieldAlert className="h-5 w-5 shrink-0 text-red-500" />
            <p className="text-sm text-muted-foreground"><span className="font-semibold text-red-500">Integrity note. </span>{p.integrityNote}</p>
          </motion.div>
        </section>
      )}

      <section className="px-6 pb-32">
        <motion.div {...fade} className="mx-auto max-w-3xl rounded-2xl border border-border bg-linear-to-br from-lime-600/30 to-transparent p-10 text-center">
          <Sparkles className="mx-auto h-7 w-7 text-lime-500" />
          <h2 className="mt-4 font-heading text-3xl font-bold text-transparent bg-clip-text bg-linear-to-r from-emerald-500 via-lime-400 to-green-500">{p.finalCta.heading}</h2>
          <p className="mt-3 text-muted-foreground">{p.finalCta.copy}</p>
          <Button  className="mt-6 bg-lime-500" asChild>
            <Link href={p.finalCta.to}>{p.finalCta.button} <ArrowRight className="h-4 w-4" /></Link>
          </Button>
        </motion.div>
      </section>

  
    </div>
  );
};

export default ServicePageLayout;
