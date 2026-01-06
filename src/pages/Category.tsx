import { ProductCardSkeleton } from "@/components/Loader";
import ProductCard from "@/components/ProductCard";
import ProductToolbar from "@/components/ProductToolbar";
import { getProductByCategory } from "@/features/fetchProducts";
import { fetchProductCategory } from "@/features/productSlice";
import { type AppDispatch, type RootState } from "@/store/store";
import type { Product } from "@/types/product";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import ProductNotFound from "./ProductNotFound";
import { PackageX } from "lucide-react";

export default function Category() {
  const { productCategory, loading } = useSelector((state: RootState) => state.products);
  const dispatch = useDispatch<AppDispatch>();
  const [selectedCategory, setSelectedCategory] = useState<string>('beauty');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [range, setRange] = useState<number>(0);

  // console.log(filteredProducts, range)
  // const maxPrice = ;
  useEffect(() => {
    dispatch(fetchProductCategory());
  }, []);

  useEffect(() => {
    (async () => {
      const res = await getProductByCategory(selectedCategory);
      setFilteredProducts(res);
    })()
  }, [selectedCategory, range])

  const maxPrice = Math.max(...filteredProducts.map(p => p.price));
  const minPrice = Math.min(...filteredProducts.map(p => p.price));
  const finalProducts = filteredProducts.filter((product) => product.price <= range);

  console.log(finalProducts)
  if (loading) return (<div className="max-w-7xl mx-auto">
    <ProductCardSkeleton />
  </div>)

  return (
    <div className="w-full max-w-7xl mx-auto py-4 px-4">
      <div className="grid grid-cols-12 gap-6">

        {/* Sidebar */}
        <div className="md:sticky top-4 h-fit col-span-12 md:col-span-4 lg:col-span-3">
          <ProductToolbar
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            categories={productCategory}
            maxPrice={maxPrice}
            minPrice={minPrice}
            range={range}
            setRange={setRange}
          />
        </div>

        {/* Products */}
        <div className="col-span-12 md:col-span-8 lg:col-span-9">

          {/* ProductList */}
          {finalProducts.length === 0 ?
            (<ProductNotFound
              icon={<PackageX size={40} />}
              heading="No products found"
              paragraph="Try adjusting your filters or search something else"
            />)
            :
            (<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {finalProducts.map((prod: Product) => (
                <ProductCard
                  key={prod.id}
                  product={prod}
                />
              ))}
            </div>)}
        </div>
      </div>
    </div>
  )
}
