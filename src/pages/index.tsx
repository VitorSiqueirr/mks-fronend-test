import Header from "@/components/Header";
import Cart from "@/components/Cart";
import Products from "@/components/Products";
import { useState } from "react";
import Footer from "@/components/Footer";
import cx from "@/styles/Home.module.scss";
import { useQuery } from "@tanstack/react-query";
import Skeleton from "@/components/Skeleton";
import { fetchProducts } from "@/api/fetch";
import { useShowCart } from "@/hooks/useShowCart";

export default function Home() {
  const { showCart, disableCart } = useShowCart();

  const { isPending, error, data } = useQuery({
    queryKey: ["productsData"],
    queryFn: () => fetchProducts(),
  });

  if (isPending) return <Skeleton />;

  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      <Header />
      <Products ProductData={data} />
      {showCart && (
        <>
          <div className={cx.mask} onClick={disableCart} />
          <Cart />
        </>
      )}
      <Footer />
    </>
  );
}
