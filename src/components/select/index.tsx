import React from "react";
import * as S from "./styles";

type Props = React.SelectHTMLAttributes<HTMLSelectElement>;

function Select(props: Props) {
  return <S.Select {...props} />;
}

export default Select;
