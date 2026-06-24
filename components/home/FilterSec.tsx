'use client'

import Link from "next/link";
import { useState } from "react";
import { audiences } from '@/constants';




type AudienceKey = keyof typeof audiences;

function FilterSec() {
    const [pick, setPick] = useState<AudienceKey>("AudiencePathway");
  return (
    <section className="mx-auto max-w-6xl py-20">
         <div className="relative">
            <div className="rounded-3xl bg-white/90 p-6 sm:p-8 shadow-lg ">
            

              <div role="tablist" aria-label="Audience" className="mt-5 grid grid-cols-2 md:grid-cols-4 gap-2 rounded-2xl bg-secondary p-1">
                {(Object.keys(audiences) as AudienceKey[]).map((key) => {
                  const active = pick === key;
                  return (
                    <button
                      key={key}
                      role="tab"
                      aria-selected={active}
                      onClick={() => setPick(key)}
                      className={`rounded-xl px-3 py-2 text-sm font-semibold capitalize transition-colors ${
                        active
                          ? "bg-lime-400 text-white shadow-soft"
                          : "text-foreground/70 hover:text-lime-400"
                      }`}
                    >
                      {key}
                    </button>
                  );
                })}
              </div>

              <div
                aria-live="polite"
                className="mt-5 rounded-2xl p-5"
                style={{ background: "color-mix(in oklab, var(--brand-sky) 10%, white)" }}
              >
                <div className="text-xs font-semibold uppercase tracking-wider text-brand-sky">
                  {audiences[pick].title}
                </div>
                <p className="mt-2 text-foreground/90 leading-relaxed">{audiences[pick].body}</p>
                <Link
                  href="./contact"
                  className="mt-4 py-4 px-4 rounded-md inline-flex items-center gap-1 text-white text-[16px] font-semibold bg-emerald-500 hover:bg-emerald-200"
                >
                  Start the conversation →
                </Link>
              </div>

             
            </div>
          </div>
    </section>
    
  )
}

export default FilterSec