import React from 'react'
import Link from 'next/link'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets:['latin'],
  weight:['400','500','700']
})

interface Props {
    href:string;
    text:string;
    
}


const Btn = ({href, text}:Props) => {
  return (
    <div>
                  <Link href={href}>
                              <div className='card'>
        
                        <p className={`${poppins.className} absolute font-medium left-[20%] top-[30%] z-10`}>{text}</p>
                        <div className='overlay border-t-50 border-lime-400'></div>
                        <div className='overlay2 border-b-50 border-lime-400'></div>
                        
      
                         </div>
                   </Link>

       
   
    </div>
    
  )
}

export default   Btn