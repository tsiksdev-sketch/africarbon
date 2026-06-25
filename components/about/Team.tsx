import React from 'react'
import Image from 'next/image'
import { Button } from '../ui/button'
import Link from 'next/link'

function Team() {
  return (
    <section className='px-6 pb-20'>
            <div className='  mx-auto max-w-6xl  '>
               <div className='w-[90%] shadow-olive-300  shadow-2xl px-10 py-25  flex flex-col justify-center  '>
                       <div>
        <p className="text-sm font-medium uppercase tracking-[0.25em] text-primary">
          Team
        </p>
       <h2 className=" font-heading text-2xl font-bold md:text-5xl text-transparent bg-clip-text bg-linear-to-r from-emerald-500 via-lime-400 to-green-500">
                        Our Global Experts
             </h2>
      </div>

                        <div className='flex md:flex-row flex-col-reverse w-full  md:w-[110%]'>
                            <div className='flex-1 p-4 justify-center  flex flex-col'>
                               
                               <p>We have a global team of more than 350 environmental sustainability experts, including engineers, financiers and policy specialists, working with diverse industries and business sectors around the world.</p>
                              
                               <div className='pt-10'>
                                 <Link href='/contact'>
                                   <Button className=" cursor-pointer bg-lime-500 text-[16px] text-white"  size="lg">Get In Touch</Button>
                                 </Link>
                               </div>
                            </div>
                            <div className='flex-1'>
                                  <Image src="/ab.png" alt="team" width={500} height={500} className='w-full h-auto' />
                            </div>
                        </div>
               </div> 
            </div>
    </section>
  )
}


export default Team