import type { imageProps } from "@/types/sliderType"
import { Card, CardContent } from "./ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel"

export default function ImageSlider({ url }: imageProps) {
    if (!url) return <p>no image found ): </p>

    return (
        <Carousel className="w-full max-w-xl mx-auto">
            <CarouselContent>
                {url.map((img, index) => (
                    <CarouselItem key={index}>
                        <Card>
                            <CardContent className="flex items-center justify-center p-0">
                                <img
                                    src={img}
                                    alt={`slide-${index}`}
                                    className="w-full h-full object-cover rounded-lg"
                                />
                            </CardContent>
                        </Card>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="left-4"/>
            <CarouselNext className="right-4"/>
        </Carousel>
    )
}
