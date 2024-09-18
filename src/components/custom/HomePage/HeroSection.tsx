import { FC } from 'react'
import { H1, P } from '@/components/custom/typography'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const HeroSection: FC = () => {
    return (
        <section className="after-hero flex h-screen w-full flex-col items-center justify-center bg-hero-image bg-cover bg-center px-4 tablet:flex-row">
            <div className="flex flex-col items-center justify-center gap-5 py-12">
                <H1 className="text-center text-6xl text-white laptop:text-9xl">
                    Dieta to nie <span className="text-emerald-400">cud</span>
                </H1>
                <P className="text-center text-lg text-white tablet:max-w-[65ch]">
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
