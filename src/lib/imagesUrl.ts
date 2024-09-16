import { client } from '@/sanity/client'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'
import imageUrlBuilder from '@sanity/image-url'

const { projectId, dataset } = client.config()

export const imagesUrl = (
    source: SanityImageSource,
    width: number,
    height: number
) => {
    if (projectId && dataset) {
        return imageUrlBuilder({ projectId, dataset })
            .image(source)
            .width(width)
            .height(height)
            .url()
    } else {
        return null
    }
}
