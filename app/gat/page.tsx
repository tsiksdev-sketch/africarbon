import React from 'react'
import PagesHero from '@/components/shared/PagesHero'
import GrowATree from '@/components/services/growatree'




function page() {
  return (
    <main>
      <PagesHero
      subtitle='Grow a tree foundation'
      title=' Connecting technical climate-market work with community-based action'
      description='Grow A Tree Foundation is AICTS non-profit arm extending the institutions impact into environmental restoration climate resilience tree growing education and grassroots sustainability '
      src='/d.png'

      />

        <GrowATree/>
       
    </main>
  )
}

export default page