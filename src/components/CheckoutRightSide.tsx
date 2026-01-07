import type { RootState } from "@/store/store"
import { Lock } from "lucide-react";
import { useSelector } from "react-redux"

export default function CheckoutRightSide() {
    const state = useSelector((state: RootState) => state.cart);
    const price = state.cart.map(product => product.price * product.quantity);
    const totalPrice = price.reduce((acc, curr) => acc + curr, 0)

    return (
        <div className="bg-white rounded-xl shadow-sm border p-6 sticky top-6">
            <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">Order Summary</h2>
                <p className="text-gray-600 text-sm">Review your items</p>
            </div>

            {/* Cart Items */}
            <div className="space-y-4 mb-6">
                {state.cart.map((product) => (
                    <div key={product.id} className="flex items-start justify-between">
                        <div>
                            <p className="font-medium">{product.title}</p>
                            <p className="text-sm text-gray-500">Quantity: {product.quantity}</p>
                        </div>
                        <span className="font-semibold">${product.price * product.quantity}</span>
                    </div>
                ))}
            </div>

            {/* Divider */}
            <div className="border-t border-b py-4 space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Subtotal</span>
                    <span>${totalPrice}</span>
                </div>
                <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Shipping</span>
                    <span className="text-green-600">Free</span>
                </div>
                <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Tax</span>
                    <span>${(totalPrice * 0.18).toFixed(2)}</span>
                </div>
            </div>

            {/* Total */}
            <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                    <span className="text-lg font-bold">Total Amount</span>
                    <div className="text-right">
                        <span className="text-2xl font-bold">${(totalPrice * 0.18 + totalPrice).toFixed(2)}</span>
                        <p className="text-sm text-gray-500">Inclusive of all taxes</p>
                    </div>
                </div>
            </div>

            {/* Security Badge */}
            <div className="bg-gray-50 rounded-lg p-4 border">
                <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                        <Lock size={22} />
                    </div>
                    <div>
                        <p className="font-medium text-sm">Secure Checkout</p>
                        <p className="text-xs text-gray-500">Your information is protected</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
