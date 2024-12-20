import { imagesUrl } from '@/lib/sanity-helpers/imagesUrl'
import { imgAsset } from '@/lib/types/typoraphyTypes'
import Image from 'next/image'

export const SanityImage = ({ image }: { image: imgAsset }) => {
    const imgSrc = imagesUrl(image.asset._ref)

    return (
        <Image
            src={imgSrc || 'https://via.placeholder.com/850x400'}
            alt="image"
            width={850}
            height={400}
        />
    )
}
