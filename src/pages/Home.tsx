import { fetchProduct } from "@/features/productSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import type { RootState, AppDispatch } from "@/store/store";
import ProductLoader from "@/components/ProductLoader";
import ProductCard from "@/components/ProductCard";
import { slides } from "@/data/Slides";
import Slider from "@/components/Slider";
import ProductNotFound from "./ProductNotFound";
import { PackageX } from "lucide-react";

export default function Home() {
  const { product, loading } = useSelector((state: RootState) => state.products);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchProduct());
  }, [])

  if (loading) { return <ProductLoader /> }
  if (!product || product.length === 0) {
    return <ProductNotFound
      icon={<PackageX />}
      heading="No products found"
      paragraph="Failed to fetch product from server :("
    />
  }

  return (
    <div className="min-h-screen max-w-7xl mx-auto px-6 py-2">

      <Slider
        slides={slides}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-12">
        {product.map((prod) => (
          <ProductCard
            key={prod.id}
            product={prod}
          />
        ))}
      </div>
    </div>
  );
}
