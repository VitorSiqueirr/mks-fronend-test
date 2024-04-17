import { Product, SelectedProduct } from "./ProductTypes";

export type SelectProductContextType = {
  selectedProduct: SelectedProduct[];
  setSelectedProduct: React.Dispatch<React.SetStateAction<SelectedProduct[]>>;
};

export type ShowCartContextType = {
  showCart: boolean;
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
};
