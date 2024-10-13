import { FC } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { H2, P } from '@/components/custom/typography'
import { aboutContent } from '@/lib/defaultValues'

const OfferSection: FC = () => {
    return (
        <section className="container">
            <H2 className="mb-4 text-3xl font-semibold">
                {aboutContent.offer.title}
            </H2>
            <Tabs
                defaultValue={aboutContent.offer.first.value}
                className="rounded-lg bg-white/50 shadow-md"
            >
                <TabsList className="grid w-full grid-cols-2">
                    {aboutContent.offer.tabs.map((tab, index) => (
                        <TabsTrigger key={index} value={tab.value}>
                            {tab.title}
                        </TabsTrigger>
                    ))}
                </TabsList>
                <TabsContent
                    value={aboutContent.offer.first.value}
                    className="p-6"
                >
                    <P>{aboutContent.offer.first.content}</P>
                </TabsContent>
                <TabsContent
                    value={aboutContent.offer.second.value}
                    className="p-6"
                >
                    <div className="flex flex-wrap gap-2">
                        {aboutContent.offer.second.content.map(
                            (skill, index) => (
                                <P key={index}>{skill}</P>
                            )
                        )}
                    </div>
                </TabsContent>
            </Tabs>
        </section>
    )
}

export default OfferSection
