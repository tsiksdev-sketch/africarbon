
import RECs from '@/components/services/recs'
import PagesHero from '@/components/shared/PagesHero'
import React from 'react'

function page() {
  return (
    <main>
      <PagesHero subtitle='Renewable Energy Certificates and Energy Attribute Markets' title='Support credible REC market participation for generators, buyers and institutions' description='Renewable Energy Certificates and energy attribute markets can help renewable energy producers unlock additional value and help buyers make more credible renewable electricity claims. AICTS supports renewable energy producers, buyers and institutions with REC awareness, generator readiness, documentation preparation, metering evidence review, buyer education and registry-related preparation.' src='/c.png' />
        <RECs/>
    </main>
  )
}

export default page