'use client'

import React from 'react'

import Slider from 'react-slick';
import  "slick-carousel/slick/slick.css"
import  "slick-carousel/slick/slick-theme.css"
import Image from 'next/image';
import { Leaf } from 'lucide-react';
import PostButton from '../posts/PostButton';
import { featuredNews } from '@/app/constants';


const settings = {
    dots:false, 
    infinite:true, 
    speed:500,   
    autoplay:true,
    autoplaySpeed:5000,
    arrows:false,
    slidesToShow:3,
    slidesToScroll:1 ,
    responsive:[
      
      {
      breakpoint:1400,
      settings:{
        slidesToShow:3,
        slidesToScroll:1  
      }
      },
      {
      breakpoint:840,
      settings:{
        slidesToShow:1,
        slidesToScroll:1  
      }
      },
    ] 
  }



function ClientCarousel() {
  return (

                   <section className="pt-20 px-6 ">
                       <div className="mx-auto max-w-6xl flex flex-col  gap-5">
                       
                        <div>
                             <p className="mb-3 text-center text-sm font-medium uppercase tracking-[0.2em] text-primary">
                             News & Insights
                               </p>
                        </div>
                           <div>
                               <h2 className=" text-center font-heading text-2xl font-bold md:text-5xl text-transparent bg-clip-text bg-linear-to-r from-emerald-500 via-lime-400 to-green-500">
                               Featured News
                            </h2>
                           </div>
                           
                          <Slider {...settings}  >
                              {featuredNews.slice().reverse().map((p,id)=>{

                   return(
                    
                       
                        <div  key={id} className=' flex flex-col gap-2 p-3 transition-all duration-300 yr '>
                                      
                             
                                <div>
                                <Image alt="icon" src={p.src} width={1000} height={1000} className='h-100 w-full rounded-t-sm' ></Image>
                                </div>
                                <div className='-mt-25 xr bg-emerald-500 w-[85%] rounded-r-3xl z-10 relative border-l-4 p-2 border-lime-200  '>
                                    <div className='mb-2 pt-4 font-heading text-[20px]  font-semibold text-white'>
                                    <p>{p.title}</p>
                                </div>
                                <div className='text-[16px] x leading-relaxed text-white'>
                                    <p >{p.description}</p>
                                </div>
                                <div className='pt-2 text-lg font-medium cursor-pointer text white flex justify-between flex-row'>
                                 <PostButton  id={p.id} />
                                  <Leaf className='x w-10 h-10 text-lime-300'/>
                                </div>
                                </div>
                               
                            
                            
                    
                           </div>
                    
                     
                   );
               })}  
                   </Slider>

                       </div>
                   </section>

                 
                 
   
  )
}

export default ClientCarousel