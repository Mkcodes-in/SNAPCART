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
        <div className="space-y-6">
          {orders.map((order, index) => (
            <Card
              key={index}
              className="rounded-2xl shadow-sm"
            >
              {/* Header */}
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="text-lg">
                    Order placed
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {new Date(order.date).toLocaleDateString()}
                  </p>
                </div>
                <span className="font-semibold px-4 py-1 rounded bg-green-600/30">{order.paymentMethod}</span>
              </CardHeader>

              {/* Products */}
              <CardContent className="space-y-4">
                {order.product.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-center"
                  >
                    <div>
                      <p className="font-medium">
                        {item.title}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Qty: {item.quantity}
                      </p>
                    </div>

                    <p className="font-semibold">
                      ${item.price}
                    </p>
                  </div>
                ))}
                <div className="flex items-center justify-between">
                  <span className="font-semibold">Total Amount</span>
                  <span>34</span>
                </div>
              </CardContent>
              {/* Footer */}
              <CardFooter className="flex flex-col items-start gap-1 text-sm text-muted-foreground">
                <p className="font-medium text-foreground">
                  Delivery Address
                </p>
                <p>
                  {order.address}, {order.city}, {order.state} -{" "}
                  {order.pincode}
                </p>
              </CardFooter>
            </Card>
          ))}
        </div>

      </div>
    </div>
  );
}
