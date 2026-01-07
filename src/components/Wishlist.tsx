import type { RootState } from "@/store/store"
import { useDispatch, useSelector } from "react-redux"
import ProductCard from "./ProductCard"
import ProductNotFound from "@/pages/ProductNotFound"
import { HeartOff } from "lucide-react"
import { clearWishlist } from "@/features/wishlistSlice"
import { Button } from "./ui/button"

export default function Wishlist() {
  const state = useSelector((state: RootState) => state.wishlist)
  const dispatch = useDispatch();

  if (state.wishlist.length === 0) return <ProductNotFound
    icon={<HeartOff size={40} />}
    heading="No products in wishlist"
    paragraph="Head to Home and start adding products you love to your wishlist."
  />

  return (
    <div className="w-full max-w-7xl mx-auto py-6 px-4">

      {/* Header */}
      <div className="flex items-center justify-between mb-6 px-2">
        <h1 className="text-xl font-semibold">
          My Wishlist ({state.wishlist.length})
        </h1>

        {state.wishlist.length > 0 && (
          <Button
            onClick={() => dispatch(clearWishlist())}
            className="cursor-pointer"
          >
            Clear Wishlist
          </Button>
        )}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {state.wishlist.map((prod) => (
          <ProductCard key={prod.id} product={prod} />
        ))}
      </div>
    </div>
  );
}
