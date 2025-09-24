import { Purchase } from "../constants";

export const saveCart = (cart: Purchase[]) => {
    const cartString = JSON.stringify(cart)
    window.sessionStorage.setItem('cart', cartString)
}