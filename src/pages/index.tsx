import { motion } from "framer-motion";
import cx from "@/styles/Home.module.scss";
import Header from "@/components/Header";
import Cart from "@/components/Cart";
import ProductCards from "@/components/ProductsCards";
import Products from "@/components/Products";

export default function Home() {
  return (
    <>
      <Header />
      <Cart />
      <ProductCards />
      <Products />
    </>
  );
}
