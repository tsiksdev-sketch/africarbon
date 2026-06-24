import Sectors from '@/components/sectors/sector'
import PagesHero from '@/components/shared/PagesHero'
import React from 'react'

function page() {
  return (
    <main>
    <PagesHero
    subtitle="Sectors"
    title="Climate-market support across Africa's key transition sectors"
    description="AICTS provides carbon market and sustainability advisory services across sectors where climate action, emissions reduction, resilience, finance and development impact intersect."
    src="./b.png"
    />
  <Sectors/>
    </main>
  )
}

export default page