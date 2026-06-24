'use client'

import { motion } from "framer-motion";
import { X, Check } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { myths } from "@/constants";


const Mythbusters = () => (
  <div className="min-h-screen">
   

   

    <section className="px-6 pb-45">
      <div className="mx-auto max-w-3xl space-y-6">
        {myths.map((m, i) => (
          <motion.div
            key={m.myth}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="overflow-hidden rounded-2xl border border-border "
          >
            <div className="flex gap-4 border-b border-border bg-destructive/5 p-6">
              <X className="h-6 w-6 shrink-0 text-destructive" />
              <p className="font-heading text-lg font-semibold">{m.myth}</p>
            </div>
            <div className="flex gap-4 p-6 bg-lime-500">
              <Check className="h-6 w-6 shrink-0 text-yellow-500" />
              <p className="text-white">{m.truth}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mx-auto mt-20 max-w-3xl rounded-2xl border border-border bg-card p-8">
        <h2 className="font-heading text-2xl font-bold">Frequently asked objections</h2>
        <Accordion type="single" collapsible className="mt-4">
          <AccordionItem value="i1">
            <AccordionTrigger>Are credits really "additional"?</AccordionTrigger>
            <AccordionContent>
              Additionality is tested via baseline scenarios, financial-barrier analysis,
              and regulatory tests. ICVCM-labelled credits meet a higher bar than
              legacy methodologies.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="i2">
            <AccordionTrigger>What stops double counting?</AccordionTrigger>
            <AccordionContent>
              Registries serialize each tonne with a unique ID; retirement is public.
              Corresponding adjustments under Article 6 prevent host countries and
              buyers from claiming the same reduction.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="i3">
            <AccordionTrigger>Why trust verification bodies?</AccordionTrigger>
            <AccordionContent>
              Validators are accredited under ISO 14065 and rotated to limit capture.
              Recent reforms also separate validation from verification.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>

  </div>
);

export default Mythbusters;
