import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useState,
} from "react";

type SelectProductContextType = {
  selectedProductId: number | null;
  setSelectedProductId: Function;
};

export const SelectProductContext = createContext<SelectProductContextType>({
  selectedProductId: null,
  setSelectedProductId: (id: number) => {},
});

export const SelectedProductProvider = ({ children }: PropsWithChildren) => {
  const [selectedProductId, setSelectedProductId] = useState<number | null>(
    null
  );
  const value = { selectedProductId, setSelectedProductId };
  return (
    <SelectProductContext.Provider value={value}>
      {children}
    </SelectProductContext.Provider>
  );
};

export const useSelectedProduct = () => {
  return useContext(SelectProductContext);
};
