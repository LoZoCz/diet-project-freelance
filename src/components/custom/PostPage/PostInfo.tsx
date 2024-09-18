import { FC } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import { P } from '../Typography'
import { imagesUrl } from '@/lib/imagesUrl'
import { prefetchAuthor } from '@/sanity/customTypes'

type Props = {
    author: prefetchAuthor
    publishedAt: string | null
}

const PostInfo: FC<Props> = ({ author, publishedAt }) => {
    const authorSrc =
        author?.image?.asset && imagesUrl(author?.image?.asset?._ref, 56, 56)

    return (
        <div className="flex items-center gap-4">
            <Avatar className="size-14 overflow-hidden rounded-full">
                <AvatarImage
                    src={authorSrc || 'https://via.placeholder.com/1920x400'}
                    alt={author?.name + '-avatar' || 'author avatar'}
                />
                <AvatarFallback className="grid size-full place-content-center bg-black/60 text-primary-foreground">
                    {author?.name?.charAt(0) || '#'}
                </AvatarFallback>
            </Avatar>
            <P className="text-primary-foreground">{author?.name}</P>
            <P className="text-primary-foreground">{publishedAt}</P>
        </div>
    )
}

export default PostInfo
