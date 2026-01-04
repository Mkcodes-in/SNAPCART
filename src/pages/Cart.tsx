import { addToCart, DecreaseQuantity, removeFromCart } from "@/features/cartSlice";
import type { RootState } from "@/store/store";
import { ArrowLeft } from "lucide-react";
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export default function Cart() {
    const state = useSelector((state: RootState) => state.cart);
    const navigate = useNavigate();
    console.log(state)
    const dispatch = useDispatch();
    if (state.cart.length === 0) return <p>No products</p>
    return (
        <div className="min-h-screen w-full max-w-7xl mx-auto">
            <button 
            onClick={() => navigate(-1)}
            className="flex items-center gap-3 cursor-pointer mx-6"
            ><ArrowLeft size={18} /> Back</button>
            <div className="max-w-4xl mx-auto p-4 space-y-4">
                {state.cart.map((product) => (
                    <div
                        key={product.id}
                        className="flex items-center justify-between gap-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm hover:shadow-md transition"
                    >
                        {/* Left: Image */}
                        <img
                            src={product.thumbnail}
                            alt={product.title}
                            className="h-20 w-20 rounded-lg object-contain bg-gray-50"
                        />

                        {/* Middle: Info */}
                        <div className="flex-1">
                            <h3 className="text-lg font-semibold text-gray-800">
                                {product.title}
                            </h3>
                            <p className="text-sm text-gray-500 line-clamp-1">
                                {product.description}
                            </p>
                            <p className="mt-1 text-base font-bold text-green-600">
                                ₹ {product.price}
                            </p>
                        </div>

                        {/* Right: Quantity + Remove */}
                        <div className="flex flex-col items-end gap-2">
                            <div className="flex items-center gap-2">
                                <button 
                                onClick={() => dispatch(DecreaseQuantity(product.id))}
                                className="h-8 w-8 rounded-md border text-lg hover:bg-gray-100">
                                    −
                                </button>
                                <span className="min-w-[24px] text-center font-medium">
                                    {product.quantity}
                                </span>
                                <button 
                                onClick={() => dispatch(addToCart(product))}
                                className="h-8 w-8 rounded-md border text-lg hover:bg-gray-100">
                                    +
                                </button>
                            </div>

                            <button 
                            onClick={() => {
                                toast.success('Product Successfully Removed');
                                dispatch(removeFromCart(product.id))
                            }}
                            className="text-sm text-red-500 hover:text-red-600">
                                Remove
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
