import { FC } from 'react'
import { H2 } from '../typography'
import { ImageCarousel } from '../Carousel'

const CarouselSection: FC = () => {
    return (
        <section className="">
            <div className="mx-auto max-w-main px-16">
                <H2 className="mb-6 text-center">Moje certyfikaty</H2>
                <ImageCarousel />
            </div>
        </section>
    )
}

export default CarouselSection
