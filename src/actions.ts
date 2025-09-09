import { Product, products } from "./constants"

export const getProductWithId = (id: number): Product | undefined => {
    return products.filter(product => product.id === id)[0]
}


export const getProducts = () => {
    return products
}