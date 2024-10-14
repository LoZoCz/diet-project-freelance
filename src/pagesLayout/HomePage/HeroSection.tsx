import { FC } from 'react'
import { H1, P } from '@/components/custom/typography'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { homeContent } from '@/lib/defaultValues'

const HeroSection: FC = () => {
    return (
        <section className="after-hero flex h-screen w-full flex-col justify-center bg-hero-image bg-cover bg-center px-4 laptop:items-start">
            <div className="flex flex-col items-center justify-center gap-5 py-12 md:pl-8 laptop:items-start laptop:justify-start">
                <H1 className="text-center text-6xl text-white laptop:text-left laptop:text-9xl">
                    {homeContent.hero.title.main}{' '}
                    <span className="text-emerald-400">
                        {homeContent.hero.title.span}
                    </span>
                </H1>
                <P className="text-center text-lg text-white tablet:max-w-[65ch] laptop:text-left">
                    {homeContent.hero.paragraph}
                </P>
                <div className="flex items-center justify-center gap-4 laptop:items-start laptop:justify-start">
                    <Button asChild size="lg" className="rounded-lg text-xl">
                        <Link href="/blog">{homeContent.hero.cta}</Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default HeroSection
