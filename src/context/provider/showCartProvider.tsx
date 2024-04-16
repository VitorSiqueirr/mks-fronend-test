import { ReactNode, useState } from "react";
import { ShowCartContext } from "../context/showCartContext";

export const ShowCartProvider = ({ children }: { children: ReactNode }) => {
  const [showCart, setShowCart] = useState<boolean>(false);

  return (
    <ShowCartContext.Provider
      value={{
        showCart,
        setShowCart,
      }}>
      {children}
    </ShowCartContext.Provider>
  );
};
