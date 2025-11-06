import { CartItem, DeleteItem, UpdateItem } from "../types";
import api from "./api";

type CartItemsResponse = {
    cartItems: CartItem[]
}

export const getAllCartItems = async () => {
    const res = await api.get<CartItemsResponse>("/cart/all")
    return res.data
}

export const addCartItem = async (id: number, quantity: number) => {
    const res = await api.post("/cart/add", {id, quantity})
    return res.data
}

export const syncCart = async (updateItems: UpdateItem[], deleteItems: DeleteItem[]) => {
    const res = await api.post("/cart/sync", {updateItems, deleteItems})
    return res.data
}