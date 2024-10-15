import { H1, P } from '@/components/custom/typography'
import { FC } from 'react'

const DietsBanner: FC = () => {
    return (
        <div className="container mx-auto px-4">
            <H1 className="text-3xl font-bold">Pakiety Dietetyczne</H1>
            <P className="mt-2">
                Wybierz idealny plan dietetyczny dopasowany do Twoich potrzeb
            </P>
        </div>
    )
}

export default DietsBanner
