import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion'
import { FC } from 'react'
import { H4 } from '../../components/custom/Typography'
import { homeContent } from '@/lib/defaultValues'

const FAQSection: FC = () => {
    return (
        <section className="container space-y-6 px-4">
            <H4 className="text-center text-5xl">{homeContent.faq.title}</H4>
            <Accordion type="single" defaultValue="item-1" className="w-full">
                {homeContent.faq.content.map((faq, id) => (
                    <AccordionItem value={`item-${id + 1}`} key={id}>
                        <AccordionTrigger className="text-center text-4xl tablet:text-left">
                            {faq.title}
                        </AccordionTrigger>
                        <AccordionContent className="text-lg">
                            {faq.content}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </section>
    )
}

export default FAQSection
