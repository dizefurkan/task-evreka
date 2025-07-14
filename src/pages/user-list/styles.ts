import styled from "styled-components";
import Pagination from "../../components/pagination";

export const PageSettingsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;

  @media screen and (max-width: 540px) {
    // flex-direction: column;
  }
`;

export const DisplayDataModeViewOptionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 12px;

  @media screen and (max-width: 540px) {
    justify-content: space-between;
  }
`;

export const StickyPagination = styled(Pagination)`
  position: sticky;
  bottom: 0;
  background: #fff;
  padding: 10px 0;
`;

export const UserListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 540px) {
    grid-template-columns: repeat(1, 1fr);
  }

  grid-gap: 10px;

  border-radius: 10px;
  margin: 20px auto;
`;
