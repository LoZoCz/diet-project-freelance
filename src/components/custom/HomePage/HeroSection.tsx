import { FC } from 'react'
import { H1, P } from '@/components/custom/typography'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const HeroSection: FC = () => {
    return (
        <section className="tablet:flex-row after-hero bg-hero-image flex h-screen w-full flex-col items-center justify-center bg-cover bg-center px-4">
            <div className="flex flex-col items-center justify-center gap-5 py-12">
                <H1 className="laptop:text-9xl text-center text-6xl text-white">
                    Dieta to nie <span className="text-emerald-400">cud</span>
                </H1>
                <P className="tablet:max-w-[65ch] text-center text-lg text-white">
                    Odkryj, jak zrównoważone odżywianie może zmienić Twoje życie
                    na lepsze. Nie szukaj magicznych rozwiązań – postaw na
                    naukowo udowodnione metody, które przynoszą długotrwałe
                    efekty. Dołącz do naszej społeczności i zainspiruj się
                    zdrowymi nawykami, które pomogą Ci osiągnąć wymarzone cele.
                </P>
                <div className="flex items-center gap-4">
                    <Button asChild size="lg" className="rounded-lg text-xl">
                        <Link href="/blog">Odwiedź blog</Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default HeroSection
