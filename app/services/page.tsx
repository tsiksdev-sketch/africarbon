import FilterSection from '@/components/services/FilterSec'
import Cohort from '@/components/services/Sprint'
import PagesHero from '@/components/shared/PagesHero'
import TwoColScrollText from '@/components/TwoColSccrollText'
import React from 'react'

function page() {
  return (
   <main>
    <PagesHero
    subtitle='Services'
    title="Our Impact"
    description='Discover how Africarbon is transforming the carbon market in Africa, empowering communities, and driving sustainable change. Explore our impact stories, project highlights, and the positive outcomes we have achieved together.'
    src='/c.png'
    />
    <FilterSection/>
    <TwoColScrollText/>
    <Cohort/>
   </main>
  )
}

export default page