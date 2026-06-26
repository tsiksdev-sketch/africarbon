import ClimateFinance from '@/components/services/climatefinance'
import PagesHero from '@/components/shared/PagesHero'
import React from 'react'

function page() {
  return (
    <main>
      <PagesHero subtitle='Climate Finance and Investor Readiness' title='Prepare climate projects for credible investor, funder and buyer engagement' description='Many climate-positive projects struggle to attract finance because they are not yet presented in a way that investors, funders, buyers or development partners can assess. Common gaps include unclear project boundaries, weak baselines, limited risk analysis, incomplete data, uncertain carbon or REC value and insufficient stakeholder documentation.' src='/c.png' />
        <ClimateFinance/>
    </main>
  )
}

export default page