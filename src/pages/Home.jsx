import { HeroSection } from '../sections/HeroSection'
import { StorySection } from '../sections/StorySection'
import { ServicesSection } from '../sections/ServicesSection'
import { ValueSection } from '../sections/ValueSection'
import { PartnersSection } from '../sections/PartnersSection'
import { CallToActionSection } from '../sections/CallToActionSection'

export function Home() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <StorySection />
      <ServicesSection />
      <ValueSection />
      <PartnersSection />
     
    </div>
  )
}

export default Home
