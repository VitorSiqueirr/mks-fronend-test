import Header from "@/components/Header";
import Cart from "@/components/Cart";
import Products from "@/components/Products";
import { useState } from "react";
import Footer from "@/components/Footer";
import cx from "@/styles/Home.module.scss";
import { useQuery } from "@tanstack/react-query";
import Skeleton from "@/components/Skeleton";

export default function Home() {
  const [showCart, setShowCart] = useState(false);

  const { isPending, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch(
        "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=10&sortBy=id&orderBy=ASC"
      ).then((res) => res.json()),
  });

  if (isPending) return <Skeleton />;

  if (error) return "An error has occurred: " + error.message;

  const enableCart = () => {
    setShowCart(true);
  };

  const disableCart = () => {
    setShowCart(false);
  };

  return (
    <>
      <Header enableCart={enableCart} />
      <Products ProductData={data} />
      {showCart && (
        <>
          <div className={cx.mask} onClick={disableCart} />
          <Cart disableCart={disableCart} />
        </>
      )}
      <Footer />
    </>
  );
}
