'use client'


import * as React from 'react'
import Link from 'next/link'
import { LayoutGrid } from 'lucide-react'
import data from '@/lib/data'



import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'


type Gang = { label: string; items: { to: string; label: string; desc: string }[] };


const gangs: Gang[] = [
 
  {
    label: "Services",
    items: [
      { to: "./climatefinance", label: "Climate Finance", desc: "nav.tools.carbon-calculator.desc" },
      { to: "./esgfootprint", label: "ESG, GHG & Carbon Footprinting", desc: "nav.tools.glossary.desc" },
      { to: "./recs", label: "Renewable Energy Certificates & Energy Attribute Markets", desc: "nav.tools.glossary.desc" },
      { to:"./mrvsafeguard", label: "MRV and Safeguards ", desc: "nav.tools.glossary.desc" },
     
    ],
  },
  
];


export default function SideNav (){
 
  return (
    <Drawer  direction='right' >
      <DrawerTrigger className='header-button flex items-center p-2!   '>
        <LayoutGrid className='h-5 w-5 mr-1 text-lime-500' />
      
      </DrawerTrigger>
      <DrawerHeader>
              <DrawerTitle className='flex items-center'>
                
               
              </DrawerTitle>
              <DrawerDescription></DrawerDescription>
            </DrawerHeader>
      <DrawerContent className='border-none w-87.5 mt-0 top-0 bg-linear-to-bl from-lime-500 via-emerald-500  to-green-500 text-white z-100'>
        <div className='flex flex-col h-full'>
         
          <div className=' text-foreground flex items-center justify-between  '>
           
         
          </div>

        
          <div className='flex-1 flex flex-col text-white pt-10  overflow-y-auto'>
             <Link href="/" className="rounded-md pl-12 text-[16px] ">
           Home
          </Link>
           <Link href="/about" className="rounded-md pl-12 pt-2 text-[16px]">
           About
          </Link>
            {gangs.map((d) => (
            <div key={d.label} className="pt-2 pl-12 text-white">
              <p className="mb-1 text-xs font-semibold uppercase tracking-wider ">{d.label}</p>
              {d.items.map((at,v) => (
                <Link key={v} href={at.to} className="block py-1.5 text-sm " >
                  {at.label}
                </Link>
              ))}
            </div>
          ))}
            <nav className='flex flex-col pl-10 text-[16px] text-white'>
              {data.menu.map((l,id) => (
                <DrawerClose asChild key={id}>
                  <Link
                    href={l.href}
                    className={`flex items-center justify-between item-button`}
                  >
                    <h2 className='p-2'>{l.name}</h2>
                   
                  </Link>
                </DrawerClose>
              ))}
            </nav>
          </div>

        
        
        </div>
      </DrawerContent>
    </Drawer>
  )
}