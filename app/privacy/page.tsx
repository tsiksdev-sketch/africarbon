import React from 'react'
import PagesHero from '@/components/shared/PagesHero'
import Privacy from '@/components/policies/privacy'




function page() {
  return (
    <main>
      <PagesHero
      subtitle='Legal'
      title=' Privacy Policy'
      description=' How AICTS collects, uses and protects the information you share with us.'
      src='/d.png'

      />
     <Privacy/>
       
    </main>
  )
}

export default page