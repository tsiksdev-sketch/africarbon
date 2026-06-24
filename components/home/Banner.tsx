import React from 'react'
import Image from 'next/image';
import { ico } from '@/constants';




function Banner() {
  return (
    <div className='w-full flex flex-col items-center justify-center'>
         <div className='flex flex-col w-full md:w-[80%] justify-center -mt-10 z-10  items-center'>
            <div className='flex flex-row justify-center bg-white w-full md:w-[80%] items-center rounded-t-md'>
                     {ico.map((p,id)=>{

                return(
                <div key={id} className=' hover:scale-110 transition-all duration-300 cursor-pointer  '>
                    <Image src={p.src} alt='ico' width={100} height={100} className='h-20 w-25 md:h-40 md:w-50'/>
                </div>

                );
             })}
            </div>
           
         </div>
    </div>
  )
}

export default Banner