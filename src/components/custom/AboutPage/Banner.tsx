import { FC } from 'react'
import { H1, P } from '../typography'
import Image from 'next/image'
import abousSecImg from '@/../public/about-sect-img.jpg'

const Banner: FC = () => {
    return (
        <section className="container flex flex-col items-center gap-5">
            <H1 className="text-center text-4xl font-bold">
                Cześć, nazywam się Jane!
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
            <P className="text-center text-xl italic">
                &quot;Niech pożywienie będzie twoim lekarstwem, a lekarstwo
                pożywieniem.&quot; - Hipokrates
            </P>
        </section>
    )
}

export default Banner
