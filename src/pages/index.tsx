import { motion } from "framer-motion";
import cx from "@/styles/Home.module.scss";

export default function Home() {
  return (
    <>
      <motion.div
        className={cx.box}
        initial={{ opacity: 0 }}
        animate={{ y: [-50, 50, 0], opacity: 1 }}>
        <h1>Aloooo</h1>
      </motion.div>
    </>
  );
}
