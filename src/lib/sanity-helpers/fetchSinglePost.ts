import { PostPageProps } from '@/app/blog/[slug]/page'
import { client } from '@/sanity/client'
import { defineQuery } from 'next-sanity'

const options = { next: { revalidate: 900 } }

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

export default async function fetchSinglePost({ params }: PostPageProps) {
    const post = await client.fetch(POST_QUERY, params, options)

    return post
}
