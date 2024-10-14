import { FC } from 'react'
import { H2, H3, List, ListEle, P } from '@/components/custom/typography'
import { TabsContent } from '@/components/ui/tabs'

const TermsPrivacy: FC = () => {
    return (
        <TabsContent value="privacy">
            <div className="rounded-lg bg-white p-6 shadow-md">
                <H2 className="mb-4 text-2xl font-bold">Zasady RODO</H2>
                <div>
                    <div className="space-y-4 text-green-900">
                        <section>
                            <H3 className="mb-2 text-xl font-semibold">
                                1. Administrator danych osobowych
                            </H3>
                            <P>
                                Administratorem Państwa danych osobowych jest
                                [imię i nazwisko/nazwa firmy], z siedzibą w
                                [adres], e-mail: [adres e-mail], tel.: [numer
                                telefonu].
                            </P>
                        </section>
                        <section>
                            <H3 className="mb-2 text-xl font-semibold">
                                2. Cele przetwarzania danych osobowych
                            </H3>
                            <P>Państwa dane osobowe przetwarzane są w celu:</P>
                            <List>
                                <ListEle>
                                    Świadczenia usług dietetycznych
                                </ListEle>
                                <ListEle>
                                    Prowadzenia korespondencji i udzielania
                                    odpowiedzi na zapytania
                                </ListEle>
                                <ListEle>
                                    Realizacji obowiązków prawnych ciążących na
                                    administratorze
                                </ListEle>
                                <ListEle>
                                    Marketingu bezpośredniego własnych produktów
                                    i usług
                                </ListEle>
                            </List>
                        </section>
                        <section>
                            <H3 className="mb-2 text-xl font-semibold">
                                3. Podstawa prawna przetwarzania danych
                            </H3>
                            <P>
                                Podstawą prawną przetwarzania Państwa danych
                                osobowych jest:
                            </P>
                            <List>
                                <ListEle>
                                    Art. 6 ust. 1 lit. a) RODO - zgoda osoby,
                                    której dane dotyczą
                                </ListEle>
                                <ListEle>
                                    Art. 6 ust. 1 lit. b) RODO - niezbędność do
                                    wykonania umowy
                                </ListEle>
                                <ListEle>
                                    Art. 6 ust. 1 lit. c) RODO - niezbędność do
                                    wypełnienia obowiązku prawnego
                                </ListEle>
                                <ListEle>
                                    Art. 6 ust. 1 lit. f) RODO - prawnie
                                    uzasadniony interes administratora
                                </ListEle>
                            </List>
                        </section>
                        <section>
                            <H3 className="mb-2 text-xl font-semibold">
                                4. Okres przechowywania danych
                            </H3>
                            <P>
                                Państwa dane osobowe będą przechowywane przez
                                okres niezbędny do realizacji celów, w jakich są
                                przetwarzane, a po tym czasie przez okres
                                wymagany przez przepisy prawa.
                            </P>
                        </section>
                        <section>
                            <H3 className="mb-2 text-xl font-semibold">
                                5. Prawa osób, których dane dotyczą
                            </H3>
                            <P>Posiadają Państwo prawo do:</P>
                            <List>
                                <ListEle>
                                    Dostępu do swoich danych osobowych
                                </ListEle>
                                <ListEle>Sprostowania danych</ListEle>
                                <ListEle>Usunięcia danych</ListEle>
                                <ListEle>
                                    Ograniczenia przetwarzania danych
                                </ListEle>
                                <ListEle>Przenoszenia danych</ListEle>
                                <ListEle>
                                    Wniesienia sprzeciwu wobec przetwarzania
                                </ListEle>
                                <ListEle>
                                    Cofnięcia zgody na przetwarzanie danych
                                </ListEle>
                            </List>
                        </section>
                        <section>
                            <H3 className="mb-2 text-xl font-semibold">
                                6. Odbiorcy danych
                            </H3>
                            <P>
                                Odbiorcami Państwa danych osobowych mogą być
                                podmioty świadczące usługi na rzecz
                                administratora (np. usługi IT, księgowe) oraz
                                organy państwowe w zakresie swoich uprawnień.
                            </P>
                        </section>
                        <section>
                            <H3 className="mb-2 text-xl font-semibold">
                                7. Przekazywanie danych do państw trzecich
                            </H3>
                            <P>
                                Państwa dane osobowe nie będą przekazywane do
                                państw trzecich lub organizacji
                                międzynarodowych.
                            </P>
                        </section>
                        <section>
                            <H3 className="mb-2 text-xl font-semibold">
                                8. Zautomatyzowane podejmowanie decyzji
                            </H3>
                            <P>
                                Państwa dane osobowe nie będą podlegały
                                zautomatyzowanemu podejmowaniu decyzji, w tym
                                profilowaniu.
                            </P>
                        </section>
                        <section>
                            <H3 className="mb-2 text-xl font-semibold">
                                9. Skarga do organu nadzorczego
                            </H3>
                            <P>
                                Przysługuje Państwu prawo wniesienia skargi do
                                Prezesa Urzędu Ochrony Danych Osobowych, jeśli
                                uznają Państwo, że przetwarzanie Państwa danych
                                osobowych narusza przepisy RODO.
                            </P>
                        </section>
                    </div>
                </div>
            </div>
        </TabsContent>
    )
}

export default TermsPrivacy
