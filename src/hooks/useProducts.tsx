import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "@/api/fetch";

export const useProducts = () => {
  const results = useQuery({
    queryKey: ["productsData"],
    queryFn: () => fetchProducts(),
  });

  return results;
};
