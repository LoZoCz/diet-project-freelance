import { FC } from 'react'
import { Button } from '../../components/ui/button'
import { H3, P } from '@/components/custom/Typography'
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
                <H3 className="text-5xl">{homeContent.about.title}</H3>
                <P>{homeContent.about.paragraph}</P>
                <Button asChild>
                    <Link href="/about">{homeContent.about.cta}</Link>
                </Button>
            </div>
        </section>
    )
}

export default AboutSection
