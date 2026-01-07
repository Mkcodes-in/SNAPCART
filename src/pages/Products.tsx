import ProductCard from "@/components/ProductCard";
import ProductLoader from "@/components/ProductLoader";
import ProductNotFound from "./ProductNotFound";
import { PackageX } from "lucide-react";
import { useSearch } from "@/components/hooks/useSearch";

export default function Products() {
  const { searchProduct, loading } = useSearch();

  if (!searchProduct || searchProduct.length === 0) {
    return <ProductNotFound
      icon={<PackageX size={40} />}
      heading="No products found"
      paragraph="Please search product what you want?"
    />
  }
  if (loading) return <ProductLoader />

  return (
    <div className="w-full max-w-7xl mx-auto p-4">
      <div className="z-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-2">
        {searchProduct.map((prod) => (
          <ProductCard
            key={prod.id}
            product={prod}
          />
        ))}
      </div>
    </div>
  )
}
