import styled from "styled-components";

export const ViewOptionsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  aling-items: center;
`;

export const ViewOptionsIcon = styled.button<{
  $active?: boolean;
}>`
  background-color: ${(props) =>
    props.$active
      ? props.theme.colors.primaryText
      : props.theme.colors.secondaryText};
  color: ${(props) => props.theme.colors.surface};

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 4px;

  border: none;

  height: 30px;
  width: 30px;

  cursor: pointer;
  margin-left: 10px;
  font-size: 24px;
  border: none;
  padding: 0;

  svg {
    width: 20px;
    height: 20px;
  }
`;

export const ViewOptionText = styled.span`
  color: ${(props) => props.theme.colors.secondaryText};
`;
