import api from "@/api/api"

export const fetchProducts = async () => {
    const res = await api.get('/products');
    return res?.data?.products;
}

export const fetchProductByCategory = async () => {
    const res = await api.get('products/categories');
    return res?.data;
}

export const getProductById = async (id: string | undefined) => {
    const res = await api.get(`products/${id}`);
    return res?.data;
}

export const getProductByCategory = async (category: string | undefined) => {
    const res = await api.get(`product/category/${category}`);
    return res?.data?.products;
}