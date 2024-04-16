import Header from "@/components/Header";
import Cart from "@/components/Cart";
import Products from "@/components/Products";
import Footer from "@/components/Footer";
import cx from "@/styles/Home.module.scss";
import Skeleton from "@/components/Skeleton";
import { useShowCart } from "@/hooks/useShowCart";
import { useProducts } from "@/hooks/useProducts";

export default function Home() {
  const { showCart, disableCart } = useShowCart();

  const { isPending, error, data } = useProducts();

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
