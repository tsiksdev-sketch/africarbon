'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import Mythbusters from './Myth';

gsap.registerPlugin(ScrollTrigger);

export default function TwoColScrollText() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const leftPinRef = useRef<HTMLDivElement | null>(null); // ✅ add
  const textScrollRef = useRef<HTMLDivElement | null>(null);
  const textInnerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!rootRef.current || !textScrollRef.current || !textInnerRef.current || !leftPinRef.current) return;

    // Kill old triggers on hot reload (see note below)
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

    // ✅ 1) Timeline that pins the RIGHT and scrubs the text
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

    // ✅ 2) Additional trigger that pins the LEFT image over the same range
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
      }}
    >
      <div
        style={{
          position: 'relative',
          padding: '40px 24px',
          maxWidth: 1100,
          margin: '0 auto',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 24,
            alignItems: 'start',
          }}
          className='mx-auto max-w-6xl'
        >
          {/* Left: Image (now pinned by ScrollTrigger) */}
          <div
            ref={leftPinRef}
            style={{
              // remove sticky; pin will handle it
              position: 'relative',
              top: 0,
              height: '80vh',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              borderRadius: 16,
              background: '',
              width: '100%',
            }}
          >
            <Image
              src="/nano.jpg"
              alt="Example"
              width={1000}
              height={1000}
              className='h-full w-full'
            />
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
          >
            <div className="text-center z-10 bg-white relative "> 
              
                        <div>
                             <p className="mb-3 text-center text-sm font-medium uppercase tracking-[0.2em] text-primary">
                             Myth busters
                               </p>
                        </div>
                           <div>
                               <h2 className=" text-center font-heading text-4xl font-bold md:text-5xl text-transparent bg-clip-text bg-linear-to-r from-emerald-500 via-lime-400 to-green-500">
                               What people get wrong about carbon
                            </h2>
                           </div>
                           
            </div>

            <div ref={textInnerRef} style={{ willChange: 'transform' }}>
             

              <div style={{ height: 24 }}  />
               
              <Mythbusters/>
               

             

           
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}