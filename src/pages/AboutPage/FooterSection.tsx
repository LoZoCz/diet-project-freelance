import { FC } from 'react'
import { P } from '@/components/custom/Typography'
import { aboutContent } from '@/lib/defaultValues'

const FooterSection: FC = () => {
    return (
        <section className="container space-y-2 text-center">
            {aboutContent.footer.map((item, index) => (
                <P key={index}>{item}</P>
            ))}
        </section>
    )
}

export default FooterSection
