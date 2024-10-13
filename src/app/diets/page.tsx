import Image from 'next/image'
import { ShoppingCart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ExternalLink, H1, H4, P } from '@/components/custom/typography'
import { dietPackages } from '@/lib/defaultValues'

export default function Diets() {
    return (
        <section className="min-h-screen">
            <div className="container mx-auto px-4">
                <H1 className="text-3xl font-bold">Pakiety Dietetyczne</H1>
                <P className="mt-2">
                    Wybierz idealny plan dietetyczny dopasowany do Twoich
                    potrzeb
                </P>
            </div>
            <article className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
                    {dietPackages.map((pkg, index) => (
                        <div
                            key={index}
                            className="flex flex-col gap-4 rounded-lg bg-white p-4 shadow-lg"
                        >
                            <div>
                                <Badge
                                    className="mb-2 w-fit"
                                    variant="secondary"
                                >
                                    {pkg.badge}
                                </Badge>
                                <H4 className="text-xl font-bold text-green-800">
                                    {pkg.title}
                                </H4>
                            </div>
                            <div className="flex-grow space-y-4">
                                <div className="relative aspect-square">
                                    <Image
                                        src={pkg.image}
                                        alt={pkg.title}
                                        fill
                                        className="rounded-md object-cover"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                </div>
                                <p className="text-green-700">
                                    {pkg.description}
                                </p>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-2xl font-bold text-green-800">
                                    {pkg.price.toFixed(2)}zł
                                </span>
                                <Button
                                    asChild
                                    className="bg-green-600 hover:bg-green-700"
                                >
                                    <ExternalLink
                                        className="no-underline"
                                        href={pkg.link}
                                    >
                                        <ShoppingCart className="mr-2 h-4 w-4" />{' '}
                                        Kup teraz
                                    </ExternalLink>
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </article>
        </section>
    )
}
