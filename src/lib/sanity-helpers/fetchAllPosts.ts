import { defineQuery } from 'next-sanity'
import { client } from '@/sanity/client'

const options = { next: { revalidate: 900 } }

const BLOG_QUERY = defineQuery(`*[_type=="post"] {
    title,
    slug,
    publishedAt,
    categories[]->{
        title
    },
    author,
    mainImage,
    body
}`)

export default async function fetchAllPosts() {
    const posts = await client.fetch(BLOG_QUERY, {}, options)

    return posts
}
