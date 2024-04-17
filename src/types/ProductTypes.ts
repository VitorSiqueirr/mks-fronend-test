export type Product = {
  id: number;
  photo: string;
  brand: string;
  name: string;
  price: number;
  description: string;
};

export type SelectedProduct = {
  product: Product;
  quantity: number;
  total: number;
};
