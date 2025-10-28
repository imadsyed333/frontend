
export type Product = {
    id: number,
    name: string,
    price: number,
    description: string,
    image: string,
}

export type Order = {
    id: number,
    cost: number,
    datetime: Date,
    purchases: Array<Purchase>,
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

export type FieldErrors = {
    name?: String[],
    email?: String[],
    password?: String[]
}

export const apiUrl = process.env.REACT_APP_SERVER_URL