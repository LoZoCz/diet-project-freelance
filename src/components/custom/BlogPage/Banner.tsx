import { FC } from 'react'
import { H1 } from '../typography'

const Banner: FC = () => {
    return (
        <section className="container flex items-center justify-between gap-6">
            <H1 className="text-4xl font-bold">Blog</H1>
        </section>
    )
}

export default Banner
