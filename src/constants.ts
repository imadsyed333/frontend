
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
    products: Array<Product>,
}

export type User = {
    id: string,
    email: string,
    password: string,
    cart: Array<Product>
}

export type Purchase = {
    product_id: number,
    product_name: string,
    product_price: number,
    count: number,
}

export const apiUrl = 'http://localhost:5000'