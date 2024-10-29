import { FC } from 'react'
import { ExternalLink, H2, H3, P } from '@/components/custom/typography'
import { TabsContent } from '@/components/ui/tabs'

const TermsServices: FC = () => {
    return (
        <TabsContent value="terms">
            <div className="rounded-lg bg-white p-6 shadow-md">
                <H2 className="mb-4 text-2xl font-bold">
                    Regulamin strony internetowej
                </H2>
                <section className="space-y-4">
                    <article className="space-y-1">
                        <H3 className="mb-2 text-xl font-semibold">
                            Postanowienia ogólne
                        </H3>
                        <P>
                            Gabinet dietetyczny świadczy usługi doradztwa
                            żywieniowego i terapii dietetycznych online.
                        </P>
                        <P>
                            Ustalanie terminów konsultacji odbywa się poprzez
                            kontakt e-mail pod adresem{' '}
                            <ExternalLink href="mailto:dietabezcudow@o2.pl">
                                dietabezcudow@o2.pl
                            </ExternalLink>
                            lub poprzez sms pod numerem telefonu 733-793-555.
                        </P>
                        <P>Konsultacje odbywają się telefonicznie.</P>
                        <P>
                            Klient ma prawo do odwołania wizyty najpóźniej 24
                            godziny przed jej ustalonym terminem, w przeciwnym
                            razie może zostać naliczona opłata w wysokości 50%
                            kwoty należnej za konsultację.
                        </P>
                    </article>
                    <article className="space-y-1">
                        <H3 className="mb-2 text-xl font-semibold">
                            Zasady korzystania z usług
                        </H3>
                        <P>
                            Klient zobowiązany jest do rzetelnego informowania
                            dietetyka o swoim stanie zdrowia.
                        </P>
                        <P>
                            Wskazówki dietetyczne są dostosowane indywidualnie i
                            nie mogą być stosowany w inny sposób niż zalecił
                            dietetyk.
                        </P>
                        <P>
                            Treści prezentowane na stronie mają charakter
                            informacyjny i nie zastępują konsultacji z lekarzem
                            lub dietetykiem.
                        </P>
                        <P>
                            Właściciel strony dokłada wszelkich starań, aby
                            prezentowane informacje były rzetelne i aktualne.
                        </P>
                        <P>
                            Zabrania się udostępniania zaleceń i planów
                            dietetycznych osobom trzecim, dotyczy również
                            portali społecznościowych.
                        </P>
                        <P>
                            Wszelkie treści zamieszczone na stronie, w tym
                            teksty, grafiki, zdjęcia i multimedia, są chronione
                            prawami autorskimi.
                        </P>
                        <P>
                            Kopiowanie, rozpowszechnianie lub wykorzystywanie
                            tych materiałów bez zgody właściciela jest
                            zabronione.
                        </P>
                        <P>
                            Właściciel strony nie ponosi odpowiedzialności za
                            skutki stosowania porad i informacji zamieszczonych
                            na stronie.
                        </P>
                        <P>
                            Użytkownik korzysta z treści strony na własną
                            odpowiedzialność.
                        </P>
                    </article>
                    <article className="space-y-1">
                        <H3 className="mb-2 text-xl font-semibold">
                            Płatności
                        </H3>
                        <P>
                            Płatności za usługi gabinetu należy dokonywać
                            odpowiednio wcześniej przed konsultacją.
                        </P>
                        <P>
                            W przypadku nieuiszczenia opłaty gabinet zastrzega
                            sobie prawo do odmowy kolejnych wizyt.
                        </P>
                        <P>
                            Gabinet zobowiązuje się do przestrzegania zasad
                            ochrony danych osobowych zgodnie z obowiązującymi
                            przepisami prawa.
                        </P>
                        <P>
                            Klient ma prawo do wglądu do swoich danych oraz ich
                            korekty.
                        </P>
                        <P>
                            Regulamin wchodzi w życie z dniem jego publikacji na
                            stronie internetowej.
                        </P>
                        <P>
                            Gabinet zastrzega sobie prawo do wprowadzania
                            uzasadnionych zmian w regulaminie.
                        </P>
                    </article>
                </section>
            </div>
        </TabsContent>
    )
}

export default TermsServices
