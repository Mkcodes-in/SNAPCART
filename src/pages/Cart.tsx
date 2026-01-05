import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { addToCart, DecreaseQuantity, removeFromCart } from "@/features/cartSlice";
import type { RootState } from "@/store/store";
import { ArrowLeft, Badge, SeparatorHorizontal, ShoppingBag, Trash2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export default function Cart() {
    const state = useSelector((state: RootState) => state.cart);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    if (state.cart.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="w-full max-w-md text-center p-8">
          <ShoppingBag className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
          <h2 className="text-2xl font-bold mb-2">Your cart is empty</h2>
          <p className="text-muted-foreground mb-6">Add some products to get started</p>
          <Button onClick={() => navigate("/")}>Continue Shopping</Button>
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
          <h1 className="text-3xl font-bold">Shopping Cart</h1>
          {/* <Badge variant="secondary">{totalItems} items</Badge> */}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {state.cart.map((product) => (
              <Card key={product.id} className="overflow-hidden">
                <div className="flex flex-col sm:flex-row p-4 gap-4">
                  {/* Product Image */}
                  <div className="relative w-full sm:w-32 h-32 flex-shrink-0">
                    <img
                      src={product.thumbnail}
                      alt={product.title}
                      className="w-full h-full object-cover rounded-lg"
                    />
                    <Badge className="absolute top-2 left-2">
                      {product.quantity}x
                    </Badge>
                  </div>

                  {/* Product Info */}
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-lg">{product.title}</h3>
                        <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
                          {product.description}
                        </p>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => {
                          toast.success("Product removed")
                          dispatch(removeFromCart(product.id))
                        }}
                      >
                        <Trash2 className="h-4 w-4 text-red-500" />
                      </Button>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                      <span className="text-xl font-bold">₹{product.price}</span>
                      <div className="flex items-center gap-3">
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => dispatch(DecreaseQuantity(product.id))}
                          disabled={product.quantity <= 1}
                        >
                          −
                        </Button>
                        <span className="font-medium w-8 text-center">
                          {product.quantity}
                        </span>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => dispatch(addToCart(product))}
                        >
                          +
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Right: Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    {/* <span className="font-medium">₹{totalPrice.toFixed(2)}</span> */}
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className="font-medium">Free</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tax</span>
                    {/* <span className="font-medium">₹{(totalPrice * 0.18).toFixed(2)}</span> */}
                  </div>
                  <SeparatorHorizontal />
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    {/* <span>₹{(totalPrice * 1.18).toFixed(2)}</span> */}
                  </div>
                </div>

                <Button
                  className="w-full"
                  size="lg"
                //   onClick={handlePlaceOrder}
                //   disabled={isLoading}
                >
                  {/* {isLoading ? "Processing..." : `Place Order (₹${(totalPrice * 1.18).toFixed(2)})`} */}
                </Button>

                <div className="text-center text-sm text-muted-foreground mt-4">
                  <p>30-day return policy • Secure checkout</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
