
export type Product = {
    id: number,
    name: string,
    price: number,
    description: string,
    image: string,
}

export type Order = {
    id: number,
    date: string,
    products: Array<Purchase>,
}

export type User = {
    id: number,
    name: string,
    email: string,
}

export type Purchase = {
    product_id: number,
    product_name: string,
    product_price: number,
    product_count: number,
}

export const apiUrl = 'http://localhost:5000'