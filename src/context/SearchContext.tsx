import { type Product } from "@/types/product";
import React, { createContext, useState, type Dispatch, type SetStateAction } from "react"

type SearchProps = {
    children: React.ReactNode;
}

type SearchContextType = {
    text: string;
    setText: Dispatch<SetStateAction<string>>;
    searchProduct: Product[];
    setSearchProduct: Dispatch<SetStateAction<Product[]>>;
    loading: boolean;
    setLoading: Dispatch<SetStateAction<boolean>>;
    error: string;
    setError: Dispatch<SetStateAction<string>>;
}

export const SearchContext = createContext<SearchContextType | null>(null);

export const SearchProvider = ({ children }: SearchProps) => {
    const [text, setText] = useState<string>('');
    const [searchProduct, setSearchProduct] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    return (
        <SearchContext.Provider
            value={{
                text, 
                setText,
                searchProduct,
                setSearchProduct,
                loading,
                setLoading,
                error,
                setError
            }}>
            {children}
        </SearchContext.Provider>
    )
}
