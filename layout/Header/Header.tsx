import React, { useEffect, useState } from "react";
import { HeaderProps } from "./Header.props";
import styles from "./Header.module.css";
import cn from "classnames";
import Logo from "../logo.svg";
import ButtonIcon from "@/components/ButtonIcon/ButtonIcon";
import { motion } from "framer-motion";
import Sidebar from "../Sidebar/Sidebar";
import { useRouter } from "next/router";

export default function Header({
  className,
  ...props
}: HeaderProps): JSX.Element {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  const router = useRouter();

  useEffect(() => {
    setIsOpened(false);
  }, [router]);

  const variants = {
    opened: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 50 },
    },
    closed: {
      opacity: 0,
      x: "100%",
    },
  };

  return (
    <header className={cn(className, styles.header)} {...props}>
      <Logo />
      <ButtonIcon
        icon="menu"
        appearance="white"
        onClick={() => {
          setIsOpened(!isOpened);
        }}
      />
      <motion.div
        className={styles.mobileMenu}
        variants={variants}
        initial="closed"
        animate={isOpened ? "opened" : "closed"}
      >
        <Sidebar />
        <ButtonIcon
          className={styles.menuClose}
          appearance="white"
          icon="close"
          onClick={() => {
            setIsOpened(!isOpened);
          }}
        />
      </motion.div>
    </header>
  );
}
