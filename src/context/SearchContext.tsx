import { type Product } from "@/types/product";
import React, { createContext, useState, type Dispatch, type SetStateAction } from "react"

type SearchProps = {
    children: React.ReactNode;
}

type SearchContextType = {
    product: Product[];
    setProduct: Dispatch<SetStateAction<Product[]>>;
    loading: boolean;
    setLoading: Dispatch<SetStateAction<boolean>>;
    error: string;
    setError: Dispatch<SetStateAction<string>>;
}

export const SearchContext = createContext<SearchContextType | null>(null);

export const SearchProvider = ({ children }: SearchProps) => {
    const [product, setProduct] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    return (
        <SearchContext.Provider
            value={{
                product,
                setProduct,
                loading,
                setLoading,
                error,
                setError
            }}>
            {children}
        </SearchContext.Provider>
    )
}
