import React from "react";
import styles from "./ButtonIcon.module.css";
import { ButtonIconProps, icons } from "./ButtonIcon.props";
import cn from "classnames";
import ArrowIcon from "./arrow.svg";

export default function ButtonIcon({
  appearance,
  icon,
  className,
  ...props
}: ButtonIconProps): JSX.Element {
  const IconComp = icons[icon];
  return (
    <button
      className={cn(className, styles.button, {
        [styles.primary]: appearance === "primary",
        [styles.white]: appearance === "white",
      })}
      {...props}
    >
      <IconComp />
    </button>
  );
}
