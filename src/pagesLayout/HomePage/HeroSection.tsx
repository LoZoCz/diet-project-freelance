import { FC } from 'react'
import { H1, P } from '@/components/custom/typography'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { homeContent } from '@/lib/defaultValues'

const HeroSection: FC = () => {
    return (
        <section className="after-hero flex h-screen w-full flex-col items-center justify-center bg-hero-image bg-cover bg-center px-4 tablet:flex-row">
            <div className="flex flex-col items-center justify-center gap-5 py-12">
                <H1 className="text-center text-6xl text-white laptop:text-9xl">
                    {homeContent.hero.title.main}{' '}
                    <span className="text-emerald-400">
                        {homeContent.hero.title.span}
                    </span>
                </H1>
                <P className="text-center text-lg text-white tablet:max-w-[65ch]">
                    {homeContent.hero.paragraph}
                </P>
                <div className="flex items-center gap-4">
                    <Button asChild size="lg" className="rounded-lg text-xl">
                        <Link href="/blog">{homeContent.hero.cta}</Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default HeroSection
