import React from "react";
import { TagProps } from "./Tag.props";
import styles from "./Tag.module.css";
import cn from "classnames";

export default function Tag({
  size = "m",
  color,
  href,
  children,
  ...props
}: TagProps): JSX.Element {
  return (
    <div
      className={cn(styles.tag, {
        [styles.s]: size === "s",
        [styles.m]: size === "m",
        [styles.red]: color === "red",
        [styles.ghost]: color === "ghost",
        [styles.grey]: color === "grey",
        [styles.accent]: color === "accent",
        [styles.green]: color === "green",
      })}
      {...props}
    >
      {href ? <a href={href}> {children}</a> : <> {children}</>}
    </div>
  );
}
