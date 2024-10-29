import { FC } from 'react'
import ImageCarousel from './ImageCarousel'
import { H2 } from '@/components/custom/typography'

type CertificateProps = {
    images: (string | undefined)[] | null
}

const CertificationSection: FC<CertificateProps> = ({ images }) => {
    return (
        <section className="container">
            <H2 className="mb-4 text-3xl font-semibold">
                Certyfikaty i Wykształcenie
            </H2>
            <ImageCarousel srcs={images} />
        </section>
    )
}

export default CertificationSection
