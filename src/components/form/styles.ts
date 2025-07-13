import styled from "styled-components";
import type { FormItemStatusType } from ".";

export const FormItem = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;

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
  color: ${({ $status, theme }) =>
    $status === "error"
      ? theme.colors.danger
      : $status === "success"
      ? theme.colors.success
      : theme.colors.secondaryText};
  font-size: 12px;
`;
