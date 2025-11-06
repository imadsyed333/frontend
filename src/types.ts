
export type Product = {
    id: number,
    name: string,
    price: number,
    image: string,
    description: string,
}

export type CartItem = {
    id: number,
    product: Product,
    quantity: number,
}

export type Order = {
    id: number,
    cost: number,
    createdAt: Date,
    orderItems: Array<OrderItem>,
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

export type UpdateItem = {
    id: number,
    quantity: number,
}

export type DeleteItem = {
    id: number,
}