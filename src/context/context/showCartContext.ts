import { ShowCartContextType } from "@/types/ContextTypes";
import { createContext } from "react";

export const ShowCartContext = createContext<ShowCartContextType | undefined>(
  undefined
);
