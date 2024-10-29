import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel'
import Image from 'next/image'
import { FC } from 'react'

type CarouselProps = {
    srcs: (string | undefined)[] | null
}

const ImageCarousel: FC<CarouselProps> = ({ srcs }) => {
    return (
        <Carousel className="px-0 tablet:px-7">
            <CarouselContent>
                {srcs &&
                    srcs.map((src, index) => (
                        <CarouselItem className="basis-1/2" key={index}>
                            <div className="">
                                <div className="aspect-video w-full bg-primary">
                                    <Image
                                        src={src || ''}
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
