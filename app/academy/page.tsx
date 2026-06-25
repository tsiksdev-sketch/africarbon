import React from 'react'
import PagesHero from '@/components/shared/PagesHero'
import Academy from '@/components/academy/academy'


function page() {
  return (
    <main>
      <PagesHero
      subtitle='AICTS Academy'
      title='Practical climate-market learning for African institutions and professionals'
      description='AICTS Academy provides practical learning for professionals, institutions, regulators, project developers, companies and community-based organisations seeking to understand and participate responsibly in carbon markets, RECs, ESG, MRV and climate finance systems.'
      src='/d.png'

      />

        <Academy/>
       
    </main>
  )
}

export default page