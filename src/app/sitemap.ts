import fetchAllPosts from '@/lib/sanity-helpers/fetchAllPosts'

export default async function sitemap() {
    const baseUrl = 'https://www.dietabezcudow.pl'

    const posts = await fetchAllPosts()

    const blogPosts = posts.map((post) => {
        return {
            url: `${baseUrl}/blog/${post.slug?.current}`,
            lastModified: post.publishedAt,
        }
    })

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/calc`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/diets`,
            lastModified: new Date(),
        },

        ...blogPosts,
    ]
}
