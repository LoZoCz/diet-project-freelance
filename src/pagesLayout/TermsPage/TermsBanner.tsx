import { H1, P } from '@/components/custom/typography'
import { FC } from 'react'

const TermsBanner: FC = () => {
    return (
        <div className="container mx-auto px-4">
            <H1 className="text-3xl font-bold">
                Terms of Service & Privacy Policy
            </H1>
            <P className="mt-2">
                Important information about your rights and our obligations
            </P>
        </div>
    )
}

export default TermsBanner
