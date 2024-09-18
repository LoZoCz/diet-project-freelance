import { FC } from 'react'
import { H3, P } from '../Typography'
import { aboutContent } from '@/lib/defaultValues'

const JourneySection: FC = () => {
    return (
        <section className="container">
            <h2 className="mb-4 text-3xl font-semibold">
                {aboutContent.journey.title}
            </h2>
            <div>
                <div className="relative space-y-8 border-l-2 border-green-500 pb-6 pl-8">
                    {aboutContent.journey.content.map((item, index) => (
                        <div key={index} className="relative">
                            <div className="absolute -left-10 mt-1.5 h-4 w-4 rounded-full bg-green-500"></div>
                            <H3 className="text-xl font-semibold">
                                {item.title}
                            </H3>
                            <P className="italic">{item.time}</P>
                            <P className="mt-2">{item.paragraph}</P>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default JourneySection
