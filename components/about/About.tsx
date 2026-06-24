'use client'

import React from 'react'
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';


function About() {
  return (
    <section className='py-20 px-6'>
        <div className='mx-auto max-w-6xl flex flex-col '>
               <div className='w-full flex flex-col gap-4 md:flex-row'>
        <div className='flex flex-col flex-1 relative'>
            <video
              src="./h.mp4"
              className="h-full w-full"
              style={{ objectFit: 'contain' }}
              autoPlay
              muted
              loop
              playsInline
            />

          <motion.div
      className="absolute top-0 -ml-5 -mt-5 md:-mt-20 md:-ml-20 left-0"
      animate={{ y: [0, -8, 0], scale: [1, 1.15, 1] }}
      transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
    >
      <Image
        alt="icon"
        src="./s.png"
        width={500}
        height={500}
        className="h-20 w-20 md:h-40 md:w-40 rounded-t-sm"
      />
    </motion.div>
        </div>
         <div className='flex flex-col flex-1 px-6 gap-5'>
             <div >
             <p className="mb-3  text-sm font-medium uppercase tracking-[0.2em] text-primary">
                     Who we are
                 </p>
           </div>
            <div>
             <h2 className="  font-heading text-2xl font-bold md:text-5xl text-transparent bg-clip-text bg-linear-to-r from-emerald-500 via-lime-400 to-green-500">
                        About Us
             </h2>
            </div>
            <div className='text-[16px] leading-relaxed'>
                <p>
                    At the Africa Institute for Carbon Trading and Sustainability, we are dedicated to empowering individuals, organisations, and governments with the knowledge and skills necessary to combat climate change and promote sustainable development. Explore our comprehensive courses and join us in driving a resilient and low-carbon future for Africa.
                </p>
            </div>

             <div className='flex flex-row gap-5'>
              <Link href='./services'>  <Button className="cursor-pointer bg-emerald-500" size="lg">Start Learning</Button>  </Link>
              <Link href='./courses'>  <Button className="cursor-pointer bg-lime-500" size="lg">View Courses</Button> </Link>
          
             </div>

         </div>
        </div>
        </div>
       
    </section>
  )
}

export default About
