import { Product } from "../types"
import api from "./api"

type ProductWithIdResponse = {
    product: Product,
}

type AllProductsResponse = {
    products: Product[]
}

export const getProductWithId = async (id: number) => {
    const res = await api.get<ProductWithIdResponse>(`/products/${id}`)
    return res.data
}

export const getAllProducts = async () => {
    const res = await api.get<AllProductsResponse>("/products/all")
    return res.data
}