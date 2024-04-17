import { SelectProductContextType } from "@/types/ContextTypes";
import { createContext } from "react";

export const SelectProductContext = createContext<
  SelectProductContextType | undefined
>(undefined);
