import cx from "@/styles/Header.module.scss";
import CartIcon from "./CartIcon";

export default function Header() {
  return (
    <div className={cx.headerContainer}>
      <h1 className={cx.logo}>
        MKS <span className={cx.subLogo}>Sistemas</span>
      </h1>
      <CartIcon />
    </div>
  );
}
