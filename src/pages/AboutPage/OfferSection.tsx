import { FC } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { List, ListEle, P } from '../../components/custom/Typography'
import { aboutContent } from '@/lib/defaultValues'

const OfferSection: FC = () => {
    return (
        <section className="container">
            <h2 className="mb-4 text-3xl font-semibold">
                {aboutContent.offer.title}
            </h2>
            <Tabs
                defaultValue={aboutContent.offer.first.value}
                className="rounded-lg bg-white/50 shadow-md"
            >
                <TabsList className="grid w-full grid-cols-3">
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
                    <List>
                        {aboutContent.offer.second.content.map(
                            (item, index) => (
                                <ListEle key={index}>{item}</ListEle>
                            )
                        )}
                    </List>
                </TabsContent>
                <TabsContent
                    value={aboutContent.offer.third.value}
                    className="p-6"
                >
                    <div className="flex flex-wrap gap-2">
                        {aboutContent.offer.third.content.map(
                            (skill, index) => (
                                <Badge
                                    key={index}
                                    variant="secondary"
                                    className="bg-green-200"
                                >
                                    {skill}
                                </Badge>
                            )
                        )}
                    </div>
                </TabsContent>
            </Tabs>
        </section>
    )
}

export default OfferSection
