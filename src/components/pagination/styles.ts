import styled from "styled-components";
import Button from "../button";

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  margin: 20px 0;
`;

export const PaginationButton = styled(Button)`
  @media screen and (max-width: 540px) {
  }
`;
