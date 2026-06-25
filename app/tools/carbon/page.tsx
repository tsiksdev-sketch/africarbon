import React from 'react'
import PagesHero from '@/components/shared/PagesHero'
import Calculator from '@/components/tools/CarbonCalculator'


function page() {
  return (
   <main>
    <PagesHero
    subtitle='Tools'
    title=' Carbon Calculater'
    description='Estimate your annual footprint in under a minute. Inputs are illustrative'
    src='/f.png'
    />
   <Calculator/>
   </main>
  )
}

export default page