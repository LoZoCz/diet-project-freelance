import { imagesUrl } from '@/lib/sanity-helpers/imagesUrl'
import { prefetchMainImage } from '@/sanity/customTypes'
import Image from 'next/image'
import { FC } from 'react'

type Props = {
    mainImage: prefetchMainImage
    params: {
        slug: string
    }
}

const PostMainImage: FC<Props> = ({ mainImage, params }) => {
    const imageSrc =
        mainImage?.asset && imagesUrl(mainImage?.asset?._ref, 1920, 400)

    return (
        <div className='relative after:absolute after:inset-0 after:bg-primary/60 after:content-[""]'>
            <Image
                src={imageSrc || 'https://via.placeholder.com/1920x400'}
                alt={params.slug + '-image' || 'post image'}
                width={1920}
                height={400}
                className="h-96 w-full object-cover"
            />
        </div>
    )
}

export default PostMainImage
