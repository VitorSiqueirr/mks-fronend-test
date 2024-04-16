import ProductCards from "./ProductsCards";
import { Key } from "react";
import cx from "@/styles/Products.module.scss";
import { Product } from "@/types/ProductTypes";
import { ProductComponentType } from "@/types/ComponentsTypes";

export default function Products({ ProductData }: ProductComponentType) {
  return (
    <div className={cx.productsList}>
      {ProductData.products.map((product: Product, key: Key) => (
        <ProductCards key={key} product={product} />
      ))}
    </div>
  );
}
