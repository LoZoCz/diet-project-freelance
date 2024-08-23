import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion'
import { FC } from 'react'
import { H4 } from '../typography'
import { faqContent } from '@/lib/defaultValues'

const FAQSection: FC = () => {
    return (
        <section className="mx-auto max-w-main space-y-6 px-4">
            <H4 className="text-center text-5xl">Pomocne pytania</H4>
            <Accordion type="single" defaultValue="item-1" className="w-full">
                {faqContent.map((faq, id) => (
                    <AccordionItem value={`item-${id + 1}`} key={id}>
                        <AccordionTrigger className="tablet:text-left text-center text-4xl">
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
