import { FC } from 'react'
import { H2, H3, P } from '../typography'

const TipsSection: FC = () => {
    return (
        <section className="rounded-lg bg-white/50 p-8 shadow-lg">
            <H2 className="mb-4 text-2xl font-semibold">
                Porady Dotyczące Zdrowego Odżywiania
            </H2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                <div className="space-y-3">
                    <H3 className="text-xl font-medium">
                        Zbilansowane Posiłki
                    </H3>
                    <P>
                        Dąż do połączenia chudego białka, złożonych węglowodanów
                        i zdrowych tłuszczów w każdym posiłku. Dodaj różnorodne
                        kolorowe owoce i warzywa, aby zapewnić sobie szeroki
                        zakres składników odżywczych.
                    </P>
                </div>
                <div className="space-y-3">
                    <H3 className="text-xl font-medium">Kontrola Porcji</H3>
                    <P>
                        Używaj mniejszych talerzy, odmierzaj jedzenie i zwracaj
                        uwagę na wielkość porcji. To pomoże ci uniknąć
                        przejadania się, jednocześnie ciesząc się ulubionymi
                        potrawami z umiarem.
                    </P>
                </div>
                <div className="space-y-3">
                    <H3 className="text-xl font-medium">Nawodnienie</H3>
                    <P>
                        Pij dużo wody przez cały dzień. Czasem pragnienie może
                        być mylone z głodem. Celuj w co najmniej 8 szklanek wody
                        dziennie, a więcej, jeśli jesteś aktywny lub przebywasz
                        w gorącym klimacie.
                    </P>
                </div>
            </div>
        </section>
    )
}

export default TipsSection
