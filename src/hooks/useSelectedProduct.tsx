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

  const updateProduct = (productId: number, quantityChange: number) => {
    setSelectedProduct((prev) =>
      prev.map((p) =>
        p.product.id === productId
          ? {
              ...p,
              quantity: Math.max(p.quantity + quantityChange, 0),
              total: parseFloat(
                (
                  p.product.price * Math.max(p.quantity + quantityChange, 0)
                ).toFixed(2)
              ),
            }
          : p
      )
    );
  };

  const addProduct = (product: Product) => {
    setSelectedProduct((prev) => {
      const existingProduct = prev.find((p) => p.product.id === product.id);

      if (existingProduct) {
        return prev.map((p) =>
          p.product.id === product.id
            ? {
                ...p,
                quantity: p.quantity + 1,
                total: parseFloat(
                  (product.price * (p.quantity + 1)).toFixed(2)
                ),
              }
            : p
        );
      } else {
        return [...prev, { product, quantity: 1, total: product.price }];
      }
    });
  };

  const removeProduct = (productId: number) => {
    setSelectedProduct((prev) =>
      prev.filter((p) => p.product.id !== productId)
    );
  };

  const incrementQuantity = (productId: number) => {
    updateProduct(productId, 1);
  };

  const decrementQuantity = (productId: number) => {
    updateProduct(productId, -1);
  };

  const clearProducts = () => {
    setSelectedProduct([]);
  };

  return {
    selectedProduct,
    addProduct,
    removeProduct,
    incrementQuantity,
    decrementQuantity,
    clearProducts,
  };
};
