import { SelectProductContext } from "@/context/context/selectProductContext";
import { Product } from "@/types/ProductTypes";
import { useContext } from "react";

export const useSelectedProduct = () => {
  const context = useContext(SelectProductContext);

  if (context === undefined) {
    throw new Error(
      "useSelectedProduct must be used within a SelectProductProvider"
    );
  }

  const { selectedProduct, setSelectedProduct } = context;

  const addProduct = (product: Product) => {
    setSelectedProduct((prev) => {
      const existingProduct = prev.find((p) => p.product.id === product.id);

      if (existingProduct) {
        return prev.map((p) =>
          p.product.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      } else {
        return [...prev, { product, quantity: 1 }];
      }
    });
  };

  const removeProduct = (productId: number) => {
    setSelectedProduct((prev) =>
      prev.filter((p) => p.product.id !== productId)
    );
  };

  const incrementQuantity = (productId: number) => {
    setSelectedProduct((prev) =>
      prev.map((p) =>
        p.product.id === productId ? { ...p, quantity: p.quantity + 1 } : p
      )
    );
  };

  return {
    selectedProduct,
    addProduct,
    removeProduct,
    incrementQuantity,
  };
};
