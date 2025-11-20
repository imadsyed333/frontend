import { Product } from "../types";
import api from "./api";

type ProductWithIdResponse = {
  product: Product;
};

type AllProductsResponse = {
  products: Product[];
};

export const getProductWithId = async (id: number) => {
  try {
    const res = await api.get<ProductWithIdResponse>(`/products/${id}`);
    return res.data;
  } catch (e) {
    console.error("Error fetching product:", e);
    throw e;
  }
};

export const getAllProducts = async () => {
  try {
    const res = await api.get<AllProductsResponse>("/products/all");
    return res.data;
  } catch (e) {
    console.error("Error fetching products:", e);
    throw e;
  }
};
