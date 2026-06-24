'use client'

import React from 'react'
import { iconByIndex, vission } from '@/constants'
import { ChevronRight } from 'lucide-react'

function Vission() {
  return (
    <section className="px-4 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-start justify-between gap-6 mb-8 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-primary">
              Vision&Mission
            </p>

            <h2 className="pt-2 font-heading text-3xl font-bold leading-tight sm:text-4xl md:text-5xl text-transparent bg-clip-text bg-linear-to-r from-emerald-500 via-lime-400 to-green-500">
              Our Purpose
            </h2>
          </div>
        </div>

        {/* Responsive card layout */}
        <div className="flex flex-wrap gap-6">
          {vission.map((v, i) => {
            const Icon = iconByIndex[i % iconByIndex.length]
            const isEven = i % 2 === 0

            return (
              <div
                key={i}
                className="w-full sm:w-[calc(50%-12px)]"
              >
                <div className="relative min-h-80 h-full">
                  {/* background glow */}
                  <div
                    className={[
                      'absolute inset-0 rounded-2xl blur-sm opacity-70 pointer-events-none',
                      isEven ? 'bg-emerald-500' : 'bg-lime-500',
                    ].join(' ')}
                    aria-hidden="true"
                  />

                  <button
                    type="button"
                    className={[
                      'relative w-full text-left rounded-2xl border transition-all',
                      'p-5 sm:p-7',
                      'hover:-translate-y-1 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-offset-2',
                      isEven
                        ? 'bg-emerald-500/15 border-emerald-500/40 focus:ring-emerald-500'
                        : 'bg-lime-500/15 border-lime-500/40 focus:ring-lime-500',
                    ].join(' ')}
                    onClick={() => console.log('Clicked vision card:', v.title)}
                  >
                    {/* animated sheen */}
                    <div
                      className={[
                        'absolute inset-0 rounded-2xl pointer-events-none overflow-hidden',
                        'opacity-0 hover:opacity-100 transition-opacity',
                      ].join(' ')}
                      aria-hidden="true"
                    >
                      <div
                        className={[
                          'absolute -top-16 -left-16 h-36 w-36 rounded-full blur-2xl animate-pulse',
                          isEven ? 'bg-emerald-400/40' : 'bg-lime-400/40',
                        ].join(' ')}
                      />
                      <div
                        className={[
                          'absolute -bottom-16 -right-16 h-36 w-36 rounded-full blur-2xl animate-pulse',
                          isEven ? 'bg-emerald-400/30' : 'bg-lime-400/30',
                        ].join(' ')}
                      />
                    </div>

                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <div
                          className={[
                            'inline-flex h-12 w-12 items-center justify-center rounded-xl shadow-lg shrink-0',
                            isEven ? 'bg-emerald-500 text-white' : 'bg-lime-500 text-white',
                          ].join(' ')}
                        >
                          <Icon size={20} />
                        </div>

                        <p
                          className={[
                            'mb-2 text-sm font-semibold uppercase tracking-[0.22em]',
                            isEven ? 'text-emerald-600' : 'text-lime-600',
                          ].join(' ')}
                        >
                          {v.title}
                        </p>
                      </div>

                      <div
                        className={[
                          'inline-flex items-center justify-center rounded-full h-9 w-9 transition-transform group-hover:rotate-[-10deg] shrink-0',
                          isEven ? 'bg-emerald-500/15 text-emerald-700' : 'bg-lime-500/15 text-lime-700',
                        ].join(' ')}
                        aria-hidden="true"
                      >
                        <ChevronRight size={18} />
                      </div>
                    </div>

                    <p className="mt-3 text-[15px] sm:text-[16px] leading-relaxed text-white/90">
                      {v.description}
                    </p>

                    <div className="mt-5 flex items-center justify-between text-sm">
                      <span className="inline-flex items-center gap-2 text-muted-foreground">
                        <span
                          className={[
                            'h-2 w-2 rounded-full',
                            isEven ? 'bg-emerald-500' : 'bg-lime-500',
                          ].join(' ')}
                        />
                        Tap to explore
                      </span>
                    </div>
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Vission