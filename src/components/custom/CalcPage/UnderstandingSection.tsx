import { FC } from 'react'
import { H2, List, ListEle, P } from '../typography'

const UnderstandingSection: FC = () => {
    return (
        <section className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div className="space-y-3">
                <H2 className="text-2xl font-semibold">Zrozumienie Kalorii</H2>
                <P>
                    Kalorie to jednostki energii, które twoje ciało wykorzystuje
                    do funkcjonowania. Liczba potrzebnych kalorii zależy od
                    wielu czynników, w tym wieku, płci, wzrostu, wagi i poziomu
                    aktywności.
                </P>
                <P>
                    Utrzymanie zbilansowanego spożycia kalorii jest kluczowe dla
                    kontroli wagi i ogólnego zdrowia. Zbyt mała liczba kalorii
                    może prowadzić do niedoborów składników odżywczych, podczas
                    gdy nadmiar kalorii może skutkować przyrostem masy ciała.
                </P>
            </div>
            <div className="space-y-3">
                <H2 className="text-2xl font-semibold">
                    Korzyści z Zbilansowanej Diety
                </H2>
                <List className="list-disc space-y-2 pl-5">
                    <ListEle>Poprawa poziomu energii i nastroju</ListEle>
                    <ListEle>Lepsza kontrola wagi</ListEle>
                    <ListEle>Zmniejszone ryzyko chorób przewlekłych</ListEle>
                    <ListEle>Wzmocniona funkcja odpornościowa</ListEle>
                    <ListEle>Poprawa trawienia i zdrowia jelit</ListEle>
                    <ListEle>Lepsza jakość snu</ListEle>
                </List>
            </div>
        </section>
    )
}

export default UnderstandingSection
