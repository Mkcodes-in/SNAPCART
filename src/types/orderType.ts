import type { Product } from "./product";

export interface FormDataProps{
    name: string;
    phone: string;
    email: string;
    address: string;
    city: string;
    state: string;
    pincode: string;
    paymentMethod: string;
    date: number;
}

export interface OrderDetailProps extends FormDataProps{
    product: Product[];
}

// export interface OrderProps {
//     orderDetails: FormDataProps[];

// }
