import { P } from '@/components/custom/typography'
import Image from 'next/image'
import { FC } from 'react'

type DietImgDescProps = {
    title: string
    image: string
    description: string | null
}

const DietImgDesc: FC<DietImgDescProps> = ({ title, image, description }) => {
    return (
        <div className="flex-grow space-y-4">
            {image && (
                <div className="relative aspect-square">
                    <Image
                        src={image}
                        alt={title.toLowerCase().replace(/ /g, '-')}
                        fill
                        className="rounded-md object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>
            )}
            <P className="text-green-700">{description}</P>
        </div>
    )
}

export default DietImgDesc
