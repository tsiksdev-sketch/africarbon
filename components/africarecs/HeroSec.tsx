
'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { useLanguage } from "@/lib/i18n/language-context";
import { richText } from '@/lib/i18n/rich-text'
 
const HeroSec = () => {
  const { t } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);

  // If you still want scroll-driven parallax, keep this.
  // But viewport-triggered animations will run on enter/leave too.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative h-135 overflow-hidden">
      {/* Background parallax (still scroll-driven) */}
      <motion.div style={{ y }} className="absolute inset-0">
        <Image src="/d.png" alt="Description of the image" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/60" />
      </motion.div>

      {/* Content: trigger animations every time it enters the viewport */}
      <motion.div
        className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.35 }} // <-- important
        transition={{ duration: 0.7, ease: 'easeOut' }}
        // optional: when it leaves, go back to initial state
        onViewportLeave={() => {}}
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.35 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-white"
        >
          AfricaRecs
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.35 }}
          transition={{ delay: 0.2, duration: 0.9 }}
          className="max-w-4xl font-heading  font-bold leading-tight text-2xl md:text-7xl text-transparent bg-clip-text bg-linear-to-r from-emerald-500 via-lime-400 to-green-500"
        >
         Want to learn more about RECs or register your power plant?
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.35 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="mt-6 max-w-2xl text-lg text-white"
        >
      Visit the Africa RECs platform to understand Renewable Energy Certificates, request information, assess REC readiness, share generator details or begin registration support for your renewable energy project.
   
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.35 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-10 flex gap-4"
        >
         <Link href='https://africarecs.com/'> <Button className="cursor-pointer bg-emerald-500" size="lg">Visit Africa RECs Platform</Button> </Link> 
         <Link href='/tools/diagnostic'> <Button className="cursor-pointer bg-lime-500" size="lg">Request REC Support</Button> </Link>
         
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSec;