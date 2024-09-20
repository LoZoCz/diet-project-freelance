import { FC } from 'react'
import ImageCarousel from './ImageCarousel'
import { H2 } from '@/components/custom/typography'

const CertificationSection: FC = () => {
    return (
        <section className="container">
            <H2 className="mb-4 text-3xl font-semibold">
                Certyfikaty i Wykształcenie
            </H2>
            <ImageCarousel />
        </section>
    )
}

export default CertificationSection
