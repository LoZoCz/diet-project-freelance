import { FC } from 'react'
import { H2 } from '@/components/custom/typography'
import { BlockContent } from '@/sanity/types'
import Formatter from '@/components/custom/Formatter'

type UnderstandingProps = {
    data: {
        understanding: {
            title: string | null
            text: BlockContent | null
        }
        list: {
            title: string | null
            text: BlockContent | null
        }
    }
}

const UnderstandingSection: FC<UnderstandingProps> = ({ data }) => {
    return (
        <section className="flex flex-col gap-12 md:flex-row">
            <div className="space-y-3 md:max-w-[60%]">
                <H2 className="text-2xl font-semibold">
                    {data.understanding.title}
                </H2>
                {data.understanding.text && (
                    <Formatter value={data.understanding.text} />
                )}
            </div>
            <div className="space-y-3">
                <H2 className="text-2xl font-semibold">{data.list.title}</H2>
                {data.list.text && <Formatter value={data.list.text} />}
            </div>
        </section>
    )
}

export default UnderstandingSection
