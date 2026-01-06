import ProductCard from "@/components/ProductCard";
import ProductLoader from "@/components/ProductLoader";
import type { RootState } from "@/store/store";
import { useSelector } from "react-redux"
import ProductNotFound from "./ProductNotFound";
import { PackageX } from "lucide-react";

export default function Products() {
  const { product, loading } = useSelector((state: RootState) => state.products);

  if (!product || product.length === 0) {
    return <ProductNotFound
      icon={<PackageX size={40} />}
      heading="No products found"
      paragraph="Try to go home page to load products"
    />
  }
  if (loading) return <ProductLoader />

  return (
    <div className="w-full max-w-7xl mx-auto p-4">
      <div className="z-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-2">
        {product.map((prod) => (
          <ProductCard
            key={prod.id}
            product={prod}
          />
        ))}
      </div>
    </div>
  )
}
