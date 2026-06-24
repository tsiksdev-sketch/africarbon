'use client'

import React, { useRef } from 'react'
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';



interface Props{
    subtitle: string;
    title: string;
    description: string;
    src: string;
}

 


function PagesHero({ subtitle, title, description, src }: Props) {
 
     const ref = useRef<HTMLDivElement>(null);
  

    const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);




  return (
    <div ref={ref} className=" py-20 h-auto overflow-hidden px-10 md:px-0  w-full text-center relative flex flex-col justify-center">

        <motion.div style={{ y }} className="absolute inset-0">
        <Image src={src} alt="Description of the image"  fill className='object-cover ' />
        <div className="absolute inset-0 bg-black/60" />
      </motion.div>
           
           <motion.div className='z-10 relative flex flex-col mx-auto max-w-3xl text-center'
               initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.35 }} // <-- important
        transition={{ duration: 0.7, ease: 'easeOut' }}
        // optional: when it leaves, go back to initial state
        onViewportLeave={() => {}}
           >
              <motion.p className="mb-3 text-sm uppercase tracking-[0.3em] text-white text-uppercase"
               initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.35 }}
          transition={{ delay: 0.1, duration: 0.6 }}
              
              >
            {subtitle}
          </motion.p>

          <motion.h1 className="font-heading text-2xl font-bold md:text-6xl"
            initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.35 }}
          transition={{ delay: 0.2, duration: 0.9 }}
          >
            <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 via-lime-300 to-emerald-200">
              {title}
            </span>
          </motion.h1>

          <motion.p className="mt-6 text-lg text-white"
           initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.35 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          >
            {description}
          </motion.p>
           </motion.div>
        

         
        </div>
  )
}

export default PagesHero
