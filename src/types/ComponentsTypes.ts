import { Product } from "./ProductTypes";

export type ProductComponentType = {
  ProductData: { products: Product[]; count: number };
};

export type HeaderComponentType = {
  enableCart: () => void;
};
