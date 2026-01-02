import { ProductCardSke } from "./Loader/ProductSek";

export function ProductCardSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6">
      {[...Array(6)].map((_, index) => (
        <ProductCardSke key={index} />
      ))}
    </div>
  )
}