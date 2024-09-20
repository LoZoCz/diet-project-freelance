import { FC } from 'react'
import { H2, H3, P } from '@/components/custom/Typography'
import { calcContent } from '@/lib/defaultValues'

const TipsSection: FC = () => {
    return (
        <section className="rounded-lg bg-white/50 p-8 shadow-lg">
            <H2 className="mb-4 text-2xl font-semibold">
                {calcContent.tips.title}
            </H2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {calcContent.tips.content.map((item, index) => (
                    <div key={index} className="space-y-3">
                        <H3 className="text-xl font-medium">{item.title}</H3>
                        <P>{item.paragraph}</P>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default TipsSection
