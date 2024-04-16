import { useSelectedProduct } from "@/hooks/useSelectedProduct";
import cx from "@/styles/Cart.module.scss";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CartProductsCard from "./CartProductsCard";
import { useEffect, useState } from "react";
import { useShowCart } from "@/hooks/useShowCart";

export default function Cart() {
  const { selectedProduct } = useSelectedProduct();
  const { disableCart } = useShowCart();
  const [total, setTotal] = useState(0.0);

  useEffect(() => {
    const newTotal = selectedProduct.reduce((sum, product) => {
      return sum + product.total * 100;
    }, 0);

    setTotal(newTotal / 100);
  }, [selectedProduct]);

  return (
    <div className={cx.cartContainer}>
      <div className={cx.cartHeader}>
        <h1 className={cx.cartTitle}> Carrinho de Compras</h1>
        <FontAwesomeIcon
          className={cx.cartCloseIcon}
          icon={faCircleXmark}
          onClick={disableCart}
        />
      </div>
      <div className={cx.cartProducts}>
        {selectedProduct.length != 0 ? (
          selectedProduct.map((product, key) => (
            <CartProductsCard key={key} product={product} />
          ))
        ) : (
          <></>
        )}
      </div>

      <div className={cx.cartFooter}>
        <p className={cx.cartTotal}>
          Total:
          <span>R${total}</span>
        </p>
        <button className={cx.cartCheckout} onClick={disableCart}>
          Finalizar Compra
        </button>
      </div>
    </div>
  );
}
