import { FC } from 'react'
import { H1, P } from '@/components/custom/typography'
import Image from 'next/image'

type BannerProps = {
    data: {
        title: string | null
        image: string | undefined
        blockquote: string | null
    }
}

const AboutBanner: FC<BannerProps> = ({ data }) => {
    return (
        <section className="container flex flex-col items-center gap-5">
            <H1 className="text-center text-4xl font-bold">{data.title}</H1>
            <div className="size-64">
                <Image
                    src={data.image || ''}
                    alt="Jane Doe, Dietetyczka"
                    className="mx-auto aspect-square h-full w-full rounded-full border-4 border-green-500 object-cover shadow-lg"
                    width={250}
                    height={250}
                />
            </div>
            <P className="text-center text-xl italic">{data.blockquote}</P>
        </section>
    )
}

export default AboutBanner
