import { SelectProductContextType } from "@/types/ProductTypes";
import { createContext } from "react";

export const SelectProductContext = createContext<
  SelectProductContextType | undefined
>(undefined);
