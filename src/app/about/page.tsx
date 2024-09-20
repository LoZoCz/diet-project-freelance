import AboutBanner from '@/layouts/AboutPage/AboutBanner'
import StorySection from '@/layouts/AboutPage/StorySection'
import OfferSection from '@/layouts/AboutPage/OfferSection'
import JourneySection from '@/layouts/AboutPage/JourneySection'
import CertificationSection from '@/layouts/AboutPage/CertificationSection'
import FooterSection from '@/layouts/AboutPage/FooterSection'

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
