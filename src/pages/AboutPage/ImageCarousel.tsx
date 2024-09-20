import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel'
import { FC } from 'react'

const ImageCarousel: FC = () => {
    return (
        <Carousel className="w-full px-0 tablet:px-7">
            <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index}>
                        <div className="">
                            <div className="aspect-video w-full bg-primary">
                                elozelo
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
