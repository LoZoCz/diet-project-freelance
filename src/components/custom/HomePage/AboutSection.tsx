import { FC } from 'react'
import { Button } from '../../ui/button'
import { H3, P } from '../typography'
import Image from 'next/image'
import abousSecImg from '@/../public/about-sect-img.jpg'

const AboutSection: FC = () => {
    return (
        <section className="mx-auto flex max-w-main flex-col items-center justify-center gap-12 px-4 tablet:flex-row">
            <div className="flex justify-center">
                <Image
                    src={abousSecImg}
                    alt="about-section-image"
                    className="aspect-video size-full rounded-xl object-cover tablet:aspect-square"
                />
            </div>
            <div className="space-y-8">
                <H3 className="text-5xl">Dowiedz się więcej o mnie</H3>
                <P>
                    Jestem pasjonatką zdrowego stylu życia i dietetyki, a moim
                    celem jest wspieranie innych w osiąganiu ich celów
                    zdrowotnych i sylwetkowych poprzez proste, ale skuteczne
                    podejście do odżywiania. Wierzę, że kluczem do zdrowia jest
                    dieta oparta na naturalnych, regionalnych produktach, które
                    są dostępne na wyciągnięcie ręki. Moje plany żywieniowe są
                    proste, ale radykalne w swojej skuteczności — eliminuję
                    zbędne komplikacje, stawiając na prostotę i autentyczność w
                    kuchni. Każdy zasługuje na zdrowe, smaczne jedzenie, które
                    dostarcza energii i poprawia samopoczucie, bez zbędnych
                    udziwnień.
                </P>
                <Button>O mnie</Button>
            </div>
        </section>
    )
}

export default AboutSection
