import { useState } from "react";

export const useShowCart = () => {
  const [showCart, setShowCart] = useState(false);

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
