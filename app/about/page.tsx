import React from 'react'
import About from '@/components/about/About'
import Vission from '@/components/about/Vission'
import SimpleMarquee from '@/components/about/Belt'
import Team from '@/components/about/Team'
import PagesHero from '@/components/shared/PagesHero'
import StickySplitSectionScrollTrigger from '@/components/StickySplitSectionScrollTrigger'



function page() {
  return (
   
    <main> 
      <PagesHero
        subtitle="About Us"
        title="Leading the Way in Carbon Solutions"
        description="We are a team of experts dedicated to providing innovative carbon management strategies and solutions."
        src="/a.png"
      />

      <About />
      <SimpleMarquee text="Intergrity • Innovation • Collaboration • Excellence • Sustainibility • Intergrity • Innovation • Collaboration • Excellence • Sustainibility • Intergrity • Innovation • Collaboration • Excellence • Sustainibility • Intergrity • Innovation • Collaboration • Excellence • Sustainibility • " />
      <Vission/>
      <StickySplitSectionScrollTrigger/>
      <Team/>
    </main>

  )  
}

export default page