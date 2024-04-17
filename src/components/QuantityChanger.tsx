import { useSelectedProduct } from "@/hooks/useSelectedProduct";
import { SelectedProduct } from "@/types/ProductTypes";
import cx from "@/styles/QuantityChanger.module.scss";

export const QuantityChanger = ({ product }: { product: SelectedProduct }) => {
  const { incrementQuantity, decrementQuantity } = useSelectedProduct();

  return (
    <div className={cx.quantityChanger}>
      <button
        className={cx.button}
        onClick={() => {
          decrementQuantity(product.product.id);
        }}>
        -
      </button>
      <span data-testid="productQuantity" className={cx.quantity}>
        {product.quantity}
      </span>
      <button
        className={cx.button}
        onClick={() => {
          incrementQuantity(product.product.id);
        }}>
        +
      </button>
    </div>
  );
};
