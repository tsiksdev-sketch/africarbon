import React from 'react'
import PagesHero from '@/components/shared/PagesHero'
import { Diagnostic } from '@/components/tools/diagnostic'


function page() {
  return (
   <main>
    <PagesHero
    subtitle='tools'
    title='  Begin with the next credible step'
    description='   Not every organisation needs a full project immediately. Many clients begin with a focused diagnostic to
            understand eligibility, readiness, risks and practical next steps.'
    src='./f.png'
    />
  <Diagnostic/>
   </main>
  )
}

export default page