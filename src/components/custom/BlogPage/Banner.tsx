import { FC } from 'react'
import { H1 } from '../typography'
import { Input } from '@/components/ui/input'

const Banner: FC = () => {
    return (
        <section className="container flex items-center justify-between gap-6">
            <H1 className="text-4xl font-bold">Blog</H1>
            <Input type="search" placeholder="Search" className="max-w-sm" />
        </section>
    )
}

export default Banner
