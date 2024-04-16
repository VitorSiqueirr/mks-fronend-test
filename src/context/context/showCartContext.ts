import { ShowCartContextType } from "@/types/CartTypes";
import { createContext } from "react";

export const ShowCartContext = createContext<ShowCartContextType | undefined>(
  undefined
);
