import { FC } from 'react'
import abousSecImg from '@/../public/about-sect-img.jpg'
import Image from 'next/image'
import { P } from '../typography'
import { cn } from '@/lib/utils'

type Props = {
    reverse?: boolean
}

const TextSection: FC<Props> = ({ reverse }) => {
    return (
        <section
            className={cn(
                'mx-auto flex max-w-main flex-col items-center justify-center gap-12 px-4 tablet:flex-row',
                reverse ? 'flex-row-reverse' : ''
            )}
        >
            <div className="flex justify-center">
                <Image
                    src={abousSecImg}
                    alt="about-section-image"
                    className="aspect-video size-full rounded-xl object-cover tablet:aspect-square"
                />
            </div>
            <div className="space-y-8">
                <P>
                    Jestem entuzjastką zdrowego stylu życia, która wierzy, że
                    osiągnięcie pełni zdrowia nie wymaga skomplikowanych
                    strategii, lecz prostych, świadomych wyborów każdego dnia.
                    Moim celem jest dzielenie się wiedzą na temat zdrowego
                    odżywiania oraz inspiracją do podejmowania kroków, które
                    przynoszą długofalowe korzyści dla ciała i umysłu. W mojej
                    pracy stawiam na holistyczne podejście, łączące wartości
                    odżywcze naturalnych produktów z codziennymi nawykami, które
                    pomagają w utrzymaniu równowagi wewnętrznej. Każdy człowiek
                    zasługuje na to, aby czuć się dobrze w swoim ciele, a ja
                    pomagam w odnalezieniu drogi do tego celu.
                </P>
                <P>
                    Dla mnie klucz do zdrowego życia to nie tylko to, co jemy,
                    ale także jak dbamy o naszą codzienną rutynę, sen i
                    aktywność fizyczną. Wierzę, że każdy może znaleźć równowagę
                    między pracą, odpoczynkiem a troską o siebie, niezależnie od
                    trybu życia. Zdrowie nie jest celem, który osiągamy raz na
                    zawsze, lecz podróżą pełną małych kroków, które codziennie
                    prowadzą nas do lepszej wersji siebie. Moja rola polega na
                    wspieraniu w tej podróży, pomagając tworzyć proste, a
                    jednocześnie efektywne nawyki, które wzmacniają ciało i
                    umysł na każdym etapie życia.
                </P>
            </div>
        </section>
    )
}

export default TextSection
