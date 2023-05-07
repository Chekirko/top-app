import React, { ForwardedRef, forwardRef } from "react";
import { TextareaProps } from "./Textarea.props";
import styles from "./Textarea.module.css";
import cn from "classnames";

const MyTextarea = forwardRef(function Textarea(
  { className, error, ...props }: TextareaProps,
  ref: ForwardedRef<HTMLTextAreaElement>
): JSX.Element {
  return (
    <div className={cn(className, styles.textareaWrapper)}>
      <textarea
        ref={ref}
        className={cn(styles.textarea, {
          [styles.error]: error,
        })}
        {...props}
      />
      {error && <span className={styles.errorMessage}>{error.message}</span>}
    </div>
  );
});

export default MyTextarea;
