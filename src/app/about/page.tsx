import Banner from '@/components/custom/AboutPage/Banner'
import TextSection from '@/components/custom/AboutPage/TextSection'
import CarouselSection from '@/components/custom/AboutPage/CarouselSection'

export default function About() {
    return (
        <main className="mb-32 flex flex-col gap-24">
            <Banner />
            <TextSection />
            <CarouselSection />
            <TextSection reverse />
        </main>
    )
}
