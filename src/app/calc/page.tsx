import CalcSection from '@/pagesLayout/CalcPage/CalcSection'
import ChangesSection from '@/pagesLayout/CalcPage/ChangesSection'
import TipsSection from '@/pagesLayout/CalcPage/TipsSection'
import UnderstandingSection from '@/pagesLayout/CalcPage/UnderstandingSection'
import { client } from '@/sanity/client'
import { defineQuery } from 'next-sanity'
import { notFound } from 'next/navigation'

const options = { next: { revalidate: 900 } }

const CALC_QUERY = defineQuery(`*[_type=="calcPage"][0] {
    firstTitle,
    firstText,
    secondTitle,
    secondText,
    cardTitle,
    cards,
    lastTitle,
    lastText
}`)

export default async function Calculator() {
    const calcData = await client.fetch(CALC_QUERY, {}, options)

    if (!calcData) notFound()

    const pageData = {
        first: {
            understanding: {
                title: calcData.firstTitle,
                text: calcData.firstText,
            },
            list: {
                title: calcData.secondTitle,
                text: calcData.secondText,
            },
        },
        tips: {
            title: calcData.cardTitle,
            cards: calcData.cards ?? [],
        },
        changes: {
            title: calcData.lastTitle,
            text: calcData.lastText,
        },
    }

    return (
        <main className="container space-y-8">
            <CalcSection />
            <UnderstandingSection data={pageData.first} />
            <TipsSection data={pageData.tips} />
            <ChangesSection data={pageData.changes} />
        </main>
    )
}
