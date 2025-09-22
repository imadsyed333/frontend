import { Product, apiUrl } from "../constants"

export const getProductWithId = async (id: number): Promise<Product> => {
    const request: RequestInfo = new Request(`${apiUrl}/products/${id}`, {
        method: 'GET',
    })
    return fetch(request).then(res => res.json()).then(res => {
        return res as Product
    })
}

export const getProducts = async (): Promise<Product[]> => {
    const request: RequestInfo = new Request(`${apiUrl}/products`, {
        method: 'GET',
    })
    return fetch(request).then(res => res.json()).then(res => {
        return res as Product[]
    })
}