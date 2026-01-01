import ProductCard from "@/components/ProductCard";
import ProductToolbar from "@/components/ProductToolbar";
import { getProductByCategory } from "@/features/fetchProducts";
import { fetchProductCategory } from "@/features/productSlice";
import { type AppDispatch, type RootState } from "@/store/store";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"

export default function Category() {
  const { productCategory, loading } = useSelector((state: RootState) => state.products);
  const dispatch = useDispatch<AppDispatch>();
  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    dispatch(fetchProductCategory());
  }, []);

  useEffect(() => {
    (async () => {
      const res = await getProductByCategory(selectedCategory);
      setProducts(res);
    })()
  }, [selectedCategory])

  console.log(selectedCategory)
  return (
    <div className="w-full max-w-7xl mx-auto py-4 grid grid-cols-12 gap-6">

      {/* Sidebar */}
      <div className="col-span-3 sticky top-4 h-fit">
        <ProductToolbar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          categories={productCategory}
        />
      </div>

      {/* Products */}
      <div className="col-span-9">
        {/* ProductList here */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-12">
          {products.map((prod) => (
            <ProductCard
              product={prod}
              key={prod}
            />
          ))}
        </div>
      </div>

    </div>

  )
}
