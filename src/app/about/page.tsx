import AboutBanner from '@/pagesLayout/AboutPage/AboutBanner'
import StorySection from '@/pagesLayout/AboutPage/StorySection'
import OfferSection from '@/pagesLayout/AboutPage/OfferSection'
import JourneySection from '@/pagesLayout/AboutPage/JourneySection'
import CertificationSection from '@/pagesLayout/AboutPage/CertificationSection'
import FooterSection from '@/pagesLayout/AboutPage/FooterSection'

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
