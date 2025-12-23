export interface product{
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock?: number;
}

export interface productState{
    products: product[]; 
    loading: boolean;
    error: string | null;
}

export interface productDetails extends product{
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

export interface Review{
    rating: number;
    comment: string;
    date: string;
    reviewerName: string;
}