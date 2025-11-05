
export type Product = {
    id: number,
    name: string,
    price: number,
    image: string,
    description: string,
}

export type CartItem = {
    product: Product,
    quantity: number,
}

export type Order = {
    id: number,
    cost: number,
    datetime: Date,
    purchases: Array<OrderItem>,
}

export type OrderItem = {
    product: Product,
    unitPrice: number,
    quantity: number,
    subtotal: number,
}

export type User = {
    id: number,
    name: string,
    email: string,
}


export type FieldErrors = {
    name?: String[],
    email?: String[],
    password?: String[]
}