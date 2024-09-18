import * as React from 'react'

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel'

export function ImageCarousel() {
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
