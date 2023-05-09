import React from "react";
import { AdvantagesProps } from "./Advantages.props";
import styles from "./Advantages.module.css";
import CheckedIcon from "./Checked.svg";
import CheckedIcon2 from "./Checked2.svg";

export default function Advantages({
  advantages,
}: AdvantagesProps): JSX.Element {
  return (
    <>
      {advantages.map((a) => {
        return (
          <div key={a._id} className={styles.advantage}>
            <CheckedIcon2 />
            <div className={styles.title}>{a.title}</div>
            <hr className={styles.vLine} />
            <div>{a.description}</div>
          </div>
        );
      })}
    </>
  );
}
