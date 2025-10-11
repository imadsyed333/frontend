
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
    count: number,
}

export type RegisterResponse = {
    id: number,
    email: string,
    name: string,
}

export type LoginResponse = {
    message: string,
}

export type RefreshResponse = {
    message: string,
}

export type LogoutResponse = {
    message: string,
}

export type ProfileResponse = {
    user: User,
}

export const apiUrl = 'http://localhost:5000'