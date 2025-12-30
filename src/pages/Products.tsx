import ProductLoader from "@/components/ProductLoader";
import type { RootState } from "@/store/store";
import { useSelector } from "react-redux"

export default function Products() {
  const { product, loading } = useSelector((state: RootState) => state.products);

  if (!product || product.length === 0) {
    return <p>Product not found ):</p>
  }
  if (loading) return <ProductLoader />
  
  return (
    <div className="w-full max-w-7xl mx-auto p-4">
      <div className="z-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-2">
        {product.map((prod) => (
          <div 
          key={prod.id} 
          className="relative bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
            <img src={prod.thumbnail} alt={prod.title} />
          </div>
        ))}
      </div>
    </div>
  )
}
