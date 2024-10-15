import { ExternalLink } from '@/components/custom/typography'
import { Button } from '@/components/ui/button'
import { ShoppingCart } from 'lucide-react'
import { FC } from 'react'

type DietPriceBtnProps = {
    link: string
    price: string
}

const DietPriceBtn: FC<DietPriceBtnProps> = ({ link, price }) => {
    return (
        <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-green-800">{price}</span>
            <BuyBtn link={link} />
        </div>
    )
}

const BuyBtn: FC<{ link: string }> = ({ link }) => {
    return (
        <Button asChild className="bg-green-600 hover:bg-green-700">
            <ExternalLink className="no-underline" href={link}>
                <ShoppingCart className="mr-2 h-4 w-4" />{' '}
                <span className="block">Kup teraz</span>
            </ExternalLink>
        </Button>
    )
}

export default DietPriceBtn
