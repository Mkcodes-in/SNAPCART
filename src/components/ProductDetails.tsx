import { getProductById } from "@/features/fetchProducts";
import type { productDetails } from "@/types/product";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import ImageSlider from "./ImageSlider";
import { ArrowLeft, ChevronRight, Heart, Package, Shield, Star, Tag, Truck } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

export default function ProductDetails() {
  const [product, setProduct] = useState<productDetails | null>(null);
  const { id } = useParams();
  const navigate = useNavigate();

  console.log(product)
  useEffect(() => {
    (async () => {
      const data = await getProductById(id);
      setProduct(data);
    })();
  }, [id]);

  if (!product || product === null) return <p>Product Not Found ): </p>

  return (
    <div className="w-full max-w-7xl mx-auto min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="space-y-6">

        {/* head Link */}
        <div className="flex items-center text-sm text-muted-foreground mb-8 px-2">
          <span className="cursor-text">Home</span>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span className="cursor-text">{product.category}</span>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span className="font-medium text-foreground">{product.brand}</span>
        </div>

        <button
        className="flex items-center gap-3 p-2 cursor-pointer"
        onClick={() => navigate(-1)}
        ><ArrowLeft size={19}/> Back</button>

        {/* Details Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Slider */}
          <div className="space-y-4">
            <ImageSlider
              url={product.images}
            />
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <span>{product.category}
                {" by "}
                {product.brand}
              </span>
              <button><Heart /></button>
            </div>

            {/* title */}
            <h1 className="text-3xl lg:text-4xl font-bold tracking-tight">
              {product.title}
            </h1>

            {/* Rating */}
            <div className="flex flex-col justify-between gap-3">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${i < Math.floor(product.rating)
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'fill-muted text-muted'
                          }`}
                      />
                    ))}
                  </div>
                  <span className="font-medium">{product.rating.toFixed(1)}</span>
                  <span className="text-sm text-muted-foreground">
                    ({Math.floor(product.rating * 100)} reviews)
                  </span>
                </div>
              </div>

              {/* SKU */}
              <span>
                SKU: {product.sku}
              </span>
            </div>

            {/* Price Section */}
            <div className="space-y-2">
              <div className="flex items-baseline gap-3">
                <span className="text-4xl font-bold">$ {product.price.toFixed(2)}</span>
              </div>
              {product.stock !== undefined && (
                <div className="flex items-center gap-2">
                  <span className={`text-sm ${product.stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {product.stock > 0 ? `${product.stock} units available` : 'Out of stock'}
                  </span>
                </div>
              )}
            </div>

            {/* Description */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold">Description</h3>
              <p className="text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Product Info */}
            <div className="space-y-4 pt-4">
              <Card>
                <CardContent>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                    <div className="flex flex-col items-center">
                      <Truck className="w-6 h-6 text-primary mb-2" />
                      <span className="text-sm font-medium">Free Shipping</span>
                      <span className="text-xs text-muted-foreground">Over $50</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <Shield className="w-6 h-6 text-primary mb-2" />
                      <span className="text-sm font-medium">{product.warrantyInformation || "1 Year Warranty"}</span>
                      <span className="text-xs text-muted-foreground">Guarantee</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <Package className="w-6 h-6 text-primary mb-2" />
                      <span className="text-sm font-medium">Easy Returns</span>
                      <span className="text-xs text-muted-foreground">30 Days</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <Tag className="w-6 h-6 text-primary mb-2" />
                      <span className="text-sm font-medium">Best Price</span>
                      <span className="text-xs text-muted-foreground">Guaranteed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Button size="lg" className="w-full" disabled={!product.stock || product.stock === 0}>
                  Add to Cart
                </Button>
                <Button size="lg" variant="outline" className="w-full">
                  Buy Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
