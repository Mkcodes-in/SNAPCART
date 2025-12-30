import type { productProps } from "@/types/product";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import { Star } from "lucide-react";


export default function ProductCard({ product }: productProps) {
    const isOnSale = product.discountPercentage && product.discountPercentage > 0

    return (
        <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-border/40 hover:border-primary/30">
            <CardHeader className="p-0 relative">
                {/* Product Image */}
                <div className="relative overflow-hidden aspect-square">
                    <img
                        src={product.thumbnail}
                        alt={product.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                </div>
            </CardHeader>

            <CardContent className="p-5">
                {/* Product Title */}
                <h3 className="font-semibold text-lg mb-2 line-clamp-1 group-hover:text-primary transition-colors">
                    {product.title}
                </h3>

                {/* Product Description */}
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {product.description}
                </p>

                {/* Rating */}
                <div className="flex items-center justify-between gap-1 mb-4">
                    <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                            <Star
                                key={i}
                                className={`w-4 h-4 ${i < Math.floor(product.rating)
                                    ? 'fill-yellow-400 text-yellow-400'
                                    : 'fill-muted text-muted'
                                    }`}
                            />
                        ))}
                    </div>                                                  
                    <span className="text-sm font-medium ml-1">{product.rating.toFixed(1)}</span>
                </div>

                {/* Price Section */}
                <div className="flex items-center justify-between">
                    <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold">${product.price}</span>
                        {isOnSale && (
                            <span className="text-sm text-muted-foreground line-through">
                                ${(product.price / (1 - product.discountPercentage! / 100)).toFixed(2)}
                            </span>
                        )}
                    </div>
                </div>
            </CardContent>

            <CardFooter className="p-5 pt-0">
                <Button
                    className="w-full group/btn cursor-pointer"
                    size="lg"
                    disabled={product.stock === 0}
                >
                    <span className="group-hover/btn:translate-x-1 transition-transform">
                        View Details
                    </span>
                </Button>
            </CardFooter>
        </Card>
    )
}
