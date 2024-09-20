import { FC, HTMLProps } from 'react'
import { H2, P } from '@/components/custom/Typography'
import { dateToLocale } from '@/lib/dateToLocale'

type PostTitleProps = HTMLProps<HTMLDivElement> & {
    title: string | null
    date: string | null
}

const PostTitle: FC<PostTitleProps> = ({ title, date, ...props }) => {
    return (
        <div {...props} className="p-4">
            <H2 className="mb-2 text-xl font-semibold">{title}</H2>
            {date && (
                <P className="mb-2 text-sm text-gray-500">
                    {dateToLocale(date)}
                </P>
            )}
        </div>
    )
}

export default PostTitle
