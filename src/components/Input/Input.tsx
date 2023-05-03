import React, { ForwardedRef, forwardRef } from "react";
import { InputProps } from "./Input.props";
import styles from "./Input.module.css";
import cn from "classnames";

const MyInput = forwardRef(function Input(
  { className, ...props }: InputProps,
  ref: ForwardedRef<HTMLInputElement>
): JSX.Element {
  return (
    <input
      className={cn(className, styles.input)}
      ref={ref}
      type="type"
      {...props}
    />
  );
});

export default MyInput;
