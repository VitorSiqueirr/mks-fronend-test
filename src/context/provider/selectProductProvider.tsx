import React, { ReactNode, useState } from "react";
import { SelectProductContext } from "../context/selectProductContext";
import { SelectedProduct } from "@/types/ProductTypes";

export const SelectProductProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [selectedProduct, setSelectedProduct] = useState<SelectedProduct[]>([]);

  return (
    <SelectProductContext.Provider
      value={{
        selectedProduct,
        setSelectedProduct,
      }}>
      {children}
    </SelectProductContext.Provider>
  );
};
