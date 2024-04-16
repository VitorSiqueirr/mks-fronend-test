import { SelectProductContextType } from "@/types/ProductTypes";
import { createContext } from "react";

export const ShowCartContext = createContext<
  SelectProductContextType | undefined
>(undefined);
