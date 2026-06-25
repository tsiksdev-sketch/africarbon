"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";


const MotionImage = motion.create(Image);

type FilterKey = "all" | "carbon" | "energy" | "forestry";

type ContentItem = {
  id: string;
  title: string;
  body: string;
  tags: Exclude<FilterKey, "all">[];
};

const contentItems: ContentItem[] = [
  {
    id: "1",
    title: "Carbon Accounting & Baselines",
    body: "We help organizations measure emissions accurately, set reliable baselines, and track progress over time.",
    tags: ["carbon"],
  },
  {
    id: "2",
    title: "Carbon Credits & Trading Education",
    body: "Learn how high-integrity credits work, what to verify, and how trading supports real reductions (not just paper claims).",
    tags: ["carbon"],
  },
  {
    id: "3",
    title: "Renewable Energy Implementation",
    body: "From feasibility to deployment—supporting clean power projects that reduce electricity-related emissions.",
    tags: ["energy"],
  },
  {
    id: "4",
    title: "Energy Efficiency & Electrification",
    body: "We identify high-impact upgrades (HVAC, insulation, heat pumps) and electrify processes to cut emissions at the source.",
    tags: ["energy"],
  },
  {
    id: "5",
    title: "Reforestation & Afforestation Programs",
    body: "Nature-based solutions that build long-term carbon sinks while improving biodiversity and resilience.",
    tags: ["forestry"],
  },
  {
    id: "6",
    title: "Soil Carbon & Regenerative Land Practices",
    body: "We promote soil health strategies that increase carbon storage and strengthen ecosystems against climate stress.",
    tags: ["forestry"],
  },
  {
    id: "7",
    title: "Integrated Climate Action Pathways",
    body: "Combine carbon measurement, cleaner energy, and nature-based sequestration into a single plan with measurable outcomes.",
    tags: ["carbon", "energy", "forestry"],
  },
];

export default function FilterSection() {
  const [activeFilter, setActiveFilter] = useState<FilterKey>("carbon");

  const filters: { key: FilterKey; label: string }[] = [
    { key: "carbon", label: "Carbon" },
    { key: "energy", label: "Energy" },
    { key: "forestry", label: "Forestry" },
  ];

  const filteredItems = useMemo(() => {
    if (activeFilter === "all") return contentItems;
    return contentItems.filter((item) => item.tags.includes(activeFilter as any));
  }, [activeFilter]);

  return (
    <section className="py-20 px-6">

        <div className="mx-auto max-w-6xl flex flex-col ">
              <div>
                  <p className="text-sm font-medium uppercase tracking-[0.25em] text-primary">
          Services
        </p>
       <h2 className=" font-heading text-2xl font-bold md:text-5xl text-transparent bg-clip-text bg-linear-to-r from-emerald-500 via-lime-400 to-green-500">
                 Our Activities   
             </h2>
              </div>
               <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
         <aside className="lg:col-span-4">
          <div className="rounded-2xl border border-emerald-100 bg-white/60 p-4 shadow-sm">
            <h3 className="mb-3 text-sm font-semibold tracking-wide text-emerald-950">
              Filters
            </h3>

       
            <div className="grid gap-2">
              {filters.map((f) => {
                const isActive = f.key === activeFilter;

                return (
                  <button
                    key={f.key}
                    type="button"
                    onClick={() => setActiveFilter(f.key)}
                    className={[
                      "w-full rounded-xl px-4 py-2.5 text-left text-sm font-semibold transition",
                      "border",
                      isActive
                        ? "border-lime-300 bg-emerald-600 text-white shadow-[0_0_0_1px_rgba(34,197,94,0.15)]"
                        : "border-emerald-200 bg-white text-emerald-950 hover:bg-emerald-50 hover:border-lime-200",
                      "focus:outline-none focus:ring-4 focus:ring-lime-200",
                    ].join(" ")}
                    aria-pressed={isActive}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span>{f.label}</span>
                      <span
                        className={[
                          "inline-flex h-2.5 w-2.5 rounded-full transition",
                          isActive ? "bg-lime-400" : "bg-emerald-200",
                        ].join(" ")}
                      />
                    </div>
                  </button>
                );
              })}
               <MotionImage
      alt="icon"
      src="/w.png"
      width={500}
      height={500}
      className="h-full w-full"
      animate={{ rotate: -360 }}
      transition={{ duration: 4.5, ease: "linear", repeat: Infinity }}
    />

            </div>

            {/* subtle interactive hint */}
           
          </div>
        </aside>

        {/* Left: content */}
        <div className="lg:col-span-8">
          <div className="rounded-2xl border border-emerald-100 bg-emerald-50/30 p-5 shadow-sm">
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-emerald-950">
                Showing:{" "}
                <span className="text-lime-600">
                  {filters.find((f) => f.key === activeFilter)?.label}
                </span>
              </h3>
              <p className="mt-1 text-sm text-emerald-900/70">
                Tap a filter to update the content instantly.
              </p>
            </div>

            {filteredItems.length === 0 ? (
              <p className="text-sm text-emerald-900/70">No results found.</p>
            ) : (
              <div className="grid gap-3">
                {filteredItems.map((item) => (
                  <article
                    key={item.id}
                    className="group rounded-xl border border-emerald-100 bg-white/80 p-4 transition
                               hover:-translate-y-0.5 hover:shadow-md hover:border-lime-200"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h4 className="text-base font-semibold text-emerald-950">
                          {item.title}
                        </h4>
                        <p className="mt-1 text-[16px] text-emerald-900/75">
                          {item.body}
                        </p>
                      </div>

                      <div className="hidden sm:block">
                        <span className="inline-flex items-center rounded-full border border-lime-200 bg-lime-50 px-3 py-1 text-xs font-medium text-lime-700">
                          {item.tags[0]}
                        </span>
                      </div>
                    </div>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {item.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-800"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right: filter buttons */}
       
      </div>
        </div>
      
    </section>
  );
}