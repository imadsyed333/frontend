import React, { createContext, useState } from "react";
import { Order } from "../types";

type OrderContextType = {
  selectedOrder: Order | null;
  setSelectedOrder: Function;
};

export const OrderContext = createContext<OrderContextType>({
  selectedOrder: null,
  setSelectedOrder: (order: Order) => {},
});

export const OrderProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  const value = { selectedOrder, setSelectedOrder };
  return (
    <OrderContext.Provider value={value}>{children}</OrderContext.Provider>
  );
};
