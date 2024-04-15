import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cx from "@/styles/ProductsCards.module.scss";

export default function ProductCards({
  product,
}: {
  product: {
    id: number;
    photo: string;
    brand: string;
    name: string;
    price: number;
    description: string;
  };
}) {
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
      <button className={cx.buyProduct}>
        <FontAwesomeIcon className={cx.buyIcon} icon={faBagShopping} /> Comprar
      </button>
    </div>
  );
}
