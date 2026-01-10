import ProductNotFound from "@/pages/ProductNotFound";
import type { RootState } from "@/store/store";
import { ClipboardX, Package } from "lucide-react";
import { useSelector } from "react-redux";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";

export default function Order() {
  const orders = useSelector((state: RootState) => state.orders.order);

  if (orders.length === 0 || !orders) {
    return (
      <div className="h-screen">
        <ProductNotFound
          icon={<ClipboardX />}
          heading="No order records found"
          paragraph="Looks like you haven’t placed any orders. Add items to your cart and check out to get started."
        />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8">
      <div className="max-w-5xl mx-auto">

        {/* Page Title */}
        <div className="flex items-center gap-2 mb-8">
          <Package className="text-gray-700" />
          <h1 className="text-2xl font-semibold text-gray-800">
            My Orders
          </h1>
        </div>

        {/* Orders */}
        <Card className="space-y-2 p-2">
          {orders.map((order) => {
            const orderTotal = order.product.reduce((total, prod) => {
              return total + prod.price * prod.quantity;
            }, 0);

            return (
              <div key={order.id} className="border rounded-lg py-4">
                {/* Header */}
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle className="text-lg">Order placed</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      {new Date(order.date).toLocaleDateString()}
                    </p>
                  </div>
                  <span className="font-semibold px-4 py-1 rounded-md bg-gray-600/20">
                    {order.paymentMethod}
                  </span>
                </CardHeader>

                {/* Products */}
                {order.product.map((prod) => (
                  <CardContent
                    key={prod.id}
                    className="flex justify-between items-center"
                  >
                    <div>
                      <p className="font-medium">{prod.title}</p>
                      <p className="text-sm text-muted-foreground">
                        Qty: {prod.quantity}
                      </p>            
                    </div>
                    <p className="font-semibold">
                      ${prod.price * prod.quantity}
                    </p>
                  </CardContent>
                ))}

                {/* Footer */}
                <CardFooter className="flex flex-col items-start gap-2 text-sm">
                  <div className="font-semibold text-foreground text-lg flex justify-between w-full py-2">
                    Order Total: <span>${(orderTotal * 0.18 + orderTotal).toFixed(2)}</span>
                  </div>

                  <div className="text-muted-foreground">
                    <p className="font-medium text-foreground">
                      Delivery Address
                    </p>
                    <p>
                      {order.address}, {order.city}, {order.state} - {order.pincode}
                    </p>
                  </div>
                </CardFooter>
              </div>
            );
          })}
        </Card>
      </div>
    </div>
  );
}
