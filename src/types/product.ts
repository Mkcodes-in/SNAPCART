export interface Product {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock?: number;
    thumbnail: string;
    reviews: Review[];
}

export interface ProductProps {
    product: Product;
}

export interface ProductState {
    product: Product[];
    productCategory: ProductCategory[];
    loading: boolean;
    error: string | undefined;
}

export interface ProductDetails extends Product {
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

export interface ProductCategory{
    name: string;
    url: string;
    slug: string;
}

export interface ProductCategoryProps{
    categories: ProductCategory[];
}