import { HeroSection } from '../sections/HeroSection'
import { StorySection } from '../sections/StorySection'
import { ServicesSection } from '../sections/ServicesSection'
import { ValueSection } from '../sections/ValueSection'
import { PartnersSection } from '../sections/PartnersSection'
import { CallToActionSection } from '../sections/CallToActionSection'

export function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-[#C2C4C6]/30 to-white">
      <HeroSection />
      <StorySection />
      <ServicesSection />
      <ValueSection />
      <PartnersSection />
     
    </div>
  )
}

export default Home
