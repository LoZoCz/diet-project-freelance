import {
    IoPersonOutline,
    IoNewspaperOutline,
    IoHomeOutline,
    IoCalculatorOutline,
} from 'react-icons/io5'
import { PiForkKnife } from 'react-icons/pi'

export const pageLinks = [
    {
        label: 'Strona główna',
        icon: <IoHomeOutline className="mr-2 hidden size-6 sm-mobile:block" />,
        href: '/',
    },
    {
        label: 'O mnie',
        icon: (
            <IoPersonOutline className="mr-2 hidden size-6 sm-mobile:block" />
        ),
        href: '/about',
    },
    {
        label: 'Kalkulator kaloryczny',
        icon: (
            <IoCalculatorOutline className="mr-2 hidden size-6 sm-mobile:block" />
        ),
        href: '/calc',
    },
    {
        label: 'Blog',
        icon: (
            <IoNewspaperOutline className="mr-2 hidden size-6 sm-mobile:block" />
        ),
        href: '/blog',
    },
    {
        label: 'Diety',
        icon: <PiForkKnife className="mr-2 hidden size-6 sm-mobile:block" />,
        href: '/diets',
    },
]
