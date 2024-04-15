import cx from "@/styles/Cart.module.scss";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Cart({ disableCart }) {
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
      <div className={cx.cartProducts}>Produto</div>

      <div className={cx.cartFooter}>
        <p className={cx.cartTotal}>
          Total:
          <span>R$798</span>
        </p>
        <button className={cx.cartCheckout} onClick={disableCart}>
          Finalizar Compra
        </button>
      </div>
    </div>
  );
}
