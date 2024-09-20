import { FC } from 'react'
import { H2, P } from '@/components/custom/Typography'
import { calcContent } from '@/lib/defaultValues'

const ChangesSection: FC = () => {
    return (
        <section className="space-y-3">
            <H2 className="text-2xl font-semibold">
                {calcContent.changes.title}
            </H2>
            {calcContent.changes.paragraphs.map((paragraph, index) => (
                <P key={index}>{paragraph}</P>
            ))}
        </section>
    )
}

export default ChangesSection
