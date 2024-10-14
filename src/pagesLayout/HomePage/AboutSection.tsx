import { FC } from 'react'
import { Button } from '../../components/ui/button'
import { H4, P } from '@/components/custom/typography'
import Image from 'next/image'
import abousSecImg from '@/../public/about-sect-img.jpg'
import Link from 'next/link'
import { homeContent } from '@/lib/defaultValues'

const AboutSection: FC = () => {
    return (
        <section className="container flex flex-col items-center justify-center gap-12 px-4 tablet:flex-row">
            <div className="flex justify-center">
                <Image
                    src={abousSecImg}
                    alt="about-section-image"
                    className="aspect-video size-full rounded-xl object-cover tablet:aspect-square"
                />
            </div>
            <div className="space-y-8">
                <H4 className="text-center text-5xl tablet:text-left">
                    {homeContent.about.title}
                </H4>
                <P className="text-center tablet:text-left">
                    {homeContent.about.paragraph}
                </P>
                <div className="flex items-center justify-center gap-4 laptop:items-start laptop:justify-start">
                    <Button className="text-xl" asChild>
                        <Link href="/about">{homeContent.about.cta}</Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default AboutSection
