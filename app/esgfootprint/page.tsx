
import ESGFootprinting from '@/components/services/esgfootprint'
import PagesHero from '@/components/shared/PagesHero'
import React from 'react'

function page() {
  return (
    <main>
      <PagesHero subtitle='ESG, GHG and Carbon Footprinting' title='Measure emissions, strengthen ESG credibility and build practical reduction pathways' description='Organisations are increasingly expected to understand their emissions, report sustainability performance and demonstrate credible climate action. AICTS helps organisations measure, manage and communicate their environmental and sustainability performance.' src='./c.png' />
        <ESGFootprinting/>
    </main>
  )
}

export default page