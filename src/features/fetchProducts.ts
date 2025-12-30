import api from "@/api/api"

export const fetchProducts = async () => {
    const res = await api.get('/products');
    return res?.data;
}

export const getProductById = async (id: string | undefined) => {
    const res = await api.get(`products/${id}`);
    return res?.data;
}