
import Glossary from '@/components/tools/Glossary'
import PagesHero from '@/components/shared/PagesHero'
import React from 'react'

function page() {
  return (
    <main>
        <PagesHero
        subtitle='tools'
        title='Carbon Glossary'
        description='Plain-language definitions of the terms you will meet across every climate programme Hover any card for the deeper read '
        src='/f.png'
        />
        <Glossary/>
    </main>
  )
}

export default page