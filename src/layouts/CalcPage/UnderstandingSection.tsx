import { FC } from 'react'
import { H2, List, ListEle, P } from '@/components/custom/Typography'
import { calcContent } from '@/lib/defaultValues'

const UnderstandingSection: FC = () => {
    return (
        <section className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div className="space-y-3">
                <H2 className="text-2xl font-semibold">
                    {calcContent.understanding.paras.title}
                </H2>
                {calcContent.understanding.paras.paragraphs.map(
                    (paragraph, index) => (
                        <P key={index}>{paragraph}</P>
                    )
                )}
            </div>
            <div className="space-y-3">
                <H2 className="text-2xl font-semibold">
                    {calcContent.understanding.list.title}
                </H2>
                <List className="list-disc space-y-2 pl-5">
                    {calcContent.understanding.list.items.map((item, index) => (
                        <ListEle key={index}>{item}</ListEle>
                    ))}
                </List>
            </div>
        </section>
    )
}

export default UnderstandingSection
