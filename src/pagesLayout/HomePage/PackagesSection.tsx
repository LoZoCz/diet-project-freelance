import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import dietPackage from '@/../public/diet-package.jpg'
import { H2, P } from '@/components/custom/typography'
import { homeContent } from '@/lib/defaultValues'

export default function PackagesSection() {
    return (
        <section className="container px-4 tablet:px-6">
            <div className="flex flex-col items-center justify-between gap-8 tablet:flex-row">
                <div className="flex flex-col justify-center space-y-4">
                    <div className="space-y-6">
                        <H2 className="text-center text-3xl font-bold tracking-tighter sm:text-5xl tablet:text-left">
                            {homeContent.diets.title}
                        </H2>
                        <P className="max-w-[600px] text-center tablet:text-left">
                            {homeContent.diets.paragraph}
                        </P>
                    </div>
                    <div className="flex items-center justify-center gap-4 laptop:items-start laptop:justify-start">
                        <Button className="text-xl" asChild>
                            <Link href="/diets">
                                {homeContent.diets.cta}
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                    </div>
                </div>
                <div className="flex items-center justify-end">
                    <div className="flex justify-center">
                        <Image
                            src={dietPackage}
                            alt="about-section-image"
                            className="aspect-video size-full rounded-xl object-cover tablet:aspect-square"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
