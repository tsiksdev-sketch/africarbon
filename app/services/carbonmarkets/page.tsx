import CarbonMarkets from '@/components/services/carbonmarkets'
import PagesHero from '@/components/shared/PagesHero'
import React from 'react'

function page() {
  return (
    <main>
      <PagesHero subtitle='Carbon Markets and Project Development'
       title='Build credible carbon project pathways from early-stage opportunity to market readiness'
     description='Carbon markets can create new value for climate-positive projects, but only where projects are eligible, well-structured, properly documented and supported by credible monitoring systems. AICTS helps project owners, developers, investors and institutions assess and prepare carbon credit opportunities across eligible sectors.' 
     src='/c.png' />
        <CarbonMarkets/>
    </main>
  )
}

export default page