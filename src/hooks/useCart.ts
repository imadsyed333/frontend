import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getAllCartItems, syncCart } from "../api/cartClient";
import { CartItem, DeleteItem, UpdateItem } from "../types";

export const useCart = () => {
  const queryClient = useQueryClient();

  const cartQuery = useQuery({
    queryKey: ["cart"],
    queryFn: getAllCartItems,
  });

  const syncMutation = useMutation({
    mutationFn: ({
      updateItems,
      deleteItems,
    }: {
      updateItems: UpdateItem[];
      deleteItems: DeleteItem[];
    }) => syncCart(updateItems, deleteItems),
    onMutate: async ({ updateItems, deleteItems }, context) => {
      await context.client.cancelQueries({ queryKey: ["cart"] });

      const previousCart = context.client.getQueryData(["cart"]);

      context;
    },
  });
};
