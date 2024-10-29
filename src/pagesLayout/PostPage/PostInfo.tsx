import { FC } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import { P } from '@/components/custom/typography'
import { imagesUrl } from '@/lib/sanity-helpers/imagesUrl'
import { prefetchAuthor } from '@/sanity/customTypes'
import { dateToLocale } from '@/lib/sanity-helpers/dateToLocale'

type Props = {
    author: prefetchAuthor
    publishedAt: string | null
}

const PostInfo: FC<Props> = ({ author, publishedAt }) => {
    const authorSrc =
        author?.image?.asset && imagesUrl(author?.image?.asset?._ref, 56, 56)

    return (
        <div className="flex flex-wrap items-center gap-4">
            <Avatar className="size-14 overflow-hidden rounded-full">
                <AvatarImage
                    src={authorSrc}
                    alt={author?.name + '-avatar' || 'author avatar'}
                />
                <AvatarFallback className="grid size-full place-content-center bg-black/60 text-primary-foreground">
                    {author?.name?.charAt(0) || '#'}
                </AvatarFallback>
            </Avatar>
            <P className="text-primary-foreground">{author?.name}</P>
            {publishedAt && (
                <P className="text-primary-foreground">
                    {dateToLocale(publishedAt)}
                </P>
            )}
        </div>
    )
}

export default PostInfo
