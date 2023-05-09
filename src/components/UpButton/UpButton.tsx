import React, { useEffect } from "react";
import styles from "./UpButton.module.css";
import UpIcon from "./upButton.svg";
import cn from "classnames";
import { useScrollY } from "../../../hooks/useScrollY";
import { motion, useAnimation } from "framer-motion";

export default function UpButton(): JSX.Element {
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
