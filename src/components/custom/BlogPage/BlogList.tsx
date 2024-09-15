import Image from 'next/image'
import { FC } from 'react'
import { H2, P } from '../typography'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'

type Props = {
    posts: Array<{
        title: string
        image: string
        date: string
        isDraft: boolean
        slug: string
    }>
}

const BlogList: FC<Props> = ({ posts }) => {
    return (
        <section className="container grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, index) => (
                <Link
                    key={index}
                    href={`/blog/${post.slug}`}
                    className="group cursor-pointer overflow-hidden rounded-md bg-white shadow-md"
                >
                    <div className="relative h-48 w-full overflow-hidden">
                        <Image
                            src={post.image}
                            alt={post.title}
                            width={300}
                            height={200}
                            className="h-full w-full object-cover transition-all group-hover:scale-110"
                        />
                        {post.isDraft && (
                            <div className="absolute left-3 top-3">
                                <Badge className="">Draft</Badge>
                            </div>
                        )}
                    </div>
                    <div className="p-4">
                        <H2 className="mb-2 text-xl font-semibold">
                            {post.title}
                        </H2>
                        <P className="mb-2 text-sm text-gray-500">
                            {post.date}
                        </P>
                    </div>
                </Link>
            ))}
        </section>
    )
}

export default BlogList
