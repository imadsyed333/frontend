
export type Product = {
    id: number,
    name: string,
    price: number,
    description: string,
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

export const products: Array<Product> = [
    {
        id: 1,
        name: 'creamy samosa',
        price: 10,
        description: 'A samosa filled with creamy garlic sauce.'
    },
    {
        id: 2,
        name: 'chicken samosa',
        price: 12,
        description: 'The traditional ground chicken samosa.'
    },
    {
        id: 3,
        name: 'veggie samosa',
        price: 9,
        description: 'The traditional veggie samosa',
    }
]