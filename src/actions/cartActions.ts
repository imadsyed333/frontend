import { Purchase } from "../types";

export const saveCart = (cart: Purchase[]) => {
    const cartString = JSON.stringify(cart)
    window.sessionStorage.setItem('cart', cartString)
}