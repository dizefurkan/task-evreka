import styled from "styled-components";
import Button from "../button";

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;

export const PaginationButton = styled(Button)`
  @media screen and (max-width: 540px) {
  }
`;
