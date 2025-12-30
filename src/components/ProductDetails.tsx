import { getProductById } from "@/features/fetchProducts";
import type { productDetails } from "@/types/product";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export default function ProductDetails() {
    const [product, setProduct] = useState<productDetails | null>(null);
    const { id } = useParams();

    useEffect(() => {
        (async () => {
            const data = await getProductById(id);
            setProduct(data);
        })();
    }, [id]);   
    
    return (
        <div>ProductDetails</div>
    )
}
