import NotFound from '@/app/not-found'
import Formatter from '@/components/custom/Formatter'
import PostInfo from '@/pagesLayout/PostPage/PostInfo'
import PostMainImage from '@/pagesLayout/PostPage/PostMainImage'
import { H1 } from '@/components/custom/typography'
import { Badge } from '@/components/ui/badge'
import fetchSinglePost from '@/lib/sanity-helpers/fetchSinglePost'
import { imagesUrl } from '@/lib/sanity-helpers/imagesUrl'

export type PostPageProps = {
    params: {
        slug: string
    }
}

export async function generateMetadata({ params }: PostPageProps) {
    try {
        const post = await fetchSinglePost({ params })

        if (!post) {
            return {
                title: 'Nie znaleziono',
                description: 'Strona której szuksz nie istnieje',
            }
        }

        const imageSrc =
            post.mainImage?.asset && imagesUrl(post.mainImage?.asset?._ref)

        return {
            openGraph: {
                title: post.title,
                image: imageSrc,
            },
        }
    } catch (err) {
        console.error('Error fetching post:', err)
        return {
            title: 'Błąd podczas pobierania danych',
            description: 'Przepraszamy, wystąpił błąd',
        }
    }
}

export default async function PostPage({ params }: PostPageProps) {
    const post = await fetchSinglePost({ params })

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
