import type { RootState } from "@/store/store"
import { useSelector } from "react-redux"
import ProductCard from "./ProductCard"
import ProductNotFound from "@/pages/ProductNotFound"
import { HeartOff } from "lucide-react"

export default function Wishlist() {
  const state = useSelector((state: RootState) => state.wishlist)

  if (state.wishlist.length === 0) return <ProductNotFound
    icon={<HeartOff size={40} />}
    heading="No products in wishlist"
    paragraph="Head to Home and start adding products you love to your wishlist."
  />

  return (
    <div className="w-full max-w-7xl mx-auto py-4">
      <div className="z-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-2">
        {state.wishlist.map((prod) => (
          <ProductCard
            key={prod.id}
            product={prod}
          />
        ))}
      </div>
    </div>
  )
}
