import styles from "./Button.module.css";
import type { ButtonHTMLAttributes, FC, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
  isLoading?: boolean;
  children: ReactNode;
};

export const Button: FC<ButtonProps> = ({
  type = "button",
  variant = "primary",
  isLoading = false,
  disabled,
  children,
  ...rest
}) => {
  const isDisabled = disabled || isLoading;

  return (
    <button
      type={type}
      disabled={isDisabled}
      className={`${styles.btn} ${styles[variant]}`}
      {...rest}
    >
      {children}
    </button>
  );
};
