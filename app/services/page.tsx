import FilterSection from '@/components/services/FilterSec'
import Cohort from '@/components/services/Sprint'
import PagesHero from '@/components/shared/PagesHero'
import TwoColScrollText from '@/components/TwoColSccrollText'
import React from 'react'

function page() {
  return (
   <main>
    <PagesHero
    subtitle='Services'
    title="Integrated climate-market advisory and implementation services"
    description='AICTS supports African governments, regulators, project owners, investors, financial institutions, corporates, NGOs and communities across the full climate-market readiness journey — from opportunity screening and policy design to documentation, MRV, ESG reporting, REC readiness and climate finance preparation.'
    src='/c.png'
    />
    <Cohort/>
   </main>
  )
}

export default page