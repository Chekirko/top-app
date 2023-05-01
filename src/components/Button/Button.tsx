import React from "react";
import styles from "./Button.module.css";
import { ButtonProps } from "./Button.props";
import cn from "classnames";
import ArrowIcon from "./arrow.svg";

export default function Button({
  appearance,
  arrow = "none",
  children,
  className,
  ...props
}: ButtonProps): JSX.Element {
  return (
    <button
      className={cn(className, styles.button, {
        [styles.primary]: appearance === "primary",
        [styles.ghost]: appearance === "ghost",
      })}
      {...props}
    >
      {children}
      {arrow !== "none" && (
        <span
          className={cn(styles.arrow, {
            [styles.down]: arrow === "down",
          })}
        >
          <ArrowIcon />
        </span>
      )}
    </button>
  );
}
