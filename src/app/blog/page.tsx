import Banner from '@/components/custom/BlogPage/Banner'
import BlogList from '@/components/custom/BlogPage/BlogList'
import { client } from '@/sanity/client'
import { defineQuery } from 'next-sanity'

const options = { next: { revalidate: 30 } }

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
    console.log(posts.length)

    return (
        <main className="min-h-section space-y-6">
            <Banner />
            <BlogList posts={posts} />
        </main>
    )
}
