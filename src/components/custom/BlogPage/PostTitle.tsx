import { FC, HTMLProps } from 'react'
import { H2, P } from '../typography'

type PostTitleProps = HTMLProps<HTMLDivElement> & {
    title: string | null
    date: string | null
}

const PostTitle: FC<PostTitleProps> = ({ title, date, ...props }) => {
    return (
        <div {...props} className="p-4">
            <H2 className="mb-2 text-xl font-semibold">{title}</H2>
            <P className="mb-2 text-sm text-gray-500">{date}</P>
        </div>
    )
}

export default PostTitle
