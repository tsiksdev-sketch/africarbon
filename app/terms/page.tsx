import React from 'react'
import PagesHero from '@/components/shared/PagesHero'

import Terms from '@/components/policies/terms'




function page() {
  return (
    <main>
      <PagesHero
      subtitle='Legal'
      title=' Website Terms and Disclaimer'
      description=' Important information about the use of this website and its limitations.'
      src='/d.png'

      />

        <Terms/>
       
    </main>
  )
}

export default page