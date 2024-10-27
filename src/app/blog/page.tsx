import fetchAllPosts from '@/lib/fetchAllPosts'
import AboutBanner from '@/pagesLayout/BlogPage/BlogBanner'
import BlogList from '@/pagesLayout/BlogPage/BlogList'

export default async function Blog() {
    const posts = await fetchAllPosts()

    return (
        <main className="min-h-section space-y-6">
            <AboutBanner />
            <BlogList posts={posts} />
        </main>
    )
}
