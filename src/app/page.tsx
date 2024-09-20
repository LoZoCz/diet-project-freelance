import AboutSection from '@/layouts/HomePage/AboutSection'
import CardSection from '@/layouts/HomePage/CardSection'
import FAQSection from '@/layouts/HomePage/FAQSection'
import HeroSection from '@/layouts/HomePage/HeroSection'

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
