import { ShowCartContext } from "@/context/context/showCartContext";
import { useContext } from "react";

export const useShowCart = () => {
  const context = useContext(ShowCartContext);

  if (context === undefined) {
    throw new Error("useShowCart must be used within a ShowCartProvider");
  }

  const { showCart, setShowCart } = context;

  const enableCart = () => {
    setShowCart(true);
  };

  const disableCart = () => {
    setShowCart(false);
  };

  return {
    showCart,
    enableCart,
    disableCart,
  };
};
