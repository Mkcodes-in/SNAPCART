import { fetchProductCategory } from "@/features/productSlice";
import { type AppDispatch, type RootState } from "@/store/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"

export default function Category() {
  const { category, loading } = useSelector((state: RootState) => state.products);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchProductCategory());
  }, []);

  console.log(category, loading);
  return (
    <div>
      
    </div>
  )
}
