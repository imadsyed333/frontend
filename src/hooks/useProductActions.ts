import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Product } from "../types";
import { updateProduct } from "../api/productClient";

export const useProductActions = () => {
  const queryClient = useQueryClient();

  const addMutation = () => {};

  const editMutation = useMutation({
    mutationFn: async (product: Product) => {
      try {
        const updatedProduct = await updateProduct(product);
        return updatedProduct;
      } catch (e) {
        console.error(e);
        throw e;
      }
    },
    onSuccess: (updatedProduct) => {
      queryClient.setQueryData<Product[]>(["products"], (oldProducts) =>
        updateProducts(oldProducts, updatedProduct)
      );
    },
  });

  const updateProducts = (
    oldProducts: Product[] | undefined,
    updatedProduct: Product
  ) => {
    return (
      oldProducts?.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      ) || []
    );
  };

  const editProduct = (product: Product) => {
    editMutation.mutate(product);
  };

  return {
    editProduct,
  };
};
