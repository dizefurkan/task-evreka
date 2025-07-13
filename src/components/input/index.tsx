import React from "react";
import * as S from "./styles";
import type { FormItemStatusType } from "../form";

type Props = {
  status?: FormItemStatusType;
} & React.InputHTMLAttributes<HTMLInputElement>;

function Input(props: Props) {
  return <S.Input $status={props.status || "default"} {...props} />;
}

export default Input;
