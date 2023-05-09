import React, { useEffect } from "react";
import styles from "./UpButton.module.css";
import UpIcon from "./upButton.svg";
import cn from "classnames";
import { useScrollY } from "../../../hooks/useScrollY";
import { motion, useAnimation } from "framer-motion";
import ButtonIcon from "../ButtonIcon/ButtonIcon";

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
    <motion.div
      className={styles.up}
      animate={controls}
      initial={{ opacity: 0 }}
    >
      <ButtonIcon appearance="primary" icon="up" onClick={scrollToTop} />
    </motion.div>
  );
}
