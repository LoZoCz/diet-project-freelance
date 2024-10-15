import AboutBanner from '@/pagesLayout/AboutPage/AboutBanner'
import StorySection from '@/pagesLayout/AboutPage/StorySection'
import OfferSection from '@/pagesLayout/AboutPage/OfferSection'
import CertificationSection from '@/pagesLayout/AboutPage/CertificationSection'
import FooterSection from '@/pagesLayout/AboutPage/FooterSection'
import Image from 'next/image'

export default function About() {
    return (
        <main className="space-y-8">
            <AboutBanner />
            <StorySection />
            <OfferSection />
            <CertificationSection />
            <FooterSection />
        </main>
    )
}
