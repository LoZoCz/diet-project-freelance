import NotFound from '@/app/not-found'
import Formatter, { H1, P } from '@/components/custom/typography'
import { Badge } from '@/components/ui/badge'
import { imagesUrl } from '@/lib/imagesUrl'
import { client } from '@/sanity/client'
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import { defineQuery } from 'next-sanity'
import Image from 'next/image'

interface PostPageProps {
    params: {
        slug: string
    }
}

const options = { next: { revalidate: 30 } }

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
    console.log(params)

    if (!post) return NotFound()

    const { title, categories, mainImage, publishedAt, author, body } = post

    const imageSrc = mainImage?.asset
        ? imagesUrl(mainImage?.asset?._ref, 1920, 400)
        : 'https://via.placeholder.com/1920x400'

    const authorSrc = author?.image?.asset
        ? imagesUrl(author?.image?.asset?._ref, 56, 56)
        : 'https://via.placeholder.com/56x56'

    console.log(authorSrc)

    return (
        <main className="min-h-section space-y-6">
            <section className="relative">
                <div className='relative after:absolute after:inset-0 after:bg-primary/60 after:content-[""]'>
                    <Image
                        src={imageSrc}
                        alt={params.slug + '-image' || 'post image'}
                        width={1920}
                        height={400}
                        className="h-96 w-full object-cover"
                    />
                </div>
                <div className="container absolute inset-x-0 bottom-6 max-w-blog space-y-4">
                    <H1 className="text-primary-foreground">{title}</H1>
                    <div className="flex items-center gap-4">
                        <Avatar className="size-14 overflow-hidden rounded-full">
                            <AvatarImage
                                src={authorSrc}
                                alt={
                                    author?.name + '-avatar' || 'author avatar'
                                }
                            />
                            <AvatarFallback className="grid size-full place-content-center bg-black/60 text-primary-foreground">
                                {author?.name?.charAt(0) || '#'}
                            </AvatarFallback>
                        </Avatar>
                        <P className="text-primary-foreground">
                            {author?.name}
                        </P>
                        <P className="text-primary-foreground">{publishedAt}</P>
                    </div>
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

// zdejcia na blogu nie dzialaja
