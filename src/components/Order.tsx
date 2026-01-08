import { useFrom } from "@/hooks/useForm";
import type { RootState } from "@/store/store";
import { useSelector } from "react-redux";

export default function Order() {
  const state = useSelector((state: RootState) => state.cart);
  const { form } = useFrom();

  const totalAmount = state.cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow p-6">

        {/* ✅ Success Header */}
        <div className="text-center border-b pb-6">
          <h1 className="text-2xl font-bold text-green-600">
            🎉 Order Placed Successfully!
          </h1>
          <p className="text-gray-500 mt-2">
            Thank you {form.name}, your order has been confirmed.
          </p>
        </div>

        {/* 👤 Customer Details */}
        <div className="mt-6">
          <h2 className="text-lg font-semibold mb-2">Delivery Details</h2>
          <div className="text-sm text-gray-700 space-y-1">
            <p><b>Name:</b> {form.name}</p>
            <p><b>Phone:</b> {form.phone}</p>
            <p><b>Email:</b> {form.email}</p>
            <p><b>Address:</b> {form.address}, {form.city}, {form.state} - {form.pincode}</p>
            <p><b>Payment Method:</b> {form.paymentMethod}</p>
          </div>
        </div>

        {/* 🛒 Ordered Products */}
        <div className="mt-8">
          <h2 className="text-lg font-semibold mb-4">Ordered Products</h2>

          <div className="space-y-4">
            {state.cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 border rounded-lg p-3"
              >
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-20 h-20 object-cover rounded"
                />

                <div className="flex-1">
                  <h3 className="font-medium">{item.title}</h3>
                  <p className="text-sm text-gray-500">
                    Quantity: {item.quantity}
                  </p>
                </div>

                <div className="font-semibold">
                  ₹{item.price * item.quantity}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 💰 Total */}
        <div className="mt-8 border-t pt-4 flex justify-between items-center">
          <span className="text-lg font-semibold">Total Amount</span>
          <span className="text-xl font-bold text-green-600">
            ₹{totalAmount}
          </span>
        </div>

        {/* 🔘 Actions */}
        <div className="mt-6 flex justify-center gap-4">
          <button className="px-6 py-2 rounded bg-black text-white hover:bg-gray-800">
            Continue Shopping
          </button>
          <button className="px-6 py-2 rounded border">
            Download Invoice
          </button>
        </div>

      </div>
    </div>
  );
}
