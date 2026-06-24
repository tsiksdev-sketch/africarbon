'use client';

import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import z from "zod";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { steps } from "@/constants";

const schema = z.object({
  name: z.string().trim().min(2, "Name is required").max(80),
  email: z.string().trim().email("Invalid email").max(120),
  org: z.string().trim().max(120).optional(),
  goal: z.string().trim().max(500).optional(),
});

const Cohort = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.2]);



  const [form, setForm] = useState({ name: "", email: "", org: "", goal: "" });
  const [submitting, setSubmitting] = useState(false);

 const submit = (e: React.FormEvent) => {
  e.preventDefault();

  const result = schema.safeParse(form);

  const [status, setStatus] = useState<null | { type: "success" | "error"; message: string }>(null);

  // Replace toast with inline status message
  if (!result.success) {
    setStatus({
      type: "error",
      message: result.error.issues[0]?.message ?? "Check your details",
    });
    return;
  }

  setSubmitting(true);
  setStatus(null);

  setTimeout(() => {
    setStatus({
      type: "success",
      message: "Application received. We'll be in touch within 3 business days.",
    });

    setForm({ name: "", email: "", org: "", goal: "" });
    setSubmitting(false);
  }, 600);
};


  return (
    <div ref={ref} className="min-h-screen relative overflow-hidden">
    <motion.div
  style={{ y, opacity }}
  className="absolute inset-0 -z-10 bg-[radial-gradient(900px_circle_at_20%_15%,rgba(16,185,129,0.55),transparent_55%),radial-gradient(1000px_circle_at_85%_5%,rgba(163,230,53,0.45),transparent_60%),linear-gradient(135deg,rgba(16,185,129,0.20),rgba(163,230,53,0.18),transparent_70%)]"
/>

      <section  className="relative overflow-hidden pt-32 pb-20 px-6">
        <motion.div style={{ y }} className="absolute inset-0 -z-10 bg-(--gradient-hero)" />
         
        <div className="mx-auto max-w-3xl text-center">
       
          <h1 className="font-heading text-2xl font-bold md:text-6xl  text-transparent bg-clip-text bg-linear-to-r from-emerald-500 via-lime-400 to-green-500">
            Decarbonization Sprint
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            A four-week intensive cohort for sustainability leads, founders, and policy
            teams ready to move from ambition to roadmap.
          </p>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-xl border border-border text-white hover:text-lime-300 bg-lime-400 hover:bg-card hover:border-lime-500 p-6"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10">
                <s.icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="font-heading font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm  ">{s.body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="px-6 pb-32">
        <div className="mx-auto max-w-2xl rounded-2xl border border-lime-500/60 bg-card p-8">
          <h2 className="font-heading text-2xl font-bold">Apply for the next cohort</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Cohorts run quarterly · 24 seats · scholarships available.
          </p>
          <form onSubmit={submit} className="mt-6 space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Full name</Label>
                <Input id="name" value={form.name} maxLength={80} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" value={form.email} maxLength={120} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="org">Organisation</Label>
              <Input id="org" value={form.org} maxLength={120} onChange={(e) => setForm({ ...form, org: e.target.value })} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="goal">What do you want to leave with?</Label>
              <Textarea id="goal" rows={4} value={form.goal} maxLength={500} onChange={(e) => setForm({ ...form, goal: e.target.value })} />
            </div>
            <Button type="submit" className="w-full bg-lime-500" disabled={submitting}>
              {submitting ? "Submitting…" : "Submit application"}
            </Button>
          </form>
        </div>
      </section>

     
    </div>
  );
};

export default Cohort;
