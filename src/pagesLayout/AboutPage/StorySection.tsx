import { FC } from 'react'
import { H2, P } from '@/components/custom/typography'
import { aboutContent } from '@/lib/defaultValues'

const StorySection: FC = () => {
    return (
        <section className="container">
            <H2 className="mb-4 text-3xl font-semibold">
                {aboutContent.story.title}
            </H2>
            <div className="space-y-4 rounded-lg">
                {aboutContent.story.paragraphs.map((paragraph, index) => (
                    <P key={index}>{paragraph}</P>
                ))}
            </div>
        </section>
    )
}

export default StorySection
