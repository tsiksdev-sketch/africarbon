import CarbonMarkets from '@/components/services/carbonmarkets'
import PagesHero from '@/components/shared/PagesHero'
import React from 'react'

function page() {
  return (
    <main>
      <PagesHero subtitle='Carbon Markets and Project Development'
       title='Build credible carbon project pathways from early-stage opportunity to market readiness'
     description='AICTS supports project owners, developers, investors and institutions to assess and prepare carbon credit opportunities across eligible sectors. Our work focuses on early-stage clarity, technical documentation, evidence readiness and implementation pathways.' 
     src='/c.png' />
        <CarbonMarkets/>
    </main>
  )
}

export default page