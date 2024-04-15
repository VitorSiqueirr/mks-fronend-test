import { motion } from "framer-motion";
import Header from "@/components/Header";
import Cart from "@/components/Cart";
import Products from "@/components/Products";
import { useState } from "react";
import Footer from "@/components/Footer";
import cx from "@/styles/Home.module.scss";

export default function Home() {
  const [showCart, setShowCart] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const enableCart = () => {
    setShowCart(true);
  };

  const disableCart = () => {
    setShowCart(false);
  };

  return (
    <>
      <Header cartCount={cartCount} enableCart={enableCart} />
      <Products />
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
