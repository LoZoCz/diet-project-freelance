import { FC } from 'react'
import { H3, P } from '../typography'

const JourneySection: FC = () => {
    return (
        <section className="container">
            <h2 className="mb-4 text-3xl font-semibold">Moja Droga</h2>
            <div>
                <div className="relative border-l-2 border-green-500 pb-6 pl-8">
                    <div className="relative mb-8">
                        <div className="absolute -left-10 mt-1.5 h-4 w-4 rounded-full bg-green-500"></div>
                        <H3 className="text-xl font-semibold">
                            Dietetyk w prywatnej praktyce
                        </H3>
                        <P className="italic">2018 - Obecnie</P>
                        <P className="mt-2">
                            Spełniam swoje marzenie, pomagając klientom osiągać
                            ich cele zdrowotne dzięki spersonalizowanym planom
                            żywieniowym. Każdy dzień przynosi nowe wyzwania i
                            nagrody, gdy wspólnie dążymy do najlepszej wersji
                            siebie.
                        </P>
                    </div>
                    <div className="relative mb-8">
                        <div className="absolute -left-10 mt-1.5 h-4 w-4 rounded-full bg-green-500"></div>
                        <H3 className="text-xl font-semibold">
                            Dietetyk kliniczny, Szpital Green Health
                        </H3>
                        <P className="italic">2015 - 2018</P>
                        <P className="mt-2">
                            Ta rola otworzyła mi oczy na kluczowe znaczenie
                            żywienia w procesie leczenia i powrotu do zdrowia.
                            Pracowałam z pacjentami borykającymi się z różnymi
                            schorzeniami, dostosowując plany żywieniowe do ich
                            terapii.
                        </P>
                    </div>
                    <div className="relative">
                        <div className="absolute -left-10 mt-1.5 h-4 w-4 rounded-full bg-green-500"></div>
                        <H3 className="text-xl font-semibold">
                            Asystentka badawcza, Instytut Nauk o Żywieniu
                        </H3>
                        <P className="italic">2013 - 2015</P>
                        <P className="mt-2">
                            Moja pasja do żywienia opartego na dowodach
                            naukowych rozwinęła się tutaj. Brałam udział w
                            przełomowych badaniach nad wpływem diety na choroby
                            przewlekłe, co umocniło moje zaangażowanie w ciągłą
                            naukę w tej dziedzinie.
                        </P>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default JourneySection
