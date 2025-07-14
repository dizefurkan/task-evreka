import styled from "styled-components";
import Pagination from "../../components/pagination";

export const PageSettingsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;

  @media screen and (max-width: 540px) {
  }
`;

export const DisplayDataModeViewOptionsWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  gap: 12px;

  @media screen and (max-width: 540px) {
    flex-direction: column;
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
  padding-top: 0;
`;
