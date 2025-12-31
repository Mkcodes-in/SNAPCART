import Category from "@/pages/Category";

export interface product {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock?: number;
    thumbnail: string;
    reviews: Review[]
}

export interface productProps {
    product: product;
}

export interface productState {
    product: product[];
    category: product[];
    loading: boolean;
    error: string | undefined;
}

export interface productDetails extends product {
    brand: string;
    sku: string;
    dimensions: {
        width: number;
        height: number;
        depth: number;
    }
    warrantyInformation?: string;
    shippingInformation?: string;
    images: string[];
}

export interface Review {
    rating: number;
    comment: string;
    date: string;
    reviewerName: string;
}

export interface ReviewProps {
    review: Review[];
}

export interface Category {
    name: string;
    url: string;
}

export type categoryProps = {
    category: Category[];
}