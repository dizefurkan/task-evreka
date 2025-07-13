import styled from "styled-components";
import type { ButtonType } from ".";

export const Button = styled.button<{
  $type: ButtonType;
  disabled?: boolean;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) =>
    `${theme.button.paddingY} ${theme.button.paddingX}`};
  border-radius: ${({ theme }) => theme.button.radius};
  font-weight: ${({ theme }) => theme.button.fontWeight};
  font-size: 0.875rem;
  line-height: 1.25rem;
  border: none;
  cursor: pointer;
  transition: background 0.2s ease, color 0.2s ease;
  text-decoration: none;

  ${({ $type, theme }) => {
    switch ($type) {
      case "primary":
        return `
          background-color: ${theme.colors.primary};
          color: ${theme.colors.surface};

          &:hover {
            background-color: ${theme.colors.primaryHover};
          }
        `;
      case "secondary":
        return `
          background-color: ${theme.colors.secondary};
          color: ${theme.colors.surface};

          &:hover {
            background-color: ${theme.colors.secondaryHover};
          }
        `;
      case "danger":
        return `
          background-color: ${theme.colors.danger};
          color: ${theme.colors.surface};

          &:hover {
            background-color: ${theme.colors.dangerHover};
          }
        `;
      case "link":
        return `
          background: transparent;
          color: ${theme.colors.link};
          padding: 0;
          font-weight: ${theme.button.fontWeight};
          border: none;

          &:hover {
            color: ${theme.colors.linkHover};
            text-decoration: underline;
          }
        `;
      default:
        return "";
    }
  }}

  ${({ disabled, theme }) =>
    disabled &&
    `
    background-color: ${theme.colors.disabledBg};
    color: ${theme.colors.disabledText};
    cursor: not-allowed;
    pointer-events: none;
  `}
`;
