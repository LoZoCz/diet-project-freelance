import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion'
import { FC } from 'react'
import { H4 } from '@/components/custom/typography'
import { BlockContent } from '@/sanity/types'
import Formatter from '@/components/custom/Formatter'

type FaqProps = {
    data: {
        title: string | null
        items: Array<{
            question: string | undefined
            answer: BlockContent | undefined
        }>
    }
}

const FAQSection: FC<FaqProps> = ({ data }) => {
    return (
        <section className="container space-y-6 px-4">
            <H4 className="text-center text-5xl">{data.title}</H4>
            <Accordion type="single" defaultValue="item-1" className="w-full">
                {data.items.map((item, id) => (
                    <AccordionItem value={`item-${id + 1}`} key={id}>
                        <AccordionTrigger className="text-center text-4xl tablet:text-left">
                            {item.question}
                        </AccordionTrigger>
                        <AccordionContent>
                            {item.answer && (
                                <Formatter
                                    value={item.answer}
                                    className="text-center text-lg tablet:text-left"
                                />
                            )}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </section>
    )
}

export default FAQSection
