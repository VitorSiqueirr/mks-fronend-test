import { useSelectedProduct } from "@/hooks/useSelectedProduct";
import cx from "@/styles/Header.module.scss";
import { HeaderComponentType } from "@/types/ComponentsTypes";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header({ enableCart }: HeaderComponentType) {
  const { selectedProduct } = useSelectedProduct();

  return (
    <div className={cx.headerContainer}>
      <h1 className={cx.logo}>
        MKS <span className={cx.subLogo}>Sistemas</span>
      </h1>

      <div className={cx.cartIconContainer} onClick={enableCart}>
        <FontAwesomeIcon className={cx.cartIcon} icon={faCartShopping} />
        <span className={cx.cartCount}>{selectedProduct.length}</span>
      </div>
    </div>
  );
}
