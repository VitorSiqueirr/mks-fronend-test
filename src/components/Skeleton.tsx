import Footer from "./Footer";
import Header from "./Header";
import cx from "@/styles/Skeleton.module.scss";

export default function Skeleton() {
  const skeletonComponents = new Array(12).fill(null);

  return (
    <div className={cx.skeletonContainer}>
      <Header />
      <div className={cx.body}>
        {skeletonComponents.map((_, index) => (
          <div key={index} className={cx.skeletonComponents}></div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
