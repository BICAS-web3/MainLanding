import { FC } from "react";

import clsx from "clsx";

import s from "./styles.module.scss";

interface ButtonProps {
  children: any;
  className?: string;
  disabled?: boolean;
  isDisabled?: boolean;
  isGray?: boolean;
  onClick?: () => void;
}

export const Button: FC<ButtonProps> = (props) => {
  const { children, className, disabled, isGray, onClick, isDisabled } = props;

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        s.button,
        isGray && s.button_gray,
        className,
        isDisabled && s.disabled_btn
      )}
    >
      {isGray ? (
        <div className={s.hover_el_gray}></div>
      ) : (
        <div className={s.hover_el_light}></div>
      )}
      {children}
    </button>
  );
};
