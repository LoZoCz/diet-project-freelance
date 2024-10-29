import { FC } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { H2 } from '@/components/custom/typography'
import { BlockContent } from '@/sanity/types'
import Formatter from '@/components/custom/Formatter'

type OfferProps = {
    data: {
        title?: string | null
        items?: Array<{
            name?: string | undefined
            description?: BlockContent
        }>
    }
}

const OfferSection: FC<OfferProps> = ({ data }) => {
    const defValue =
        data.items && data.items[0].name?.toLowerCase().replace(/\s+/g, '-')

    return (
        <section className="container">
            <H2 className="mb-4 text-3xl font-semibold">{data.title}</H2>
            <Tabs
                defaultValue={defValue || 'default'}
                className="rounded-lg bg-white/50 shadow-md"
            >
                <TabsList className="flex gap-2">
                    {data.items &&
                        data.items.map((tab, index) => (
                            <TabsTrigger
                                key={index}
                                value={
                                    tab.name?.toLowerCase().replace(' ', '-') ||
                                    ''
                                }
                                className="flex-1"
                            >
                                {tab.name}
                            </TabsTrigger>
                        ))}
                </TabsList>
                {data.items &&
                    data.items.map((tab, index) => (
                        <TabsContent
                            key={index}
                            value={
                                tab.name?.toLowerCase().replace(' ', '-') || ''
                            }
                            className="p-6"
                        >
                            {tab.description && (
                                <Formatter value={tab.description} />
                            )}
                        </TabsContent>
                    ))}
            </Tabs>
        </section>
    )
}

export default OfferSection
