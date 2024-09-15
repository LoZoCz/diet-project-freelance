import Banner from '@/components/custom/BlogPage/Banner'
import BlogList from '@/components/custom/BlogPage/BlogList'
import { client } from '@/sanity/client'
import { defineQuery } from 'next-sanity'
import { revalidatePath } from 'next/cache'

const blogPosts = [
    {
        title: '5 Proven Benefits of a Plant-Based Diet',
        date: 'Aug 23, 2024',
        image: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfDB8MHx8fDI%3D',
        isDraft: true,
        slug: '5-proven-benefits-of-a-plant-based-diet',
    },
    {
        title: 'How to Balance Macronutrients for Optimal Health',
        date: 'Aug 20, 2024',
        image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfDB8MHx8fDI%3D',
        isDraft: true,
        slug: 'how-to-Balance-macronutrients-for-optimal-health',
    },
    {
        title: 'The Role of Fiber in Digestive Health',
        date: 'Aug 18, 2024',
        image: 'https://images.unsplash.com/31/RpgvvtYAQeqAIs1knERU_vegetables.jpg?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Zm9vZHxlbnwwfDB8MHx8fDI%3D',
        isDraft: true,
        slug: 'the-role-of-fiber-in-digestive-health',
    },
    {
        title: 'Understanding Intermittent Fasting',
        date: 'Aug 15, 2024',
        image: 'https://images.unsplash.com/photo-1487790343276-2fe56a7d9439?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZvb2R8ZW58MHwwfDB8fHwy',
        isDraft: false,
        slug: 'understanding-intermittent-fasting',
    },
]

const options = { next: { revalidate: 60 } }

const POSTS_QUERY = defineQuery(`*[_type=="post" && defined(slug.current)] {
    title,
    slug,
    publishedAt,
    categories,
    author,
    mainImage,
    body
}`)

export default async function Blog() {
    const posts = await client.fetch(POSTS_QUERY, {}, options)
    console.log('Blog posts fetched:', posts)

    return (
        <main className="min-h-section space-y-6">
            <Banner />
            <BlogList posts={blogPosts} />
            {JSON.stringify(posts)}
        </main>
    )
}
