import styled from "styled-components";
import type { FormItemStatusType } from "../form";

export const Input = styled.input<{
  $status?: FormItemStatusType;
}>`
  width: 100%;
  box-sizing: border-box;
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  border-radius: ${({ theme }) => theme.button.radius};
  border: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.surface};
  color: ${({ $status, theme }) =>
    $status === "error"
      ? theme.colors.danger
      : $status === "success"
      ? theme.colors.success
      : theme.colors.primaryText};

  &::placeholder {
    color: ${({ $status, theme }) =>
      $status === "error"
        ? theme.colors.danger
        : $status === "success"
        ? theme.colors.success
        : theme.colors.secondaryText};
  }
  transition: color 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme, $status }) =>
      $status === "error"
        ? theme.colors.danger
        : $status === "success"
        ? theme.colors.success
        : theme.colors.primary};
    box-shadow: 0 0 0 2px
      ${({ theme, $status }) => {
        const color =
          $status === "error"
            ? theme.colors.danger
            : $status === "success"
            ? theme.colors.success
            : theme.colors.primary;
        return `${color}33`; // 20% opacity
      }};
  }

  ${({ $status, theme }) =>
    $status === "error" &&
    `
      border-color: ${theme.colors.danger};
    `}

  ${({ $status, theme }) =>
    $status === "success" &&
    `
      border-color: ${theme.colors.success};
    `}

  &:disabled {
    background-color: ${({ theme }) => theme.colors.disabledBg};
    color: ${({ theme }) => theme.colors.disabledText};
    cursor: not-allowed;
  }
`;
