import AboutSection from '@/pagesLayout/HomePage/AboutSection'
import FAQSection from '@/pagesLayout/HomePage/FAQSection'
import HeroSection from '@/pagesLayout/HomePage/HeroSection'
import PackagesSection from '@/pagesLayout/HomePage/PackagesSection'

export default function Home() {
    return (
        <main className="mb-32 flex flex-col gap-24">
            <HeroSection />
            <PackagesSection />
            <AboutSection />
            <FAQSection />
        </main>
    )
}
