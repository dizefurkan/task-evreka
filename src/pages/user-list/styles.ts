import styled from "styled-components";
import Pagination from "../../components/pagination";

export const PageSettingsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
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
  grid-gap: 10px;

  border-radius: 10px;
  margin: 20px auto;
`;
