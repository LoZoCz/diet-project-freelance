import { FC } from 'react'
import {
    ExternalLink,
    H2,
    H3,
    List,
    ListEle,
    P,
} from '@/components/custom/typography'
import { TabsContent } from '@/components/ui/tabs'

const TermsPrivacy: FC = () => {
    return (
        <TabsContent value="privacy">
            <div className="rounded-lg bg-white p-6 shadow-md">
                <H2 className="mb-4 text-2xl font-bold">
                    Polityka prywatności
                </H2>
                <div>
                    <div className="space-y-4">
                        <section>
                            <H3 className="mb-2 text-xl font-semibold">
                                I. Postanowienia ogólne
                            </H3>
                            <P>
                                Polityka prywatności określa, jak zbierane,
                                przetwarzane i przechowywane są dane osobowe
                                Użytkowników niezbędne do świadczenia usług
                                drogą elektroniczną za pośrednictwem serwisu
                                internetowego www.dietabezcudow.pl (dalej:
                                Serwis).
                            </P>
                            <P>
                                Serwis zbiera wyłącznie dane osobowe niezbędne
                                do świadczenia i rozwoju usług w nim
                                oferowanych.
                            </P>
                            <P>
                                Dane osobowe zbierane za pośrednictwem Serwisu
                                są przetwarzane zgodnie z Rozporządzeniem
                                Parlamentu Europejskiego i Rady (UE) 2016/679 z
                                dnia 27 kwietnia 2016 r. w sprawie ochrony osób
                                fizycznych w związku z przetwarzaniem danych
                                osobowych i w sprawie swobodnego przepływu
                                takich danych oraz uchylenia dyrektywy 95/46/WE
                                (ogólne rozporządzenie o ochronie danych, dalej
                                RODO) oraz ustawą o ochronie danych osobowych z
                                dnia 10 maja 2018 r.
                            </P>
                        </section>
                        <section>
                            <H3 className="mb-2 text-xl font-semibold">
                                II. Administrator danych
                            </H3>
                            <P>
                                Administratorem danych osobowych zbieranych
                                poprzez Serwis jest Alicja Czylok właściciel
                                serwisu www.dietabezcudow.pl, adres poczty
                                elektronicznej: dietabezcudow@o2.pl (dalej:
                                Administrator).
                            </P>
                        </section>
                        <section>
                            <H3 className="mb-2 text-xl font-semibold">
                                III. Cel zbierania danych osobowych
                            </H3>
                            <P>Dane osobowe wykorzystywane są w celu:</P>
                            <List>
                                <ListEle>
                                    weryfikacji tożsamości Użytkownika,
                                </ListEle>
                                <ListEle>realizacji płatności,</ListEle>
                                <ListEle>
                                    planowania indywidualnych jadłospisów,
                                </ListEle>
                                <ListEle>
                                    realizacji umowy dotyczącej usług i e-usług,
                                </ListEle>
                                <ListEle>
                                    komunikacji z Użytkownikiem (livechat,
                                    formularz kontaktowy itp.)
                                </ListEle>
                                <ListEle>
                                    wysyłki newslettera (po wyrażeniu zgody
                                    Użytkownika na jego otrzymywanie),
                                </ListEle>
                                <ListEle>
                                    świadczenia usług społecznościowych,
                                </ListEle>
                                <ListEle>
                                    promocji oferty Administratora,
                                </ListEle>
                                <ListEle>
                                    marketingu, remarketingu, afiliacji,
                                </ListEle>
                                <ListEle>
                                    personalizacji Serwisu dla Użytkowników,
                                </ListEle>
                                <ListEle>
                                    działań analitycznych i statystycznych,
                                </ListEle>
                                <ListEle>windykacji należności,</ListEle>
                                <ListEle>
                                    ustalenia i dochodzenia roszczeń albo obrony
                                    przed nimi.
                                </ListEle>
                            </List>
                            <P>
                                Podanie danych jest dobrowolne, ale niezbędne do
                                zawarcia umowy albo skorzystania z innych
                                funkcjonalności Serwisu.
                            </P>
                        </section>
                        <section>
                            <H3 className="mb-2 text-xl font-semibold">
                                IV. Rodzaj przetwarzanych danych osobowych
                            </H3>
                            <P>
                                Administrator może przetwarzać dane osobowe
                                Użytkownika: imię i nazwisko, data urodzenia,
                                adres zamieszkania, adres e-mail, numer
                                telefonu, NIP.
                            </P>
                        </section>
                        <section>
                            <H3 className="mb-2 text-xl font-semibold">
                                V. Okres przetwarzania danych osobowych
                            </H3>
                            <P>
                                Dane osobowe Użytkowników będą przetwarzane
                                przez okres:
                            </P>
                            <List>
                                <ListEle>
                                    gdy podstawą przetwarzania danych jest
                                    wykonanie umowy – do momentu przedawnienia
                                    roszczeń po jej wykonaniu,
                                </ListEle>
                                <ListEle>
                                    gdy podstawą przetwarzania danych jest zgoda
                                    – do momentu jej odwołania, a po odwołaniu
                                    zgody do przedawnienia roszczeń.
                                </ListEle>
                                <ListEle>
                                    W obu przypadkach termin przedawnienia
                                    wynosi 6 lat, a dla roszczeń o świadczenia
                                    okresowe i roszczeń dotyczących prowadzenia
                                    działalności gospodarczej – 3 lata (jeśli
                                    przepis szczególny nie stanowi inaczej).
                                </ListEle>
                            </List>
                        </section>
                        <section>
                            <H3 className="mb-2 text-xl font-semibold">
                                VI. Udostępnianie danych osobowych
                            </H3>
                            <P>
                                Dane osobowe Użytkowników mogą być przekazywane:
                                podmiotom powiązanym z Administratorem, jego
                                podwykonawcom, podmiotom współpracującym z
                                Administratorem np. firmom obsługującym
                                e-płatności, firmom świadczącym usługi
                                kurierskie/pocztowe, kancelariom prawnym.
                            </P>
                            <P>
                                Dane osobowe Użytkowników nie będą/będą
                                przekazywane poza teren Europejskiego Obszaru
                                Gospodarczego (EOG).
                            </P>
                        </section>
                        <section>
                            <H3 className="mb-2 text-xl font-semibold">
                                VII. Prawa Użytkowników
                            </H3>
                            <P>
                                Użytkownik Serwisu ma prawo do: dostępu do
                                treści swoich danych osobowych, ich
                                sprostowania, usunięcia, ograniczenia
                                przetwarzania, przenoszenia, wniesienia
                                sprzeciwu wobec przetwarzania, cofnięcia zgody w
                                każdej chwili (co nie ma wpływu na zgodność z
                                prawem przetwarzania dokonanego w oparciu o
                                zgodę przed jej cofnięciem).
                            </P>
                            <P>
                                Zgłoszenie o wystąpieniu przez Użytkownika z
                                uprawnieniem wynikającym z wymienionych praw
                                należy przesłać na adres{' '}
                                <ExternalLink href="mailto:dietabezcudow@o2.pl">
                                    dietabezcudow@o2.pl
                                </ExternalLink>
                            </P>
                            <P>
                                Administrator spełnia lub odmawia spełnienia
                                żądania niezwłocznie – maksymalnie w ciągu
                                miesiąca od jego otrzymania.
                            </P>
                            <P>
                                Użytkownik ma prawo złożyć skargę do Prezesa
                                Urzędu Ochrony Danych Osobowych, jeśli uzna, że
                                przetwarzanie narusza jego prawa i wolności
                                (RODO).
                            </P>
                        </section>
                        <section>
                            <H3 className="mb-2 text-xl font-semibold">
                                VIII. Pliki cookies
                            </H3>
                            <P>
                                Serwis obecnie nie zbiera informacji za pomocą
                                plików cookies – sesyjnych, stałych i podmiotów
                                zewnętrznych, co może ulec zmianie.
                            </P>
                            <P>
                                Zbieranie plików cookies wspiera poprawne
                                świadczenie usług w Serwisie i służy celom
                                statystycznym.
                            </P>
                            <P>
                                Użytkownik może określić zakres dostępu plików
                                cookies do swojego urządzenia w ustawieniach
                                przeglądarki.
                            </P>
                        </section>
                        <section>
                            <H3 className="mb-2 text-xl font-semibold">
                                IX. Zautomatyzowane podejmowanie decyzji i
                                profilowanie
                            </H3>
                            <P>
                                Dane Użytkowników nie mogą być przetwarzane w
                                zautomatyzowany sposób tak, że na skutek tego
                                mogłyby zapaść wobec nich jakiekolwiek decyzje.
                            </P>
                            <P>
                                Dane Użytkowników mogą być profilowane celem
                                dostosowania treści i personalizacji oferty po
                                wyrażeniu przez nich zgody.
                            </P>
                        </section>
                        <section>
                            <H3 className="mb-2 text-xl font-semibold">
                                X. Postanowienia końcowe
                            </H3>
                            <P>
                                Administrator ma prawo do wprowadzenia zmian w
                                Polityce prywatności, przy czym prawa
                                Użytkowników nie zostaną ograniczone.
                            </P>
                            <P>
                                Informacja o wprowadzonych zmianach pojawi się w
                                formie komunikatu dostępnego w Serwisie.
                            </P>
                            <P>
                                W sprawach nieuregulowanych w niniejszej
                                Polityce prywatności obowiązują przepisy RODO i
                                przepisy prawa polskiego.
                            </P>
                        </section>
                    </div>
                </div>
            </div>
        </TabsContent>
    )
}

export default TermsPrivacy
