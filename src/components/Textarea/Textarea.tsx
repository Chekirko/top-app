import React, { ForwardedRef, forwardRef } from "react";
import { TextareaProps } from "./Textarea.props";
import styles from "./Textarea.module.css";
import cn from "classnames";

const MyTextarea = forwardRef(function Textarea(
  { className, ...props }: TextareaProps,
  ref: ForwardedRef<HTMLTextAreaElement>
): JSX.Element {
  return (
    <textarea ref={ref} className={cn(className, styles.textarea)} {...props} />
  );
});

export default MyTextarea;
