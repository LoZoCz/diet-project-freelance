import { FC } from 'react'
import { H1, P } from '@/components/custom/typography'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { BlockContent } from '@/sanity/types'
import Formatter from '@/components/custom/Formatter'

type HeroProps = {
    data: {
        title: {
            text: string | null
            span: string | null
        }
        paragraph: BlockContent | null
        cta: string | null
    }
}

const HeroSection: FC<HeroProps> = ({ data }) => {
    return (
        <section className="after-hero flex h-screen w-full flex-col justify-center bg-hero-image bg-cover bg-center px-4 laptop:items-start">
            <div className="flex flex-col items-center justify-center gap-5 py-12 md:pl-8 laptop:items-start laptop:justify-start">
                <H1 className="text-center text-6xl text-white laptop:text-left laptop:text-9xl">
                    {data.title.text}{' '}
                    <span className="text-emerald-400">{data.title.span}</span>
                </H1>
                {data.paragraph && (
                    <Formatter
                        value={data.paragraph}
                        className="text-center text-lg text-white tablet:max-w-[65ch] laptop:text-left"
                    />
                )}
                <div className="flex items-center justify-center gap-4 laptop:items-start laptop:justify-start">
                    <Button asChild size="lg" className="rounded-lg text-xl">
                        <Link href="/blog">{data.cta}</Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default HeroSection
