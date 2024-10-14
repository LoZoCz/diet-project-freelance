import { FC } from 'react'
import { H2, H3, P } from '@/components/custom/typography'
import { TabsContent } from '@/components/ui/tabs'

const TermsServices: FC = () => {
    return (
        <TabsContent value="terms">
            <div className="rounded-lg bg-white p-6 shadow-md">
                <H2 className="mb-4 text-2xl font-bold">
                    Regulamin strony internetowej
                </H2>
                <div>
                    <div className="space-y-4">
                        <section>
                            <H3 className="mb-2 text-xl font-semibold">
                                1. Postanowienia ogólne
                            </H3>
                            <P>
                                1.1. Niniejszy regulamin określa zasady
                                korzystania ze strony internetowej [nazwa
                                strony] dostępnej pod adresem [adres URL].
                            </P>
                            <P>
                                1.1. Niniejszy regulamin określa zasady
                                korzystania ze strony internetowej [nazwa
                                strony] dostępnej pod adresem [adres URL].
                            </P>
                            <P>
                                1.3. Korzystanie ze strony oznacza akceptację
                                niniejszego regulaminu.
                            </P>
                        </section>
                        <section>
                            <H3 className="mb-2 text-xl font-semibold">
                                2. Usługi i treści
                            </H3>
                            <P>
                                2.1. Strona oferuje informacje i usługi z
                                zakresu dietetyki i zdrowego stylu życia.
                            </P>
                            <P>
                                2.2. Treści prezentowane na stronie mają
                                charakter informacyjny i nie zastępują
                                konsultacji z lekarzem lub dietetykiem.
                            </P>
                            <P>
                                2.3. Właściciel strony dokłada wszelkich starań,
                                aby prezentowane informacje były rzetelne i
                                aktualne.
                            </P>
                        </section>
                        <section>
                            <H3 className="mb-2 text-xl font-semibold">
                                3. Prawa autorskie
                            </H3>
                            <P>
                                3.1. Wszelkie treści zamieszczone na stronie, w
                                tym teksty, grafiki, zdjęcia i multimedia, są
                                chronione prawami autorskimi.
                            </P>
                            <P>
                                3.2. Kopiowanie, rozpowszechnianie lub
                                wykorzystywanie tych materiałów bez zgody
                                właściciela jest zabronione.
                            </P>
                        </section>
                        <section>
                            <H3 className="mb-2 text-xl font-semibold">
                                4. Odpowiedzialność
                            </H3>
                            <P>
                                4.1. Właściciel strony nie ponosi
                                odpowiedzialności za skutki stosowania porad i
                                informacji zamieszczonych na stronie.
                            </P>
                            <P>
                                4.2. Użytkownik korzysta z treści strony na
                                własną odpowiedzialność.
                            </P>
                        </section>
                        <section>
                            <H3 className="mb-2 text-xl font-semibold">
                                5. Zmiany regulaminu
                            </H3>
                            <P>
                                5.1. Właściciel strony zastrzega sobie prawo do
                                zmiany niniejszego regulaminu.
                            </P>
                            <P>
                                5.2. O wszelkich zmianach użytkownicy będą
                                informowani poprzez stosowny komunikat na
                                stronie.
                            </P>
                        </section>
                    </div>
                </div>
            </div>
        </TabsContent>
    )
}

export default TermsServices
