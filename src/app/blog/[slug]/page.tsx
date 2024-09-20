import NotFound from '@/app/not-found'
import Formatter from '@/components/custom/Formatter'
import PostInfo from '@/layouts/PostPage/PostInfo'
import PostMainImage from '@/layouts/PostPage/PostMainImage'
import { H1 } from '@/components/custom/Typography'
import { Badge } from '@/components/ui/badge'
import { client } from '@/sanity/client'
import { defineQuery } from 'next-sanity'

type PostPageProps = {
    params: {
        slug: string
    }
}

const options = { next: { revalidate: 1800 } }

const POST_QUERY = defineQuery(`*[_type=="post" && slug.current==$slug][0] {
    title,
    slug,
    publishedAt,
    categories[]->{
      title
    },
    author->{
      name,
      image
    },
    mainImage,
    body
}`)

export default async function PostPage({ params }: PostPageProps) {
    const post = await client.fetch(POST_QUERY, params, options)

    if (!post) return NotFound()

    const { title, categories, mainImage, publishedAt, author, body } = post

    return (
        <main className="min-h-section space-y-6">
            <section className="relative">
                <PostMainImage mainImage={mainImage} params={params} />
                <div className="container absolute inset-x-0 bottom-6 max-w-blog space-y-4">
                    <H1 className="text-primary-foreground">{title}</H1>
                    <PostInfo author={author} publishedAt={publishedAt} />
                    {categories && (
                        <div className="flex flex-wrap gap-2">
                            {categories.map((category, index) => (
                                <Badge variant="secondary" key={index}>
                                    {category.title}
                                </Badge>
                            ))}
                        </div>
                    )}
                </div>
            </section>
            <article className="container max-w-blog">
                {body && <Formatter value={body} />}
            </article>
        </main>
    )
}
