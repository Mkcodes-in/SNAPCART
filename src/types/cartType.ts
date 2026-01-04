import type { Product } from "./product";

export interface CartQuantity extends Product{
    quantity: number;
}

export interface CartState{
    cart: CartQuantity[];
}