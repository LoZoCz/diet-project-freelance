import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import dietPackage from '@/../public/diet-package.jpg'
import { H2, P } from '@/components/custom/typography'

export default function PackagesSection() {
    return (
        <section className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-between md:flex-row">
                <div className="flex flex-col justify-center space-y-4">
                    <div className="space-y-6">
                        <H2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                            Odmień swoje życie dzięki naszym spersonalizowanym
                            planom dietetycznym
                        </H2>
                        <P className="max-w-[600px]">
                            Odkryj zdrowszą wersję siebie dzięki naszym
                            starannie opracowanym pakietom dietetycznym.
                            Niezależnie od tego, czy dopiero zaczynasz, czy
                            szukasz transformacji dla całej rodziny, mamy dla
                            Ciebie idealny plan.
                        </P>
                    </div>
                    <div className="flex flex-col gap-2 min-[400px]:flex-row">
                        <Link href="/diets">
                            <Button className="text-xl">
                                Odkryj Pakiety Dietetyczne
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>
                    </div>
                </div>
                <div className="flex items-center justify-end">
                    <div className="relative sm:h-[400px] sm:w-[400px] lg:h-[500px] lg:w-[500px]">
                        <Image
                            src={dietPackage}
                            alt="Kolorowy, zdrowy posiłek z różnymi owocami i warzywami"
                            className="aspect-video size-full rounded-xl object-cover tablet:aspect-square"
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
