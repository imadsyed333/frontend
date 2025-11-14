import { CartItem, DeleteItem, UpdateItem } from "../types";
import api from "./api";

type CartItemsResponse = {
  cartItems: CartItem[];
};

type CheckoutUrlResponse = {
  url: string;
};

export const getAllCartItems = async () => {
  const res = await api.get<CartItemsResponse>("/cart");
  return res.data.cartItems;
};

export const addCartItem = async (productId: number, quantity: number) => {
  const res = await api.post("/cart/add", { productId, quantity });
  return res.data;
};

export const syncCart = async (
  updateItems: UpdateItem[],
  deleteItems: DeleteItem[]
) => {
  const res = await api.put("/cart/sync", { updateItems, deleteItems });
  return res.data;
};

export const checkoutCart = async () => {
  const res = await api.post<CheckoutUrlResponse>(
    "payments/create-checkout-session"
  );
  return res.data;
};
