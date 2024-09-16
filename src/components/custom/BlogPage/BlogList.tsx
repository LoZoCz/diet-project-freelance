import { FC } from 'react'
import { imagesUrl } from '@/lib/imagesUrl'
import PostCard from './PostCard'
import PostImage from './PostImage'
import PostTitle from './PostTitle'
import { BLOG_QUERYResult } from '@/sanity/types'

type Props = {
    posts: BLOG_QUERYResult
}

const BlogList: FC<Props> = ({ posts }) => {
    return (
        <section className="container grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, index) => {
                const { title, slug, categories, mainImage, publishedAt } = post
                const imageSrc =
                    (mainImage?.asset &&
                        imagesUrl(mainImage?.asset?._ref, 300, 200)) ||
                    'https://via.placeholder.com/300x200'

                return (
                    <PostCard key={index} href={`/blog/${slug?.current}`}>
                        <PostImage
                            src={imageSrc}
                            alt={slug?.current + '-image' || 'post image'}
                            categories={categories || []}
                        />
                        <PostTitle
                            title={title || 'Post title'}
                            date={publishedAt}
                        />
                    </PostCard>
                )
            })}
        </section>
    )
}

export default BlogList
