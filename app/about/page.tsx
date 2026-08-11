import React from 'react'
import AboutHeroSection from './component/herosection'
import MissionSection from './component/mission'
import OurMissionSection from './component/ourmission'
import ChooseUs from './component/chooseus'
import StatsSection from './component/stats'
import CTASection from '@/src/components/cta'
import FAQ from '@/src/components/faq'

function AboutPage() {
    return (
        <div>
            <AboutHeroSection />
            <OurMissionSection />
            {/* <StatsSection /> */}
            <MissionSection />
            <ChooseUs />
            <FAQ />

            <CTASection />
        </div>

    )
}

export default AboutPage