import {
    internalGroqTypeReferenceTo,
    SanityImageCrop,
    SanityImageHotspot,
} from './types'

export type prefetchAuthor = {
    name: string | null
    image: {
        asset?: {
            _ref: string
            _type: 'reference'
            _weak?: boolean
            [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
        }
        hotspot?: SanityImageHotspot
        crop?: SanityImageCrop
        _type: 'image'
    } | null
} | null

export type prefetchCategories = Array<{
    title: string | null
}> | null

export type prefetchMainImage = {
    asset?: {
        _ref: string
        _type: 'reference'
        _weak?: boolean
        [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
    }
    hotspot?: SanityImageHotspot
    crop?: SanityImageCrop
    _type: 'image'
} | null
