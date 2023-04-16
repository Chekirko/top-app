import React from "react";
import { FooterProps } from "./Footer.props";
import styles from "./Footer.module.css";
import cn from "classnames";
import format from "date-fns/format";
import Ptag from "@/components/Ptag/Ptag";

export default function Footer({
  className,
  ...props
}: FooterProps): JSX.Element {
  return (
    <footer {...props} className={cn(className, styles.footer)}>
      <div>OwlTop © 2020 - {format(new Date(), "yyyy")} Все права защищены</div>
      <a href="#" target="_blank" className={styles.link}>
        <Ptag size="m">Пользовательское соглашение</Ptag>
      </a>
      <a href="#" target="_blank" className={styles.link}>
        <Ptag size="m">Политика конфиденциальности</Ptag>
      </a>
    </footer>
  );
}
