import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel'
import Image from 'next/image'
import { FC } from 'react'

const certifiactsImgs = [
    'certyfikat-1.jpg',
    'certyfikat-2.jpg',
    'certyfikat-3.jpg',
    'certyfikat-4.jpg',
    'certyfikat-5.jpg',
    'certyfikat-6.jpg',
]

const ImageCarousel: FC = () => {
    return (
        <Carousel className="w-full px-0 tablet:px-7">
            <CarouselContent>
                {certifiactsImgs.map((img, index) => (
                    <CarouselItem key={index}>
                        <div className="">
                            <div className="aspect-video w-full bg-primary">
                                <Image
                                    src={`/certyfikaty/${img}`}
                                    alt={`Certificate ${index + 1}`}
                                    width={1000}
                                    height={700}
                                    className="h-full w-full object-cover"
                                />
                            </div>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="hidden tablet:flex" />
            <CarouselNext className="hidden tablet:flex" />
        </Carousel>
    )
}

export default ImageCarousel
