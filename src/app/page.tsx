import AboutSection from '@/pages/HomePage/AboutSection'
import CardSection from '@/pages/HomePage/CardSection'
import FAQSection from '@/pages/HomePage/FAQSection'
import HeroSection from '@/pages/HomePage/HeroSection'

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
