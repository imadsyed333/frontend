import axios from "axios";
import { apiUrl, Order, Purchase } from "../constants";

type CreateOrderResponse = {
    message: string
}

type GetOrdersResponse = {
    orders: Order[]
}

const api = axios.create({
    baseURL: apiUrl,
    withCredentials: true,
})

export const createOrder = async (cost: number, purchases: Purchase[]) => {
    const res = await api.post<CreateOrderResponse>("/orders", { cost, purchases })
    return res.data
}

export const getUserOrders = async () => {
    const res = await api.get<GetOrdersResponse>("/orders")
    return res.data
}