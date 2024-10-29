import { FC } from 'react'
import { P } from '@/components/custom/typography'

type FooterProps = {
    data: { text: string | null }
}

const FooterSection: FC<FooterProps> = ({ data }) => {
    return (
        <section className="container space-y-2 text-center">
            <P className="mx-auto max-w-screen-md">{data.text}</P>
        </section>
    )
}

export default FooterSection
