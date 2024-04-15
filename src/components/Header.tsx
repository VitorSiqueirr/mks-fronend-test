import cx from "@/styles/Header.module.scss";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function Header() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <div className={cx.headerContainer}>
      <h1 className={cx.logo}>
        MKS <span className={cx.subLogo}>Sistemas</span>
      </h1>

      <div className={cx.cartIconContainer}>
        <FontAwesomeIcon className={cx.cartIcon} icon={faCartShopping} />
        <span className={cx.cartCount}>{cartCount}</span>
      </div>
    </div>
  );
}
