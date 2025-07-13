import styled from "styled-components";

export const CheckboxWrapper = styled.label`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.primaryText};
  cursor: pointer;
`;

export const CheckboxInput = styled.input.attrs({ type: "checkbox" })`
  appearance: none;
  width: 1rem;
  height: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 0.25rem;
  background-color: ${({ theme }) => theme.colors.surface};
  display: inline-block;
  position: relative;
  cursor: pointer;
  transition: background-color 0.2s, border-color 0.2s;

  &:checked {
    background-color: ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.primary};
  }

  &:checked::after {
    content: "";
    position: absolute;
    top: 2px;
    left: 3px;
    width: 4px;
    height: 8px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.disabledBg};
    border-color: ${({ theme }) => theme.colors.disabledBg};
    cursor: not-allowed;
  }
`;
