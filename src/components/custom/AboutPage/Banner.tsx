import { FC } from 'react'
import { H1 } from '../typography'

const Banner: FC = () => {
    return (
        <section className="bg-primary py-12">
            <div className="mx-auto max-w-main">
                <H1 className="text-primary-foreground">O mnie</H1>
            </div>
        </section>
    )
}

export default Banner
