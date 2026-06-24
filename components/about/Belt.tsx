"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

type Props = {
  text: string; // e.g. "Trusted • Fast • Secure • "
};

export default function SimpleMarquee({ text }: Props) {
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  const [dir, setDir] = useState<1 | -1>(1); 

  useEffect(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!viewport || !track) return;

    // Kill previous tween
    tweenRef.current?.kill();

    // Measure: we translate by the "half" width because we render text twice
    const halfWidth = track.scrollWidth / 2;

    // Set initial position based on direction
    gsap.set(track, { x: dir === 1 ? 0 : -halfWidth });

    tweenRef.current = gsap.to(track, {
      x: dir === 1 ? -halfWidth : 0,
      duration: 25,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: (x) => {
          const n = parseFloat(x);
          // keep x looping smoothly inside [-halfWidth, 0]
          const mod = ((n % halfWidth) + halfWidth) % halfWidth;
          return `${mod - halfWidth}px`;
        },
      },
    });

    return () => {
      tweenRef.current?.kill();
      tweenRef.current = null;
    };
  }, [dir, text]);

  return (
    <div
      className="w-full"
      onClick={() => setDir((d) => (d === 1 ? -1 : 1))}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") setDir((d) => (d === 1 ? -1 : 1));
      }}
      style={{ cursor: "pointer" }}
    >
      <div
        ref={viewportRef}
        className="overflow-hidden  bg-emerald-500 px-4 py-3"
        onMouseEnter={() => tweenRef.current?.pause()}
        onMouseLeave={() => tweenRef.current?.resume()}
      >
        <div ref={trackRef} className="flex w-max whitespace-nowrap">
          {/* render text twice for seamless loop */}
          <span className="text-white/95 text-base sm:text-lg font-semibold tracking-wide">
            {text}&nbsp;{text}&nbsp;
          </span>
        </div>
      </div>
    </div>
  );
}