import { Order } from "../types";
import api from "./api";

type GetOrdersResponse = {
  orders: Order[];
};

export const getUserOrders = async () => {
  const res = await api.get<GetOrdersResponse>("/orders");
  return res.data;
};
