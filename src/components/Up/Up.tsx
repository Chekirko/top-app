import React, { useEffect } from "react";
import styles from "./Up.module.css";
import UpIcon from "./up.svg";
import cn from "classnames";
import { useScrollY } from "../../../hooks/useScrollY";
import { motion, useAnimation } from "framer-motion";

export default function Up(): JSX.Element {
  const controls = useAnimation();
  const scrollY = useScrollY();

  useEffect(() => {
    controls.start({ opacity: scrollY / document.body.scrollHeight });
  }, [scrollY, controls]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <motion.button
      className={styles.up}
      onClick={scrollToTop}
      animate={controls}
      initial={{ opacity: 0 }}
    >
      <UpIcon />
    </motion.button>
  );
}
