import React from 'react'
import PagesHero from '@/components/shared/PagesHero'
import Insights from '@/components/insights/insights'




function page() {
  return (
    <main>
      <PagesHero
      subtitle='Insights'
      title=' Knowledge for credible African climate-market participation'
      description=' AICTS Insights provides practical analysis, explainers, policy notes and market intelligence for institutions
            working across carbon markets, RECs, ESG, MRV, Article 6, climate finance and sustainability implementation.'
      src='/d.png'

      />

        <Insights/>
       
    </main>
  )
}

export default page