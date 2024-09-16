import { FC } from 'react'
import Image from 'next/image'
import iconImg from '@/../public/icon/iconImage.png'
import { cn } from '@/lib/utils'

interface LogoProps {
    withName?: boolean
    logoSize?: number
    className?: string
}

const Logo: FC<LogoProps> = ({ withName, className, logoSize = 80 }) => {
    return (
        <div className="flex items-center gap-4">
            <Image
                src={iconImg}
                alt="main site logo image"
                height={logoSize}
                width={logoSize}
                priority
                className={className}
            />
            <span
                className={cn(
                    'text-2xl font-semibold',
                    withName ? '' : 'hidden'
                )}
            >
                DietaBezCudów
            </span>
        </div>
    )
}

export default Logo
