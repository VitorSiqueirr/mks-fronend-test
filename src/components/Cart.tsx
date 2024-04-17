import { useSelectedProduct } from "@/hooks/useSelectedProduct";
import cx from "@/styles/Cart.module.scss";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CartProductsCard from "./CartProductsCard";
import { useShowCart } from "@/hooks/useShowCart";
import { useTotal } from "@/hooks/useTotal";

export default function Cart() {
  const { selectedProduct, clearProducts } = useSelectedProduct();
  const { disableCart } = useShowCart();
  const total = useTotal();

  return (
    <div className={cx.cartContainer}>
      <div className={cx.cartHeader}>
        <h1 className={cx.cartTitle}>Carrinho de Compras</h1>
        <FontAwesomeIcon
          data-testid="closeCartIcon"
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
        <p data-testid="finalAmount" className={cx.cartTotal}>
          Total:
          <span>R${total}</span>
        </p>
        <button
          className={cx.cartCheckout}
          onClick={() => {
            clearProducts();
            disableCart();
          }}>
          Finalizar Compra
        </button>
      </div>
    </div>
  );
}
