import { FC } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { List, ListEle, P } from '../typography'

const OfferSection: FC = () => {
    return (
        <section className="container">
            <h2 className="mb-4 text-3xl font-semibold">Co Oferuję</h2>
            <Tabs
                defaultValue="approach"
                className="rounded-lg bg-white/50 shadow-md"
            >
                <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="approach">Moje Podejście</TabsTrigger>
                    <TabsTrigger value="services">Usługi</TabsTrigger>
                    <TabsTrigger value="expertise">Specjalizacje</TabsTrigger>
                </TabsList>
                <TabsContent value="approach" className="p-6">
                    <P>
                        Wierzę w holistyczne podejście oparte na dowodach
                        naukowych. U mnie nie znajdziesz modnych diet ani
                        szybkich rozwiązań! Skupiam się na trwałych zmianach
                        stylu życia, które odżywią zarówno Twoje ciało, jak i
                        umysł. Moim celem jest pomóc Ci zbudować pozytywną
                        relację z jedzeniem, zrozumieć potrzeby swojego
                        organizmu i osiągnąć długotrwałe rezultaty.
                    </P>
                </TabsContent>
                <TabsContent value="services" className="p-6">
                    <List>
                        <ListEle>Indywidualne plany żywieniowe</ListEle>
                        <ListEle>Sesje coachingowe jeden na jeden</ListEle>
                        <ListEle>Warsztaty grupowe i seminaria</ListEle>
                        <ListEle>Programy wellness dla firm</ListEle>
                        <ListEle>Tworzenie przepisów</ListEle>
                        <ListEle>Przeglądy spiżarni</ListEle>
                    </List>
                </TabsContent>
                <TabsContent value="expertise" className="p-6">
                    <div className="flex flex-wrap gap-2">
                        {[
                            'Kontrola wagi',
                            'Żywienie sportowców',
                            'Zarządzanie cukrzycą',
                            'Zdrowie jelit',
                            'Intuicyjne jedzenie',
                            'Dieta roślinna',
                            'Planowanie posiłków',
                            'Edukacja żywieniowa',
                        ].map((skill) => (
                            <Badge
                                key={skill}
                                variant="secondary"
                                className="bg-green-200"
                            >
                                {skill}
                            </Badge>
                        ))}
                    </div>
                </TabsContent>
            </Tabs>
        </section>
    )
}

export default OfferSection
