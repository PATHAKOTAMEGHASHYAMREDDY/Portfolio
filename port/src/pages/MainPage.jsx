import React from 'react'
import { BackgroundBeamsWithCollisionDemo } from '../codecomponents/BackgroundBeamsWithCollisionDemo'
import { AboutSection } from '../components/ui/AboutSection'
import { SkillsSection } from '../components/ui/SkillsSection'
import { StickyScrollRevealDemo } from '../codecomponents/StickyScrollReveal'
import { TimelineEducation } from '../codecomponents/TimelineEducation'
import { VortexContact } from '../codecomponents/VortexContact'
import { Footer } from '../components/ui/Footer'

function MainPage() {
  return (
    <div>
        <BackgroundBeamsWithCollisionDemo/>
        <AboutSection/>
        <SkillsSection/>
        <StickyScrollRevealDemo/>
        <TimelineEducation/>
        <VortexContact/>
        <Footer/>
    </div>
  )
}

export default MainPage;