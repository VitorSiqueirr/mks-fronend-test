import { motion } from "framer-motion";
import cx from "@/styles/Home.module.scss";
import Header from "@/components/Header";
import Cart from "@/components/Cart";
import ProductCards from "@/components/ProductsCards";
import Products from "@/components/Products";
import { useState } from "react";
import Footer from "@/components/Footer";

export default function Home() {
  const [showCart, setShowCart] = useState(false);

  return (
    <>
      <Header />
      <Products />
      <Footer />
    </>
  );
}
