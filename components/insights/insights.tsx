'use client'
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BookOpen, Search, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const categories = [
  { key: "carbon", label: "Carbon Markets", body: "Project eligibility, methodology selection, baselines, credit integrity, validation, verification and market-readiness guidance." },
  { key: "policy", label: "Article 6 and Policy", body: "Host-country systems, authorisation, national frameworks, safeguards, benefit sharing and regulatory readiness." },
  { key: "recs", label: "RECs and Energy Attribute Markets", body: "Generator readiness, buyer claims, Scope 2 electricity, registry-related preparation and market-development insights." },
  { key: "esg", label: "ESG and GHG Accounting", body: "Carbon footprinting, GHG inventories, ESG baselines, sustainability reporting and emissions reduction roadmaps." },
  { key: "mrv", label: "MRV and Safeguards", body: "Monitoring systems, evidence files, data quality, stakeholder engagement, FPIC and verification-readiness." },
  { key: "finance", label: "Climate Finance", body: "Investor readiness, project concept notes, carbon and REC value analysis, funding narratives and due diligence preparation." },
];

const articles = [
  { title: "How African Project Owners Can Assess Carbon Market Readiness", cat: "carbon", read: "8 min", date: "May 2026" },
  { title: "RECs in Africa: What Renewable Energy Producers Need to Prepare", cat: "recs", read: "6 min", date: "Apr 2026" },
  { title: "Article 6 Readiness: Why Host-Country Systems Matter", cat: "policy", read: "10 min", date: "Apr 2026" },
  { title: "From Carbon Footprint to ESG Roadmap: A Practical Pathway for Companies", cat: "esg", read: "7 min", date: "Mar 2026" },
  { title: "MRV as the Integrity Backbone of Carbon Projects and Climate Finance", cat: "mrv", read: "9 min", date: "Mar 2026" },
];

const Insights = () => {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<string>("all");

  const filtered = useMemo(
    () =>
      articles.filter((a) => {
        const mq = !q || a.title.toLowerCase().includes(q.toLowerCase());
        const mc = cat === "all" || a.cat === cat;
        return mq && mc;
      }),
    [q, cat],
  );

  return (
    <div className="min-h-screen">
 

     

      <section className="px-6 pb-16 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-6 font-heading text-2xl font-bold">Featured categories</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((c, i) => (
              <motion.button
                key={c.key}
                onClick={() => { setCat(c.key); document.getElementById("articles")?.scrollIntoView({ behavior: "smooth" }); }}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.35, delay: (i % 3) * 0.05 }}
                whileHover={{ y: -4 }}
                className="group rounded-xl border border-lime-500 bg-card p-6 text-left transition-colors hover:border-primary/40"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
                  <BookOpen className="h-4 w-4 text-lime-500" />
                </div>
                <h3 className="mt-4 font-heading text-lg font-semibold">{c.label}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.body}</p>
                <p className="mt-4 inline-flex items-center gap-1 text-xs text-primary opacity-0 transition-opacity group-hover:opacity-100">
                  Filter articles <ArrowRight className="h-3 w-3" />
                </p>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      <section id="articles" className="px-6 pb-32">
        <div className="mx-auto max-w-4xl">
          <div className="mb-6 flex flex-col gap-4 rounded-2xl border border-border bg-card p-5 md:flex-row md:items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search articles..." className="pl-9" />
            </div>
            <div className="flex flex-wrap gap-2">
              {[{ key: "all", label: "All" }, ...categories].map((c) => (
                <button
                  key={c.key}
                  onClick={() => setCat(c.key)}
                  className={`rounded-full border px-3 py-1 text-xs transition-colors ${
                    cat === c.key ? "border-primary bg-emerald-600 text-white" : "border-border text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            {filtered.map((a, i) => (
              <motion.article
                key={a.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
                className="group cursor-pointer rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary"
              >
                <p className="text-xs uppercase tracking-wider text-primary">
                  {categories.find((c) => c.key === a.cat)?.label} · {a.date} · {a.read} read
                </p>
                <h3 className="mt-2 font-heading text-xl font-semibold transition-colors group-hover:text-primary">{a.title}</h3>
                <p className="mt-3 inline-flex items-center gap-1 text-sm text-emerald-500">Read article <ArrowRight className="h-3.5 w-3.5" /></p>
              </motion.article>
            ))}
            {filtered.length === 0 && (
              <p className="py-12 text-center text-sm text-muted-foreground">No articles match.</p>
            )}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-16 rounded-2xl border border-border bg-linear-to-br from-lime-600/30 to-transparent p-10 text-center"
          >
            <h2 className="font-heading text-3xl font-bold text-transparent bg-clip-text bg-linear-to-r from-emerald-500 via-lime-400 to-green-500">Need practical guidance for your organisation?</h2>
            <p className="mt-3 text-muted-foreground">
              AICTS can turn insight into action through advisory support, training, diagnostics and implementation planning.
            </p>
            <Button  className="mt-6 bg-lime-500" asChild>
              <Link href="./contact">Contact AICTS <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          </motion.div>
        </div>
      </section>

     
    </div>
  );
};

export default Insights;
