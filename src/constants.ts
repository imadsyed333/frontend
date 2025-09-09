
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
        name: 'Creamy Samosa',
        price: 10,
        description: 'A samosa filled with creamy garlic sauce.'
    },
    {
        id: 2,
        name: 'Chicken Samosa',
        price: 12,
        description: 'The traditional ground chicken samosa.'
    },
    {
        id: 3,
        name: 'Veggie Samosa',
        price: 9,
        description: 'The traditional veggie samosa',
    }
]

export const imageLink = 'https://media.istockphoto.com/id/1430060145/photo/sweet-tasty-fried-indian-dish-samosha-indian-delicious-deep-fried-breakfast-samosa-also-know.jpg?s=612x612&w=0&k=20&c=bxOAfJThGKNSzugC7Id_vPO9l5UPljCKSgOc18-2vS0='