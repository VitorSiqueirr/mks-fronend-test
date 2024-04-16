import { useSelectedProduct } from "@/hooks/useSelectedProduct";
import { useShowCart } from "@/hooks/useShowCart";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cx from "@/styles/CartIcon.module.scss";

export default function CartIcon() {
  const { selectedProduct } = useSelectedProduct();
  const { enableCart } = useShowCart();

  return (
    <div className={cx.cartIconContainer} onClick={() => enableCart()}>
      <FontAwesomeIcon className={cx.cartIcon} icon={faCartShopping} />
      <span className={cx.cartCount}>{selectedProduct.length}</span>
    </div>
  );
}
