import React from 'react'
import ContactHeroSection from './component/herosection'
import ContactFormSection from './component/contactform'
import CTASection from '@/src/components/cta'

function ContactPage() {
  return (
    <div>
        <ContactHeroSection />
        <ContactFormSection />
        <CTASection/>
    </div>
  )
}

export default ContactPage