import React from 'react'
import PagesHero from '@/components/shared/PagesHero'
import AfricaRECs from '@/components/africarecs/africarecs'



function page() {
  return (
    <main>
      <PagesHero
      subtitle='Africa RECs'
      title='Advancing renewable energy certificate readiness in African markets'
      description='Africa RECs is an AICTS-led platform supporting renewable energy certificate awareness, generator readiness, buyer education and energy attribute market development across selected African markets.'
      src='/d.png'

      />

        <AfricaRECs/>
       
    </main>
  )
}

export default page