
import MRVSafeguards from '@/components/services/mrvsafeguard'
import PagesHero from '@/components/shared/PagesHero'
import React from 'react'

function page() {
  return (
    <main>
      <PagesHero subtitle='MRV, Safeguards and Stakeholder Engagemen' title='Build the evidence backbone for credible climate action' description='MRV, safeguards and stakeholder engagement form the integrity backbone of carbon markets, RECs, ESG reporting and climate finance. Without reliable data, clear records, community acceptance and transparent monitoring systems, climate claims can lose credibility.' src='./c.png' />
        <MRVSafeguards/>
    </main>
  )
}

export default page