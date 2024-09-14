import { FC } from 'react'
import { H2, P } from '../typography'

const ChangesSection: FC = () => {
    return (
        <section className="space-y-3">
            <H2 className="text-2xl font-semibold">
                Wprowadzanie Zrównoważonych Zmian
            </H2>
            <P>
                Pamiętaj, że kluczem do zdrowego stylu życia jest wprowadzanie
                zrównoważonych zmian. Nie próbuj zmieniać całej swojej diety z
                dnia na dzień. Zacznij od małych, wykonalnych kroków i stopniowo
                je rozwijaj.
            </P>
            <P>
                Słuchaj swojego ciała i nie bądź zbyt surowy w stosunku do
                swoich celów kalorycznych. Czasami możesz sobie pozwolić na coś
                słodkiego – najważniejszy jest ogólny wzorzec odżywiania w
                dłuższym okresie czasu.
            </P>
            <P>
                Jeśli masz konkretne cele zdrowotne, warto skonsultować się z
                zarejestrowanym dietetykiem, który pomoże ci stworzyć
                spersonalizowany plan dostosowany do twojego stylu życia i
                preferencji.
            </P>
        </section>
    )
}

export default ChangesSection
