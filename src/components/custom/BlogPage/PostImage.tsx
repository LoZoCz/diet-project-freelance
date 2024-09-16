import { Badge } from '@/components/ui/badge'
import Image from 'next/image'
import { FC, HTMLProps } from 'react'

type PostImageProps = HTMLProps<HTMLDivElement> & {
    src: string
    alt: string
    categories: { title: string | null }[]
}

const PostImage: FC<PostImageProps> = ({ src, alt, categories, ...props }) => {
    return (
        <div {...props} className="relative h-48 w-full overflow-hidden">
            <Image
                src={src}
                alt={alt}
                width={300}
                height={200}
                className="h-full w-full object-cover transition-all group-hover:scale-110"
            />
            {categories && (
                <div className="absolute left-3 top-3 flex flex-wrap gap-2">
                    {categories.map((category, index) => (
                        <Badge key={index}>{category.title}</Badge>
                    ))}
                </div>
            )}
        </div>
    )
}

export default PostImage
