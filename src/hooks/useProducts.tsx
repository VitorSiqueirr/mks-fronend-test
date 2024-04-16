import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "@/api/fetch";

export const useProducts = () => {
  return useQuery({
    queryKey: ["productsData"],
    queryFn: () => fetchProducts(),
  });
};
