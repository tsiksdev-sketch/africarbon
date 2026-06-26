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
        subtitle="About AICTS"
        title="An African advisory and implementation partner for credible climate-market action"
        description="Africa Institute for Carbon Trading and Sustainability is a specialist African institution working across carbon markets, Renewable Energy Certificates, ESG, GHG accounting, MRV, Article 6, climate finance, policy development and sustainability transformation."
        src="/a.png"
      />

      <About />
     
    </main>

  )  
}

export default page