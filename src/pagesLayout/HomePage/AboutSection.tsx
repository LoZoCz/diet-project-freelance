import { FC } from 'react'
import { Button } from '../../components/ui/button'
import { H4 } from '@/components/custom/typography'
import Image from 'next/image'
import Link from 'next/link'
import { BlockContent } from '@/sanity/types'
import Formatter from '@/components/custom/Formatter'

type AboutProps = {
    data: {
        title: string | null
        paragraph: BlockContent | null
        cta: string | null
        image: string | undefined
    }
}

const AboutSection: FC<AboutProps> = ({ data }) => {
    return (
        <section className="container flex flex-col items-center justify-center gap-12 px-4 tablet:flex-row">
            <div className="flex justify-center">
                <Image
                    src={data.image || ''}
                    alt="about-section-image"
                    className="aspect-video size-full rounded-xl object-cover tablet:aspect-square"
                    width={1400}
                    height={1400}
                />
            </div>
            <div className="space-y-8">
                <H4 className="text-center text-5xl tablet:text-left">
                    {data.title}
                </H4>

                {data.paragraph && (
                    <Formatter
                        value={data.paragraph}
                        className="text-center tablet:text-left"
                    />
                )}
                <div className="flex items-center justify-center gap-4 laptop:items-start laptop:justify-start">
                    <Button className="text-xl" asChild>
                        <Link href="/about">{data.cta}</Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default AboutSection
