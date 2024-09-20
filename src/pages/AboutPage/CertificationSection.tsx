import { FC } from 'react'
import { ImageCarousel } from './ImageCarousel'

const CertificationSection: FC = () => {
    return (
        <section className="container">
            <h2 className="mb-4 text-3xl font-semibold">
                Certyfikaty i Wykształcenie
            </h2>
            <ImageCarousel />
        </section>
    )
}

export default CertificationSection
