"use client"
import { useRouter } from 'next/navigation'

import React from 'react'
import { ArrowUpRight } from 'lucide-react';


interface Props{
    id:string;
}

function PostButton({id}:Props) {

    const router = useRouter()
  
    function handleClick(){
        router.push(`/news/${id}`)
    }


    return (
    
    <button onClick={handleClick} className='  cursor-pointer'>
          
       <div className=''><p className='text-lime-300 font-bold x '>Read More</p></div>
       
    </button>
  )
}

export default PostButton