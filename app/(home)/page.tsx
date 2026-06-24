import React from 'react'
import HeroSection from '@/components/home/HeroSection'
import Aboutsec from '@/components/home/Aboutsec'
import StatsSection from '@/components/home/Stats'
import CtaSection from '@/components/home/Cta'
import CoursesSection from '@/components/home/Courses'
import FeaturedNews from '@/components/home/FeaturedNews'
import Banner from '@/components/home/Banner'
import SimpleMarquee from '@/components/about/Belt'
import FilterSec from '@/components/home/FilterSec'

function page() {
  return (
    <main > 
      <HeroSection/>  
      <Banner/>  
      <SimpleMarquee text='Carbon Markets | RECs | ESG | GHG Accounting | MRV | Article 6 | Policy | Climate Finance | Capacity Building | Carbon Markets | RECs | ESG | GHG Accounting | MRV | Article 6 | Policy | Climate Finance | Capacity Building' />
      <Aboutsec/>
      <StatsSection/>
      <CoursesSection/>
      <FilterSec/> 
      <CtaSection/>  
    </main>
  
  )
}

export default page