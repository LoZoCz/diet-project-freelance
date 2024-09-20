import Link, { LinkProps } from 'next/link'
import { FC } from 'react'

type PostCardProps = LinkProps & {
    children: React.ReactNode
}

const PostCard: FC<PostCardProps> = ({ children, href, ...props }) => {
    return (
        <Link
            {...props}
            href={href}
            className="group cursor-pointer overflow-hidden rounded-md bg-white shadow-md"
        >
            {children}
        </Link>
    )
}

export default PostCard
