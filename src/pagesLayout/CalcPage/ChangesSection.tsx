import { FC } from 'react'
import { H2, P } from '@/components/custom/typography'
import { calcContent } from '@/lib/defaultValues'
import { BlockContent } from '@/sanity/types'
import Formatter from '@/components/custom/Formatter'

type ChangesProps = {
    data: {
        title: string | null
        text: BlockContent | null
    }
}

const ChangesSection: FC<ChangesProps> = ({ data }) => {
    return (
        <section className="space-y-3">
            <H2 className="text-2xl font-semibold">{data.title}</H2>
            {data.text && <Formatter value={data.text} />}
        </section>
    )
}

export default ChangesSection
