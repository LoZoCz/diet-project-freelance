import Banner from '@/components/custom/AboutPage/Banner'
import StorySection from '@/components/custom/AboutPage/StorySection'
import OfferSection from '@/components/custom/AboutPage/OfferSection'
import JourneySection from '@/components/custom/AboutPage/JourneySection'
import CertificationSection from '@/components/custom/AboutPage/CertificationSection'
import FootingSection from '@/components/custom/AboutPage/FootingSection'

export default function About() {
    return (
        <main className="space-y-8">
            <Banner />
            <StorySection />
            <OfferSection />
            <JourneySection />
            <CertificationSection />
            <FootingSection />
        </main>
    )
}
