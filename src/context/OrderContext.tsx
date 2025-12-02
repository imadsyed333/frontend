import React, { createContext, useContext, useState } from "react";

type OrderContextType = {
  selectedOrderId: number | null;
  setSelectedOrderId: (id: number) => void;
};

export const OrderContext = createContext<OrderContextType>({
  selectedOrderId: null,
  setSelectedOrderId: (id: number) => {},
});

export const OrderProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const [selectedOrderId, setSelectedOrderId] = useState<number | null>(null);

  const value = { selectedOrderId, setSelectedOrderId };
  return (
    <OrderContext.Provider value={value}>{children}</OrderContext.Provider>
  );
};

export const useSelectedOrder = () => {
  return useContext(OrderContext);
};
