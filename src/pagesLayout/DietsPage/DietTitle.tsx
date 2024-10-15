import { H4 } from '@/components/custom/typography'
import { FC } from 'react'

type DietTitleProps = {
    title: string
}

const DietTitle: FC<DietTitleProps> = ({ title }) => {
    return <H4 className="text-xl font-bold text-green-800">{title}</H4>
}

export default DietTitle
