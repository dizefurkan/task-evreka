import styled from "styled-components";
import type { FormItemStatusType } from ".";

export const FormItem = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
  padding-bottom: 16px;

  &:has(input[required]) > span:first-of-type::after,
  &:has(input[required]) > span:first-of-type::after,
  &:has(input[required]) > span:first-of-type::after {
    content: " *";
    color: ${(props) => props.theme.colors.danger};
  }
`;

export const FormLabel = styled.span<{ $status?: FormItemStatusType }>`
  color: ${({ $status, theme }) =>
    $status === "error"
      ? theme.colors.danger
      : $status === "success"
      ? theme.colors.success
      : theme.colors.primaryText};
  transition: color 0.2s ease;
`;

export const FormHelpText = styled.span<{ $status?: FormItemStatusType }>`
  position: absolute;
  top: calc(100% - 16px);
  color: ${({ $status, theme }) =>
    $status === "error"
      ? theme.colors.danger
      : $status === "success"
      ? theme.colors.success
      : theme.colors.secondaryText};
  font-size: 12px;
`;
