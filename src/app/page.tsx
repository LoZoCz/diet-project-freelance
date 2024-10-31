import { imagesUrl } from '@/lib/sanity-helpers/imagesUrl'
import AboutSection from '@/pagesLayout/HomePage/AboutSection'
import FAQSection from '@/pagesLayout/HomePage/FAQSection'
import HeroSection from '@/pagesLayout/HomePage/HeroSection'
import PackagesSection from '@/pagesLayout/HomePage/PackagesSection'
import { client } from '@/sanity/client'
import { defineQuery } from 'next-sanity'
import { notFound } from 'next/navigation'

const options = { next: { revalidate: 900 } }

const HOME_QUERY = defineQuery(`*[_type=="homePage"][0] {
    heroTitle1,
    heroTitle2,
    heroParagraph,
    heroCta,
    aboutTitle,
    aboutParagraph,
    aboutCta,
    aboutImage,
    dietsTitle,
    dietsParagraph,
    dietsCta,
    dietsImage,
    faqTitle,
    faqItems
}`)

export default async function Home() {
    const homeData = await client.fetch(HOME_QUERY, {}, options)

    if (!homeData) notFound()

    const dietsImage =
        homeData.dietsImage?.asset &&
        imagesUrl(homeData.dietsImage?.asset?._ref)

    const aboutImage =
        homeData.aboutImage?.asset &&
        imagesUrl(homeData.aboutImage?.asset?._ref)

    const pageData = {
        hero: {
            title: {
                text: homeData.heroTitle1,
                span: homeData.heroTitle2,
            },
            paragraph: homeData.heroParagraph,
            cta: homeData.heroCta,
        },
        diets: {
            title: homeData.dietsTitle,
            paragraph: homeData.dietsParagraph,
            cta: homeData.dietsCta,
            image: dietsImage,
        },
        about: {
            title: homeData.aboutTitle,
            paragraph: homeData.aboutParagraph,
            cta: homeData.aboutCta,
            image: aboutImage,
        },
        faq: {
            title: homeData.faqTitle,
            items: homeData.faqItems
                ? homeData.faqItems.map((item) => ({
                      question: item.question,
                      answer: item.answer,
                  }))
                : [],
        },
    }

    return (
        <main className="mb-32 flex flex-col gap-24">
            <HeroSection data={pageData.hero} />
            <PackagesSection data={pageData.diets} />
            <AboutSection data={pageData.about} />
            <FAQSection data={pageData.faq} />
        </main>
    )
}
