import { SelectedProduct } from "@/types/ProductTypes";
import cx from "@/styles/CartProductsCard.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { useSelectedProduct } from "@/hooks/useSelectedProduct";
import { QuantityChanger } from "./QuantityChanger";

export default function CartProductsCard({
  product,
}: {
  product: SelectedProduct;
}) {
  const { removeProduct } = useSelectedProduct();

  return (
    <div className={cx.cardContainer}>
      <picture>
        <img
          className={cx.productImage}
          src={product.product.photo}
          alt={`image of the product ${product.product.name}`}
        />
      </picture>
      <p className={cx.productName}>{product.product.name}</p>
      <div className={cx.quantityContainer}>
        <span className={cx.textQuantity}>Qtd:</span>
        <QuantityChanger product={product} />
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
