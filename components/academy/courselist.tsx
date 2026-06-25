'use client'

import { useMemo, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { Clock, Users, Award, BookOpen, Filter, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type Level = "Beginner" | "Intermediate" | "Advanced";
type Track = "Fundamentals" | "Strategy" | "Markets" | "Policy" | "Technical";

type Course = {
  slug: string;
  title: string;
  level: Level;
  track: Track;
  duration: string;
  students: string;
  hours: number;
  description: string;
  outcomes: string[];
  certificate: boolean;
};

const courses: Course[] = [
  {
    slug: "carbon-fundamentals",
    title: "Carbon Fundamentals",
    level: "Beginner",
    track: "Fundamentals",
    duration: "6 weeks",
    students: "3,200+",
    hours: 24,
    description: "Build a solid foundation in carbon science, GHG inventories, and climate policy.",
    outcomes: ["Read a corporate GHG inventory", "Distinguish Scope 1, 2, and 3", "Interpret IPCC scenarios"],
    certificate: true,
  },
  {
    slug: "advanced-decarbonization",
    title: "Advanced Decarbonization",
    level: "Intermediate",
    track: "Strategy",
    duration: "8 weeks",
    students: "1,800+",
    hours: 40,
    description: "Deep-dive into SBTi targets, lifecycle analysis, and sector-specific abatement strategies.",
    outcomes: ["Set SBTi-aligned targets", "Run an LCA at product level", "Build a marginal abatement curve"],
    certificate: true,
  },
  {
    slug: "carbon-markets-expert",
    title: "Carbon Markets Expert",
    level: "Advanced",
    track: "Markets",
    duration: "10 weeks",
    students: "950+",
    hours: 50,
    description: "Master voluntary and compliance markets, project development, MRV systems, and integrity frameworks.",
    outcomes: ["Evaluate credit quality", "Structure a project pipeline", "Audit MRV documentation"],
    certificate: true,
  },
  {
    slug: "policy-and-regulation",
    title: "Climate Policy & Regulation",
    level: "Intermediate",
    track: "Policy",
    duration: "6 weeks",
    students: "1,100+",
    hours: 28,
    description: "Navigate CBAM, CSRD, EU ETS, and the global patchwork of disclosure rules.",
    outcomes: ["Map disclosure obligations", "Model CBAM exposure", "Brief a board on policy risk"],
    certificate: true,
  },
  {
    slug: "supply-chain-emissions",
    title: "Supply Chain Emissions",
    level: "Intermediate",
    track: "Technical",
    duration: "5 weeks",
    students: "1,400+",
    hours: 22,
    description: "Tackle Scope 3 with hybrid methods, supplier engagement, and primary-data programs.",
    outcomes: ["Run a hybrid Scope 3 inventory", "Design a supplier program", "Prioritize hotspots"],
    certificate: true,
  },
  {
    slug: "nature-based-solutions",
    title: "Nature-Based Solutions",
    level: "Beginner",
    track: "Markets",
    duration: "4 weeks",
    students: "780+",
    hours: 16,
    description: "Forests, soils, wetlands — what works, what's overstated, and what to fund credibly.",
    outcomes: ["Assess permanence risk", "Read additionality claims", "Compare leading registries"],
    certificate: false,
  },
];

const levels: ("All" | Level)[] = ["All", "Beginner", "Intermediate", "Advanced"];
const tracks: ("All" | Track)[] = ["All", "Fundamentals", "Strategy", "Markets", "Policy", "Technical"];

const Courses = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 220]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.2]);

  const [query, setQuery] = useState("");
  const [level, setLevel] = useState<(typeof levels)[number]>("All");
  const [track, setTrack] = useState<(typeof tracks)[number]>("All");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return courses.filter((c) => {
      if (level !== "All" && c.level !== level) return false;
      if (track !== "All" && c.track !== track) return false;
      if (q && !`${c.title} ${c.description} ${c.track}`.toLowerCase().includes(q)) return false;
      return true;
    });
  }, [query, level, track]);

  return (
    <div className="min-h-screen">
      <section
        ref={ref}
        className="relative overflow-hidden pt-10 pb-10 px-6"
      >
        {/* Lime/Emerald hero gradient */}
        <motion.div
          style={{ y, opacity }}
          className="absolute inset-0 -z-10 bg-[radial-gradient(800px_circle_at_20%_10%,rgba(110,231,183,0.35),transparent_50%),radial-gradient(900px_circle_at_80%_0%,rgba(163,230,53,0.25),transparent_55%),linear-gradient(180deg,rgba(16,185,129,0.12),transparent)]"
        />

        {/* Optional subtle top border glow */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-emerald-400/70 via-lime-400/70 to-emerald-400/70" />

        <div className="mx-auto max-w-3xl text-center">
    

          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-emerald-400" /> 6 active courses
            </span>
            <span className="flex items-center gap-2">
              <Award className="h-4 w-4 text-emerald-400" /> Verified certificates
            </span>
            <span className="flex items-center gap-2">
              <Users className="h-4 w-4 text-emerald-400" /> 9,000+ alumni
            </span>
          </div>
        </div>
      </section>

      <section className="px-6 pb-12">
        <div className="mx-auto max-w-5xl rounded-2xl border border-lime-500/50 bg-card p-5">
          <div className="flex flex-col gap-4 md:flex-row md:items-center">
            <div className="relative flex-1">
              <Filter className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search courses…"
                className="pl-9 border-lime-400/20 focus-visible:ring-lime-400/40"
                maxLength={80}
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {levels.map((l) => (
                <button
                  key={l}
                  onClick={() => setLevel(l)}
                  className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                    level === l
                      ? "bg-emerald-500 text-white shadow-[0_0_0_3px_rgba(16,185,129,0.15)]"
                      : "bg-secondary text-muted-foreground hover:text-foreground hover:border-lime-300/40 hover:bg-lime-200/10"
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-3 flex flex-wrap gap-2">
            {tracks.map((t) => (
              <button
                key={t}
                onClick={() => setTrack(t)}
                className={`rounded-full border px-3 py-1 text-xs transition-colors ${
                  track === t
                    ? "border-emerald-400 text-emerald-300 bg-emerald-400/10"
                    : "border-border text-muted-foreground hover:text-foreground hover:border-lime-300/40 hover:bg-lime-200/10"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          {filtered.map((c, i) => (
            <motion.article
              key={c.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.07 }}
              className="group flex flex-col rounded-xl border border-border bg-lime-500 p-6 transition-all hover:border-yellow-400/70 hover:shadow-[0_0_0_1px_rgba(16,185,129,0.15),0_12px_50px_rgba(16,185,129,0.08)]"
            >
              <div className="mb-3 flex items-center gap-2">
                <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-300 border border-emerald-400/20">
                  {c.level}
                </span>

                <span className="rounded-full border border-border px-3 py-1 text-xs text-white group-hover:border-lime-300/40">
                  {c.track}
                </span>

                {c.certificate && (
                  <span className="ml-auto flex items-center gap-1 text-xs text-white">
                    <Award className="h-3.5 w-3.5 text-yellow-300" /> Certificate
                  </span>
                )}
              </div>

              <h3 className="font-heading text-2xl font-semibold">{c.title}</h3>
              <p className="mt-2 text-[16px] text-white">{c.description}</p>

              <ul className="mt-4 space-y-1.5">
                {c.outcomes.map((o) => (
                  <li key={o} className="flex items-start gap-2 text-sm text-white">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-yellow-300" />
                    {o}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex items-center justify-between border-t border-white pt-4">
                <div className="flex gap-5 text-xs text-white">
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5 text-emerald-400" />{c.duration} · {c.hours}h
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Users className="h-3.5 w-3.5 text-lime-300" />{c.students}
                  </span>
                </div>

                <Button
                  variant="ghost"
                  size="sm"
                  className="text-emerald-300 hover:text-white hover:bg-emerald-500/15"
                >
                  Enroll <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </motion.article>
          ))}

          {filtered.length === 0 && (
            <p className="md:col-span-2 py-16 text-center text-sm text-muted-foreground">
              No courses match those filters.
            </p>
          )}
        </div>
      </section>

      <section className="px-6 pb-32">
        <div className="mx-auto max-w-3xl rounded-2xl border border-emerald-400/30 bg-card p-10 text-center relative overflow-hidden">
          {/* Lime/Emerald accent backdrop */}
          <div
            className="pointer-events-none absolute -top-24 -left-24 h-56 w-56 rounded-full bg-emerald-500/15 blur-2xl"
          />
          <div
            className="pointer-events-none absolute -bottom-24 -right-24 h-56 w-56 rounded-full bg-lime-400/10 blur-2xl"
          />

          <h2 className="relative font-heading text-3xl font-bold">
            Need a faster path?
          </h2>
          <p className="relative mt-3 text-muted-foreground">
            Join the 4-week Decarbonization Sprint — a live cohort with workshops, mentors, and a
            written roadmap by week four.
          </p>

          <Button
            size="lg"
            className="relative mt-6 bg-emerald-500 text-white hover:bg-emerald-400 shadow-[0_0_0_3px_rgba(16,185,129,0.15)]"
            asChild
          >
            <Link href="/services">Explore the Sprint</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Courses;