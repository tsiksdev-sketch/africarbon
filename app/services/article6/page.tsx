import Article6Policy from '@/components/services/article'
import PagesHero from '@/components/shared/PagesHero'
import React from 'react'

function page() {
  return (
    <main>
      <PagesHero subtitle='Article 6, Policy and Regulatory Advisory' 
      title='Design practical carbon market systems with policy, governance and implementation capacity'
      description='Carbon markets require strong governance. Governments and regulators need clear rules, institutional roles, approval processes, safeguards, registry systems, authorisation procedures and implementation capacity. AICTS supports governments, ministries, regulators and public-sector institutions with practical carbon market systems.'
       src='/c.png' />
        <Article6Policy/>
    </main>
  )
}

export default page