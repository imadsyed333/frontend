import axios from "axios"
import { Product, apiUrl } from "../constants"

type ProductWithIdResponse = {
    product: Product,
}

type AllProductsResponse = {
    products: Product[]
}

const api = axios.create({
    baseURL: apiUrl
})

export const getProductWithId = async (id: number) => {
    const res = await api.get<ProductWithIdResponse>(`/products/${id}`)
    return res.data
}

export const getAllProducts = async () => {
    const res = await api.get<AllProductsResponse>("/products/all")
    return res.data
}