import AboutBanner from '@/pagesLayout/AboutPage/AboutBanner'
import StorySection from '@/pagesLayout/AboutPage/StorySection'
import OfferSection from '@/pagesLayout/AboutPage/OfferSection'
import CertificationSection from '@/pagesLayout/AboutPage/CertificationSection'
import FooterSection from '@/pagesLayout/AboutPage/FooterSection'
import { defineQuery } from 'next-sanity'
import { client } from '@/sanity/client'
import { notFound } from 'next/navigation'
import { imagesUrl } from '@/lib/sanity-helpers/imagesUrl'

const ABOUT_QUERY = defineQuery(`*[_type=="aboutPage"][0] {
    aboutTitle,
    aboutImage,
    aboutBlockquote,
    historyTitle,
    historyText,
    offerTitle,
    offerItems,
    certificatsImgs,
    footer
}`)

export default async function About() {
    const aboutData = await client.fetch(ABOUT_QUERY, {})

    if (!aboutData) notFound()

    const aboutImage =
        aboutData.aboutImage?.asset &&
        imagesUrl(aboutData.aboutImage?.asset?._ref, 250, 250)

    const certificateImages =
        aboutData.certificatsImgs &&
        aboutData.certificatsImgs.map((certificateImage) => {
            const imgSrc =
                certificateImage.certificate?.asset &&
                imagesUrl(certificateImage.certificate?.asset?._ref, 1000, 700)

            return imgSrc
        })

    const pageData = {
        banner: {
            title: aboutData.aboutTitle,
            image: aboutImage,
            blockquote: aboutData.aboutBlockquote,
        },
        story: {
            title: aboutData.historyTitle,
            text: aboutData.historyText,
        },
        offer: {
            title: aboutData.offerTitle,
            items: aboutData.offerItems ?? [],
        },
        certificate: {
            images: certificateImages,
        },
        footer: {
            text: aboutData.footer,
        },
    }

    return (
        <main className="space-y-8">
            <AboutBanner data={pageData.banner} />
            <StorySection data={pageData.story} />
            <OfferSection data={pageData.offer} />
            <CertificationSection images={pageData.certificate.images} />
            <FooterSection data={pageData.footer} />
        </main>
    )
}
