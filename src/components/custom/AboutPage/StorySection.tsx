import { FC } from 'react'
import { H2, P } from '../typography'

const StorySection: FC = () => {
    return (
        <section className="container">
            <H2 className="mb-4 text-3xl font-semibold">Moja Historia</H2>
            <div className="space-y-4 rounded-lg">
                <P>
                    Witaj w moim małym zakątku internetu! Nazywam się Jane i
                    jestem pasjonatką zdrowego żywienia oraz zdrowego stylu
                    życia. Moja przygoda z dietetyką zaczęła się, gdy byłam
                    nastolatką zmagającą się z własnymi problemami zdrowotnymi.
                    Dzięki odpowiedniemu odżywianiu zmieniłam swoje życie, a
                    teraz chcę pomagać innym zrobić to samo.
                </P>
                <P>
                    Z ponad dziesięcioletnim doświadczeniem miałam zaszczyt
                    współpracować z setkami klientów, z których każdy miał swoją
                    unikalną historię i cele. Od zapracowanych profesjonalistów
                    szukających więcej energii po sportowców dążących do
                    szczytowej formy – na własne oczy widziałam, jak odpowiednie
                    żywienie może zmienić życie.
                </P>
                <P>
                    Kiedy nie układam spersonalizowanych planów żywieniowych lub
                    nie zagłębiam się w najnowsze badania dotyczące żywienia,
                    można mnie znaleźć eksperymentującą z nowymi przepisami w
                    kuchni, pielęgnującą mój mały warzywny ogródek lub wędrującą
                    po pięknych szlakach w okolicy mojego domu. Wierzę, że
                    zrównoważone życie to klucz do długoterminowego zdrowia i
                    szczęścia.
                </P>
            </div>
        </section>
    )
}

export default StorySection
