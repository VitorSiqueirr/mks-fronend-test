import { useQuery } from "@tanstack/react-query";
import ProductCards from "./ProductsCards";
import { Key } from "react";
import cx from "@/styles/Products.module.scss";

export default function Products() {
  const { isPending, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch(
        "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=10&sortBy=id&orderBy=ASC"
      ).then((res) => res.json()),
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div className={cx.productsList}>
      {data.products.map(
        (
          product: {
            id: number;
            photo: string;
            brand: string;
            name: string;
            price: number;
            description: string;
          },
          key: Key
        ) => (
          <>
            <ProductCards key={key} product={product} />
          </>
        )
      )}
    </div>
  );
}
