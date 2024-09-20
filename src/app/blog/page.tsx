import AboutBanner from '@/pages/BlogPage/BlogBanner'
import BlogList from '@/pages/BlogPage/BlogList'
import { client } from '@/sanity/client'
import { defineQuery } from 'next-sanity'

const options = { next: { revalidate: 1800 } }

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

export default async function Blog() {
    const posts = await client.fetch(BLOG_QUERY, {}, options)

    return (
        <main className="min-h-section space-y-6">
            <AboutBanner />
            <BlogList posts={posts} />
        </main>
    )
}
