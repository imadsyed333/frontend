import { Order, Purchase } from "../types";
import api from "./api";

type CreateOrderResponse = {
    message: string
}

type GetOrdersResponse = {
    orders: Order[]
}

export const createOrder = async (cost: number, purchases: Purchase[]) => {
    const res = await api.post<CreateOrderResponse>("/orders", { cost, purchases })
    return res.data
}

export const getUserOrders = async () => {
    const res = await api.get<GetOrdersResponse>("/orders")
    return res.data
}