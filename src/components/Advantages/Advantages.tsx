import React from "react";
import { AdvantagesProps } from "./Advantages.props";
import styles from "./Advantages.module.css";
import cn from "classnames";
import Card from "../Card/Card";
import CheckedIcon from "./Checked.svg";

export default function Advantages({
  advantages,
}: AdvantagesProps): JSX.Element {
  return (
    <>
      {advantages.map((a) => {
        return (
          <div key={a._id} className={styles.advantage}>
            <CheckedIcon />
            <div className={styles.title}>{a.title}</div>
            <hr className={styles.vLine} />
            <div>{a.description}</div>
          </div>
        );
      })}
    </>
  );
}
