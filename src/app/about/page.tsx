import AboutBanner from '@/pages/AboutPage/AboutBanner'
import StorySection from '@/pages/AboutPage/StorySection'
import OfferSection from '@/pages/AboutPage/OfferSection'
import JourneySection from '@/pages/AboutPage/JourneySection'
import CertificationSection from '@/pages/AboutPage/CertificationSection'
import FooterSection from '@/pages/AboutPage/FooterSection'

export default function About() {
    return (
        <main className="space-y-8">
            <AboutBanner />
            <StorySection />
            <OfferSection />
            <JourneySection />
            <CertificationSection />
            <FooterSection />
        </main>
    )
}
