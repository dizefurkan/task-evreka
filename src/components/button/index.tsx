import React from "react";
import * as S from "./styles";

export type ButtonType = "primary" | "secondary" | "danger" | "link";

type ButtonProps = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
  disabled?: boolean;
  style?: React.CSSProperties;
  className?: string;
  htmlType?: "button" | "submit" | "reset";
  type?: "primary" | "secondary" | "danger" | "link";
  id?: string;
};

function Button(props: ButtonProps) {
  return (
    <S.Button
      onClick={props.onClick}
      disabled={props.disabled}
      type={props.htmlType || "button"}
      id={props.id}
      className={props.className}
      $type={props.type || "primary"}
    >
      {props.children}
    </S.Button>
  );
}

export default Button;
