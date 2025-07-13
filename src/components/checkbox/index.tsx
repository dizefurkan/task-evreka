import React from "react";
import * as S from "./styles";

function Checkbox(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <S.CheckboxWrapper>
      <S.CheckboxInput type="checkbox" {...props} />
    </S.CheckboxWrapper>
  );
}

export default Checkbox;
