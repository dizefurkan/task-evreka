import React from "react";
import * as S from "./styles";

function Form(props: React.HTMLAttributes<HTMLFormElement>) {
  return (
    <form
      {...props}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      {props.children}
    </form>
  );
}

export type FormItemStatusType = "default" | "error" | "success";

const FormItem = ({
  help,
  label,
  children,
  status,
}: {
  label?: string;
  help?: string;
  status?: FormItemStatusType;
  children: React.ReactNode;
}) => {
  return (
    <S.FormItem>
      {!!label && <S.FormLabel $status={status}>{label}</S.FormLabel>}
      {children}
      {!!help && <S.FormHelpText $status={status}>{help}</S.FormHelpText>}
    </S.FormItem>
  );
};

Form.Item = FormItem;

export default Form;
