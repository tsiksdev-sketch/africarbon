'use client'

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const TERMS: { term: string; short: string; long: string; tag: string }[] = [
  { term: "Scope 1", tag: "Emissions", short: "Direct emissions from owned sources.", long: "Fuels burned in company vehicles, boilers, furnaces, and fugitive refrigerant leaks." },
  { term: "Scope 2", tag: "Emissions", short: "Indirect emissions from purchased energy.", long: "Electricity, steam, heating and cooling bought from utilities. Reported as location- and market-based." },
  { term: "Scope 3", tag: "Emissions", short: "Value-chain emissions, up- and downstream.", long: "Purchased goods, business travel, employee commuting, use of sold products, end-of-life. Often >70% of footprint." },
  { term: "Additionality", tag: "Markets", short: "Reductions wouldn't have happened anyway.", long: "A project is additional if the carbon revenue is what enabled it — without crediting, the activity would not occur." },
  { term: "Leakage", tag: "Markets", short: "Emissions shifted, not avoided.", long: "When a project displaces emissions to another location or sector instead of eliminating them." },
  { term: "Permanence", tag: "Nature", short: "How long the carbon stays stored.", long: "Concerns whether stored carbon (e.g. in forests) might be re-released by fire, pests, or land-use change." },
  { term: "MRV", tag: "Standards", short: "Measurement, Reporting, Verification.", long: "The end-to-end process for quantifying climate outcomes and having them independently checked." },
  { term: "SBTi", tag: "Targets", short: "Science Based Targets initiative.", long: "Validates corporate emission reduction targets aligned with the Paris Agreement (1.5°C pathway)." },
  { term: "LCA", tag: "Methods", short: "Lifecycle Assessment.", long: "Cradle-to-grave evaluation of environmental impacts across raw materials, manufacturing, use and disposal." },
  { term: "Offsetting", tag: "Markets", short: "Compensating residual emissions.", long: "Buying verified credits for reductions or removals elsewhere — best used after deep internal reductions." },
  { term: "Net Zero", tag: "Targets", short: "Balanced sources and sinks.", long: "Cutting emissions by ~90% and neutralising the rest with high-quality removals — not the same as 'carbon neutral'." },
  { term: "tCO₂e", tag: "Units", short: "Tonnes of CO₂ equivalent.", long: "Standard unit normalising different greenhouse gases by their global warming potential (GWP)." },
];

const Glossary = () => {
  const [q, setQ] = useState("");
  const filtered = useMemo(
    () =>
      TERMS.filter(
        (t) =>
          t.term.toLowerCase().includes(q.toLowerCase()) ||
          t.short.toLowerCase().includes(q.toLowerCase()) ||
          t.tag.toLowerCase().includes(q.toLowerCase()),
      ),
    [q],
  );

  return (
    <div className="min-h-screen">
      
      <section className="px-6 pt-8 pb-12">
        <div className="mx-auto max-w-4xl text-center">
         
          <div className="relative mx-auto mt-10 max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search 'scope', 'leakage', 'MRV'…"
              value={q}
              onChange={(e) => setQ(e.target.value.slice(0, 60))}
              className="pl-10"
            />
          </div>
        </div>
      </section>

      <section className="px-6 pb-32">
        <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-2">
          {filtered.map((t, i) => (
            <motion.div
              key={t.term}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: (i % 6) * 0.05 }}
              className="group relative overflow-hidden rounded-xl border border-border bg-lime-500 p-6 transition-all hover:border-primary/40"
            >
              <div className="flex items-start justify-between">
                <h3 className="font-heading text-xl font-semibold text-yellow-300">{t.term}</h3>
                <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] uppercase tracking-wider text-white">
                  {t.tag}
                </span>
              </div>
              <p className="mt-2 text-sm text-white">{t.short}</p>
              <p className="mt-3 max-h-0 overflow-hidden text-sm text-white/80 opacity-0 transition-all duration-500 group-hover:max-h-40 group-hover:opacity-100">
                {t.long}
              </p>
            </motion.div>
          ))}
          {filtered.length === 0 && (
            <p className="col-span-2 text-center text-muted-foreground">No terms match "{q}".</p>
          )}
        </div>
      </section>
      
    </div>
  );
};

export default Glossary;
