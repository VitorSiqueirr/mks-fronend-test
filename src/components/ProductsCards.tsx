import cx from "@/styles/ProductsCards.module.scss";
import { Product } from "@/types/ProductTypes";
import { BuyButton } from "./BuyButton";

export default function ProductCards({ product }: { product: Product }) {
  return (
    <div className={cx.productCard}>
      <div className={cx.product}>
        <picture>
          <img
            className={cx.productImg}
            src={product.photo}
            alt={`This is a image of the product ${product.name}`}
          />
        </picture>
        <div className={cx.productInfos}>
          <h1 className={cx.productName}>{product.name}</h1>
          <p className={cx.productPrice}>R${product.price}</p>
        </div>
        <p className={cx.productDescription}>{product.description}</p>
      </div>
      <BuyButton product={product} />
    </div>
  );
}
