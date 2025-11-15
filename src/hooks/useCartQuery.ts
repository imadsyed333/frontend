import { useQuery } from "@tanstack/react-query";
import { getAllCartItems } from "../api/cartClient";

export const useCartQuery = () => {
  const { data: cart = [], isLoading } = useQuery({
    queryKey: ["cart"],
    queryFn: getAllCartItems,
  });

  return {
    cart,
    isLoading,
  };
};
