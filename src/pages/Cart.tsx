import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { addToCart, DecreaseQuantity } from "@/features/cartSlice";
import type { RootState } from "@/store/store";
import { ArrowLeft, Minus, Plus, SeparatorHorizontal, ShoppingBag } from "lucide-react";
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const state = useSelector((state: RootState) => state.cart);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const price = state.cart.map(product => product.price * product.quantity);
  const totalPrice = price.reduce((acc, curr) => acc + curr, 0)


  if (state.cart.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="w-full max-w-md text-center p-8 space-y-2">
          <span className="flex items-center justify-center"><ShoppingBag size={42} className="text-gray-500" /></span>
          <h1 className="font-semibold text-2xl">Cart is empty</h1>
          <Button
            className="cursor-pointer"
            onClick={() => navigate('/')}
          >Continue Shopping</Button>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-muted/30 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
            className="gap-2"
          >
            <ArrowLeft size={18} />
            Back
          </Button>
        </div>
        <h1 className="text-3xl font-bold mb-5 px-2">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {state.cart.map((product) => (
              <Card
                key={product.id}
                className="flex flex-col sm:flex-row gap-4 p-4 items-center"
              >
                {/* product image */}
                <div className="h-28 w-28 rounded-lg border">
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* product title & description */}
                <div className="flex-1 flex-col space-y-2">
                  <h1 className="font-medium text-gray-900 line-clamp-1">{product.title}</h1>
                  <p className="text-sm text-gray-500 line-clamp-2">{product.description}</p>
                  <p className="text-sm font-bold text-green-600">$ {(product.price * product.quantity).toFixed(2)}</p>
                </div>

                {/* Action Button */}
                <div className="flex items-center justify-center gap-4 border-2 rounded-lg p-1">
                  <Button
                    onClick={() => dispatch(DecreaseQuantity(product.id))}
                    size={'icon'}
                    variant={'ghost'}
                    className="cursor-pointer">
                    <Minus />
                  </Button>
                  <span>{product.quantity}</span>
                  <Button
                    onClick={() => dispatch(addToCart(product))}
                    size="icon"
                    variant={'ghost'}
                    className="cursor-pointer">
                    <Plus />
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-medium">${totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className="font-medium">Free</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tax (18% GST)</span>
                    <span className="font-medium">${(totalPrice * 0.18).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span>${(totalPrice * 1.18).toFixed(2)}</span>
                  </div>
                </div>

                <Button
                  className="w-full cursor-pointer"
                  size="lg"
                >
                  Place Order
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
