import React from 'react'
import PagesHero from '@/components/shared/PagesHero'
import Tools from '@/components/tools/tools'


function page() {
  return (
   <main>
    <PagesHero
    subtitle='tools'
    title=' Practical tools for climate-market readiness'
    description=' AICTS tools help organisations and project owners take a first step towards understanding emissions, carbon
          markets, RECs, ESG, MRV and climate finance readiness.'
    src='/f.png'
    />
   <Tools/>
   </main>
  )
}

export default page