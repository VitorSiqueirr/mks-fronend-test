import { useSelectedProduct } from "@/hooks/useSelectedProduct";
import { Product } from "@/types/ProductTypes";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cx from "@/styles/BuyButton.module.scss";

export const BuyButton = ({ product }: { product: Product }) => {
  const { addProduct } = useSelectedProduct();

  return (
    <button
      className={cx.buyProduct}
      onClick={() => {
        addProduct(product);
      }}>
      <FontAwesomeIcon className={cx.buyIcon} icon={faBagShopping} /> Comprar
    </button>
  );
};
