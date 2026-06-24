'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import Mythbusters from './Myth';
import { ShieldCheck, FileSearch, Scale, Eye, GitBranch, BadgeCheck } from "lucide-react";
import { principles, standards } from '@/constants';

gsap.registerPlugin(ScrollTrigger);

export default function TwoColScrollText() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const leftPinRef = useRef<HTMLDivElement | null>(null);
  const textScrollRef = useRef<HTMLDivElement | null>(null);
  const textInnerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!rootRef.current || !textScrollRef.current || !textInnerRef.current || !leftPinRef.current) return;

    ScrollTrigger.getAll().forEach((t) => t.kill());

    const textContainer = textScrollRef.current;
    const textInner = textInnerRef.current;
    const leftPin = leftPinRef.current;

    const computeTextTravel = () => {
      const containerH = textContainer.clientHeight;
      const innerH = textInner.scrollHeight;
      return Math.max(0, innerH - containerH);
    };

    let travel = computeTextTravel();
    const endFn = () => `+=${Math.max(400, travel)}`;

    const tl = gsap.timeline({
      defaults: { ease: 'none' },
      scrollTrigger: {
        trigger: rootRef.current,
        start: 'top top',
        end: endFn,
        scrub: true,
        pin: textContainer,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onRefresh: () => {
          travel = computeTextTravel();
        },
      },
    });

    tl.to(textInner, {
      y: () => -travel,
      duration: 1,
    });

    ScrollTrigger.create({
      trigger: rootRef.current,
      start: 'top top',
      end: endFn,
      scrub: true,
      pin: leftPin,
      anticipatePin: 1,
      invalidateOnRefresh: true,
      onRefresh: () => {
        travel = computeTextTravel();
      },
    });

    const resizeObserver = new ResizeObserver(() => ScrollTrigger.refresh());
    resizeObserver.observe(textContainer);

    return () => {
      resizeObserver.disconnect();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      ref={rootRef}
      style={{
        minHeight: '180vh',
        display: 'block',
        overflowX: 'hidden',
      }}
    >
      <div
        style={{
          position: 'relative',
          padding: '40px 24px',
          maxWidth: 1100,
          margin: '0 auto',
        }}
        className="px-4 sm:px-6"
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr', // unchanged
            gap: 24,
            alignItems: 'start',
          }}
          className="mx-auto max-w-6xl"
        >
          {/* Left: Image (pinned) */}
          <div
            ref={leftPinRef}
            style={{
              position: 'relative',
              top: 0,
              height: '80vh',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              borderRadius: 16,
              width: '100%',
            }}
            className="h-[70vh] sm:h-[80vh]"
          >
            <div className="w-full rounded-2xl border border-lime-500 bg-linear-to-br from-emerald-300/35 to-transparent p-5 sm:p-10">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold">
                Standards we audit against
              </h2>

              <p className="mt-3 text-sm sm:text-base sm:max-w-2xl text-muted-foreground">
                Every framework below shapes either our curriculum, our project selection,
                or how we vet the evidence we cite.
              </p>

              <div className="mt-6 sm:mt-8 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
                {standards.map((s) => (
                  <div
                    key={s.name}
                    className="flex items-center justify-between rounded-lg border border-lime-400 bg-background/40 px-3 sm:px-4 py-3"
                  >
                    <span className="font-heading font-semibold text-sm sm:text-base">{s.name}</span>
                    <span className="text-[11px] sm:text-xs text-muted-foreground">{s.role}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Text (pinned + scrubbed) */}
          <div
            ref={textScrollRef}
            style={{
              height: '80vh',
              position: 'relative',
              overflow: 'hidden',
              borderRadius: 16,
              background: '',
              color: '',
              border: '1px solid rgba(255,255,255,0.08)',
            }}
            className="h-[70vh] sm:h-[80vh]"
          >
            <div className="text-center z-10 bg-white relative p-4">
              <div>
                <p className="mb-3 text-sm sm:text-sm font-medium uppercase tracking-[0.2em] text-primary">
                  Trust
                </p>
              </div>

              <div>
                <h2 className="text-center font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-linear-to-r from-emerald-500 via-lime-400 to-green-500">
                  Method &amp; Governance
                </h2>
              </div>

              <div>
                <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-muted-foreground">
                  How we choose what to teach, how we verify what we cite, and how we hold ourselves accountable when the science moves.
                </p>
              </div>
            </div>

            <div ref={textInnerRef} style={{ willChange: 'transform' }}>
              <div style={{ height: 18 }} />

              <div className="mx-auto flex flex-col gap-6 sm:gap-10 pb-45 px-3 sm:px-0">
                {principles.map((p) => (
                  <div
                    key={p.title}
                    className="rounded-xl border border-border bg-lime-500 p-4 sm:p-6"
                  >
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <p.icon className="h-5 w-5 text-yellow-400" />
                    </div>

                    <h3 className="font-heading text-base sm:text-lg font-semibold">
                      {p.title}
                    </h3>

                    <p className="mt-2 text-sm text-white">
                      {p.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}       