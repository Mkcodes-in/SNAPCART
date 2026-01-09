import { Input } from "./ui/input";
import { Select, SelectContent, SelectItem } from "./ui/select";
import { SelectTrigger, SelectValue } from "@radix-ui/react-select";
import { Button } from "./ui/button";
import CheckoutRightSide from "./CheckoutRightSide";
import { useFrom } from "@/hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import { orderPlace } from "@/features/orderSlice";
import type { RootState } from "@/store/store";
import type { OrderDetailProps } from "@/types/orderType";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { clearCart } from "@/features/cartSlice";

export default function Checkout() {
    const { form, setForm } = useFrom();
    const cart = useSelector((state: RootState) => state.cart.cart);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const orderData: OrderDetailProps = {
        ...form,
        product: cart
    }

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
    }

    function handleChange(
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) {
        const { name, value } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    function handlePaymentMethodChange(value: string) {
        setForm((prev) => ({
            ...prev,
            paymentMethod: value,
        }));
    }

    return (
        <div className="min-h-screen bg-gray-50 p-4 md:p-6 lg:p-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">Checkout</h1>
                    <p className="text-gray-600 mt-2">Complete your purchase securely</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left side - Form */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-xl shadow-sm border p-6">
                            <div className="mb-6">
                                <h2 className="text-xl font-semibold text-gray-900 mb-2 flex items-center gap-2">
                                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm">
                                        1
                                    </span>
                                    Billing Details
                                </h2>
                                <p className="text-gray-600 text-sm">Please enter your contact information</p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Personal Information */}
                                <div className="space-y-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label htmlFor="name">Full Name *</label>
                                            <Input
                                                id="name"
                                                type="text"
                                                placeholder="John Doe"
                                                name="name"
                                                required
                                                value={form.name}
                                                onChange={handleChange}
                                                className="h-11"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="phone">Phone Number *</label>
                                            <Input
                                                id="phone"
                                                type="tel"
                                                name="phone"
                                                placeholder="+91 92902 32120"
                                                required
                                                value={form.phone}
                                                onChange={handleChange}
                                                className="h-11"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="email">Email Address</label>
                                        <Input
                                            id="email"
                                            type="email"
                                            name="email"
                                            placeholder="john@example.com"
                                            value={form.email}
                                            onChange={handleChange}
                                            className="h-11"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="address">Full Address *</label>
                                        <textarea
                                            id="address"
                                            name="address"
                                            placeholder="House no., Street, Area"
                                            required
                                            rows={3}
                                            value={form.address}
                                            onChange={handleChange}
                                            className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                        <div className="space-y-2">
                                            <label htmlFor="city">City *</label>
                                            <Input
                                                id="city"
                                                type="text"
                                                name="city"
                                                placeholder="Delhi"
                                                required
                                                value={form.city}
                                                onChange={handleChange}
                                                className="h-11"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="state">State *</label>
                                            <Input
                                                id="state"
                                                type="text"
                                                name="state"
                                                placeholder="Delhi"
                                                required
                                                value={form.state}
                                                onChange={handleChange}
                                                className="h-11"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="pincode">Pincode *</label>
                                            <Input
                                                id="pincode"
                                                type="text"
                                                name="pincode"
                                                placeholder="110001"
                                                required
                                                value={form.pincode}
                                                onChange={handleChange}
                                                className="h-11"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Payment Method */}
                                <div className="pt-4 border-t">
                                    <div className="mb-4">
                                        <h2 className="text-xl font-semibold text-gray-900 mb-2 flex items-center gap-2">
                                            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm">
                                                2
                                            </span>
                                            Payment Method
                                        </h2>
                                        <p className="text-gray-600 text-sm">Choose your preferred payment option</p>
                                    </div>

                                    <div className="space-y-2">
                                        <label>Select Payment Method *</label>
                                        <Select
                                            value={form.paymentMethod}
                                            onValueChange={handlePaymentMethodChange}
                                        >
                                            <SelectTrigger className="h-11">
                                                <SelectValue placeholder="Choose payment method" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="COD" className="flex items-center gap-2">
                                                    <div className="flex items-center gap-3">
                                                        <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center">
                                                            💵
                                                        </div>
                                                        <div>
                                                            <p className="font-medium">Cash on Delivery</p>
                                                            <p className="text-xs text-gray-500">Pay when you receive</p>
                                                        </div>
                                                    </div>
                                                </SelectItem>
                                                <SelectItem value="UPI" className="flex items-center gap-2">
                                                    <div className="flex items-center gap-3">
                                                        <div className="h-8 w-8 rounded-full bg-blue-50 flex items-center justify-center">
                                                            📱
                                                        </div>
                                                        <div>
                                                            <p className="font-medium">UPI</p>
                                                            <p className="text-xs text-gray-500">Google Pay, PhonePe, etc.</p>
                                                        </div>
                                                    </div>
                                                </SelectItem>
                                                <SelectItem value="CARD" className="flex items-center gap-2">
                                                    <div className="flex items-center gap-3">
                                                        <div className="h-8 w-8 rounded-full bg-purple-50 flex items-center justify-center">
                                                            💳
                                                        </div>
                                                        <div>
                                                            <p className="font-medium">Credit/Debit Card</p>
                                                            <p className="text-xs text-gray-500">Visa, Mastercard, RuPay</p>
                                                        </div>
                                                    </div>
                                                </SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>

                                <Button
                                    type="submit"
                                    className="w-full h-12 text-base font-semibold mt-6"
                                    size="lg"
                                    onClick={() => {
                                        dispatch(orderPlace(orderData));
                                        navigate('/orders');
                                        dispatch(clearCart());
                                        toast.success('order placed successfully');
                                    }}
                                >
                                    Place Order
                                </Button>
                            </form>
                        </div>
                    </div>

                    {/* Right side */}
                    <div className="lg:col-span-1">
                        <CheckoutRightSide
                            products={cart}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}