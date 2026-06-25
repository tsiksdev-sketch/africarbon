'use client'

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { Zap, Globe, Sun, MapPin, ArrowRight, Check, ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui/button";

const supports = [
  "REC awareness and education",
  "Generator readiness assessment",
  "Device and generation documentation review",
  "Metering and evidence readiness support",
  "Buyer education",
  "Scope 2 electricity claims advisory",
  "Registry-related preparation support",
  "Market development and stakeholder engagement",
];

const initiatives = [
  {
    code: "ZAM-REC",
    flag: "🇿🇲",
    country: "Zambia",
    body: "An AICTS-led initiative supporting Zambia's renewable energy certificate ecosystem. It focuses on market awareness, generator readiness, stakeholder education, documentation support and REC market-entry preparation.",
  },
  {
    code: "ZIM-REC",
    flag: "🇿🇼",
    country: "Zimbabwe",
    body: "An AICTS-led initiative delivered through a partnership model in Zimbabwe. It supports REC market development, renewable energy producer engagement, stakeholder awareness and documentation readiness.",
  },
];

const AfricaRECs = () => {
  

  return (
    <div className="min-h-screen">
    

      <section className="px-6 pb-16 py-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-4xl rounded-2xl border border-border bg-card p-8 md:p-10"
        >
          <div className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-yellow-500" />
            <h2 className="font-heading text-2xl font-bold">Why RECs matter</h2>
          </div>
          <p className="mt-4 text-muted-foreground">
            Renewable Energy Certificates help renewable energy producers demonstrate generation attributes and help
            buyers make more credible renewable electricity claims. For African markets, REC systems can strengthen
            transparency, support renewable energy growth and create new pathways for generator and buyer participation.
          </p>
        </motion.div>
      </section>

      <section className="px-6 pb-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-6 font-heading text-3xl font-bold">What Africa RECs supports</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {supports.map((s, i) => (
              <motion.div
                key={s}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                className="flex items-start gap-3 rounded-lg border border-border bg-emerald-500 text-white p-4"
              >
                <Check className="mt-0.5 h-4 w-4 shrink-0 " />
                <span className="text-sm">{s}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-16">
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          {initiatives.map((i) => (
            <motion.div
              key={i.code}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden rounded-2xl border border-border bg-card"
            >
              <div className="flex items-center justify-between border-b border-border bg-linear-to-br from-lime-600/30 to-transparent p-6">
                <div>
                  <p className="font-heading text-2xl font-bold">{i.code}</p>
                  <p className="mt-1 inline-flex items-center gap-1 text-xs text-muted-foreground">
                    <MapPin className="h-3 w-3 text-lime-700"  /> {i.country}
                  </p>
                </div>
                <span className="text-4xl">{i.flag}</span>
              </div>
              <p className="p-6 text-sm text-muted-foreground">{i.body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="px-6 pb-16">
        <div className="mx-auto flex max-w-3xl gap-4 rounded-xl border border-dashed border-red-300 shadow-lg p-6">
          <ShieldAlert className="h-5 w-5 shrink-0 text-red-500" />
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-red-500">Important market integrity note. </span>
            AICTS provides readiness, advisory and documentation support in relation to applicable REC and registry
            processes. Unless formally confirmed, references to registries, standards or market actors should not be
            read as legal partnership, accreditation or endorsement.
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
          <Globe className="mx-auto h-7 w-7 text-lime-700" />
          <h2 className="mt-4 font-heading text-3xl font-bold text-transparent bg-clip-text bg-linear-to-r from-emerald-500 via-lime-400 to-green-500">Are you a renewable energy producer or buyer?</h2>
          <p className="mt-3 text-muted-foreground">
            AICTS can help assess REC readiness, documentation, metering evidence and buyer-facing communication.
          </p>
          <p className="mt-3 text-muted-foreground">
            Visit the Africa RECs platform to understand Renewable Energy Certificates , request information, assess REC readiness, share generator details, or begin registration support for your renewable energy project.
          </p>
          <div className="flex gap-4 justify-center mt-6 flex-wrap">
             <Button  className="mt-6 bg-lime-500" asChild>
            <Link href="/start-a-diagnostic">Request REC Support <ArrowRight className="h-4 w-4" /></Link>
          </Button>
           <Button  className="mt-6 bg-emerald-500" asChild>
            <Link href="https://africarecs.com/">If you want to register Visit  <ArrowRight className="h-4 w-4" /></Link>
          </Button>
          </div>
         
        </motion.div>
      </section>

     
    </div>
  );
};

export default AfricaRECs;
