import React from 'react'

import PagesHero from '@/components/shared/PagesHero'
import { ContactForm } from '@/components/contact/features/contact-form'
import { ContactMap } from '@/components/contact/ContactMap'


function page() {
  return (
    <main>
    <PagesHero
    subtitle="Contact AICTS"
    title="Start a conversation with AICTS"
    description="Whether you are developing a carbon project, preparing a REC pathway, building a national carbon market framework, assessing your carbon footprint, strengthening ESG reporting, designing MRV systems, seeking climate finance or building institutional capacity, AICTS can help you move from climate ambition to structured implementation."
    src="./b.png"
    />
    <ContactMap/>
    <ContactForm/>
    </main>
  )
}

export default page