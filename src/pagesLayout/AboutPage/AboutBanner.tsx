import { FC } from 'react'
import { H1, P } from '@/components/custom/typography'
import Image from 'next/image'
import abousSecImg from '@/../public/about-sect-img.jpg'
import { aboutContent } from '@/lib/defaultValues'

const AboutBanner: FC = () => {
    return (
        <section className="container flex flex-col items-center gap-5">
            <H1 className="text-center text-4xl font-bold">
                {aboutContent.title}
            </H1>
            <div className="size-64">
                <Image
                    src={abousSecImg}
                    alt="Jane Doe, Dietetyczka"
                    className="mx-auto aspect-square h-full w-full rounded-full border-4 border-green-500 object-cover shadow-lg"
                    width={250}
                    height={250}
                />
            </div>
            <P className="text-center text-xl italic">{aboutContent.quote}</P>
        </section>
    )
}

export default AboutBanner
