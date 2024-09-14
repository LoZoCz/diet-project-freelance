import { FC } from 'react'
import { P } from '../typography'

const FootingSection: FC = () => {
    return (
        <section className="container text-center">
            <P>
                Dziękuję za odwiedzenie mojej strony. Cieszę się, że mogę być
                częścią Twojej drogi do zdrowia!
            </P>
            <P className="mt-2">
                Skontaktujmy się i zacznijmy razem podróż do zdrowszej,
                szczęśliwszej wersji Ciebie.
            </P>
        </section>
    )
}

export default FootingSection
