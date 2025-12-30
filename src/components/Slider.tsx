import type { SlidesProps } from "@/types/sliderType";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { ArrowRight, ShoppingBag } from "lucide-react";

export default function Slider({ slides }: SlidesProps) {

  return (
    <Carousel
      className="w-full max-w-7xl mx-auto"
      opts={{ loop: true }}
    >
      <CarouselContent>
        {slides.map((item) => (
          <CarouselItem key={item.id}>
            <div className="relative h-[220px] sm:h-[360px] md:h-[480px] w-full overflow-hidden rounded-xl">
              <div className="absolute inset-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-r ${item.color}`}></div>
              </div>

              {/* Content */}
              <div className="relative h-full flex items-center justify-center">
                <div className="max-w-7xl mx-auto px-8 md:px-16 w-full">
                  <div className="max-w-xl">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                      <ShoppingBag className="w-4 h-4 text-white" />
                      <span className="text-white text-sm font-medium">
                        {item.subtitle}
                      </span>
                    </div>

                    {/* Title */}
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
                      {item.title}
                    </h1>

                    {/* Description */}
                    <p className="text-lg md:text-xl text-white/90 mb-8 max-w-md">
                      {item.description}
                    </p>

                    {/* CTA Button */}
                    <button className="group inline-flex items-center gap-3 bg-white text-gray-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer">
                      {item.buttonText}
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                    </button>

                    {/* Stats */}
                    <div className="flex gap-8 mt-12">
                      <div className="text-white">
                        <div className="text-2xl font-bold">500+</div>
                        <div className="text-sm opacity-90">Brands</div>
                      </div>
                      <div className="text-white">
                        <div className="text-2xl font-bold">10K+</div>
                        <div className="text-sm opacity-90">Products</div>
                      </div>
                      <div className="text-white">
                        <div className="text-2xl font-bold">24/7</div>
                        <div className="text-sm opacity-90">Support</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-4 cursor-pointer" />
      <CarouselNext className="right-4 cursor-pointer" />
    </Carousel>
  )
}
