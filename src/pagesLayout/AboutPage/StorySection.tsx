import { FC } from 'react'
import { H2 } from '@/components/custom/typography'
import { BlockContent } from '@/sanity/types'
import Formatter from '@/components/custom/Formatter'

type StoryProps = {
    data: {
        title: string | null
        text: BlockContent | null
    }
}

const StorySection: FC<StoryProps> = ({ data }) => {
    return (
        <section className="container">
            <H2 className="mb-4 text-3xl font-semibold">{data.title}</H2>
            <div className="space-y-4 rounded-lg">
                {data.text && <Formatter value={data.text} />}
            </div>
        </section>
    )
}

export default StorySection
