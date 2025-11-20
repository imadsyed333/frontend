import { useQuery } from "@tanstack/react-query";
import { getAllCartItems } from "../api/cartClient";

export const useCartQuery = () => {
  const { data: cart = [], isLoading } = useQuery({
    queryKey: ["cart"],
    queryFn: getAllCartItems,
    staleTime: 30 * 1000,
    gcTime: 30 * 60 * 1000,
  });

  return {
    cart,
    isLoading,
  };
};
