import { useEffect, useState } from "react";
import { useSelectedProduct } from "@/hooks/useSelectedProduct";

export const useTotal = () => {
  const { selectedProduct } = useSelectedProduct();
  const [total, setTotal] = useState(0.0);

  useEffect(() => {
    const newTotal = selectedProduct.reduce((sum, product) => {
      return sum + product.total * 100;
    }, 0);

    setTotal(newTotal / 100);
  }, [selectedProduct]);

  return total;
};
