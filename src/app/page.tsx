import AboutSection from '@/components/custom/HomePage/AboutSection'
import CardSection from '@/components/custom/HomePage/CardSection'
import FAQSection from '@/components/custom/HomePage/FAQSection'
import HeroSection from '@/components/custom/HomePage/HeroSection'

export default function Home() {
    return (
        <main className="mb-32 flex flex-col gap-24">
            <HeroSection />
            <CardSection />
            <AboutSection />
            <FAQSection />
        </main>
    )
}
