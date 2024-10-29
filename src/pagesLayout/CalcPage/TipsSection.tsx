import { FC } from 'react'
import { H2, H3 } from '@/components/custom/typography'
import { BlockContent } from '@/sanity/types'
import Formatter from '@/components/custom/Formatter'

type TipsProps = {
    data: {
        title?: string | null
        cards?: Array<{
            name?: string | undefined
            description?: BlockContent
        }>
    }
}

const TipsSection: FC<TipsProps> = ({ data }) => {
    return (
        <section className="rounded-lg bg-white/50 p-8 shadow-lg">
            <H2 className="mb-4 text-2xl font-semibold">{data.title}</H2>
            <article className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {data.cards &&
                    data.cards.map((card) => (
                        <div key={card.name} className="space-y-4">
                            <H3 className="text-xl font-semibold">
                                {card.name}
                            </H3>
                            {card.description && (
                                <Formatter value={card.description} />
                            )}
                        </div>
                    ))}
            </article>
        </section>
    )
}

export default TipsSection
