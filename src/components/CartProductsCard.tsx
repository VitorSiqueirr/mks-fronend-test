import { SelectedProduct } from "@/types/ProductTypes";
import cx from "@/styles/CartProductsCard.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { useSelectedProduct } from "@/hooks/useSelectedProduct";

export default function CartProductsCard({
  product,
}: {
  product: SelectedProduct;
}) {
  const { incrementQuantity, decrementQuantity, removeProduct } =
    useSelectedProduct();

  return (
    <div className={cx.cardContainer}>
      <picture>
        <img className={cx.productImage} src={product.product.photo} alt="" />
      </picture>
      <p className={cx.productName}>{product.product.name}</p>
      <div className={cx.quantityContainer}>
        <span className={cx.textQuantity}>Qtd:</span>
        <div className={cx.quantityChanger}>
          <button
            className={cx.button}
            onClick={() => {
              decrementQuantity(product.product.id);
            }}>
            -
          </button>
          <span className={cx.quantity}>{product.quantity}</span>
          <button
            className={cx.button}
            onClick={() => {
              incrementQuantity(product.product.id);
            }}>
            +
          </button>
        </div>
      </div>
      <p className={cx.total}>R${product.total}</p>

      <FontAwesomeIcon
        className={cx.productDeleteIcon}
        icon={faCircleXmark}
        onClick={() => removeProduct(product.product.id)}
      />
    </div>
  );
}
