import React, { ForwardedRef, forwardRef } from "react";
import { InputProps } from "./Input.props";
import styles from "./Input.module.css";
import cn from "classnames";

const MyInput = forwardRef(function Input(
  { className, error, ...props }: InputProps,
  ref: ForwardedRef<HTMLInputElement>
): JSX.Element {
  return (
    <div className={cn(className, styles.inputWrapper)}>
      <input
        className={cn(styles.input, {
          [styles.error]: error,
        })}
        ref={ref}
        type="type"
        {...props}
      />
      {error && <span className={styles.errorMessage}>{error.message}</span>}
    </div>
  );
});

export default MyInput;
