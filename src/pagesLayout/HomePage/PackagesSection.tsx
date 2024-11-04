import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { H2 } from '@/components/custom/typography'
import { FC } from 'react'
import { BlockContent } from '@/sanity/types'
import Formatter from '@/components/custom/Formatter'

type PackagesProps = {
    data: {
        title: string | null
        paragraph: BlockContent | null
        cta: string | null
        image: string | undefined
    }
}

const PackagesSection: FC<PackagesProps> = ({ data }) => {
    return (
        <section className="container px-4 tablet:px-6">
            <div className="flex flex-col items-center justify-between gap-8 tablet:flex-row">
                <div className="flex flex-col justify-center space-y-4">
                    <div className="space-y-6">
                        <H2 className="text-center text-3xl font-bold tracking-tighter sm:text-5xl tablet:text-left">
                            {data.title}
                        </H2>
                        {data.paragraph && (
                            <Formatter
                                value={data.paragraph}
                                className="max-w-[600px] text-center tablet:text-left"
                            />
                        )}
                    </div>
                    <div className="flex items-center justify-center gap-4 laptop:items-start laptop:justify-start">
                        <Button className="text-xl" asChild>
                            <Link href="/diets">
                                {data.cta}
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                    </div>
                </div>
                <div className="flex items-center justify-end">
                    <div className="flex justify-center">
                        <Image
                            src={data.image || ''}
                            alt="about-section-image"
                            className="aspect-video size-full rounded-xl object-cover tablet:aspect-square"
                            width={300}
                            height={300}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PackagesSection
