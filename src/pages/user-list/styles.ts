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

export const User = styled.div`
  & > * {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  & > *:hover {
    overflow: visible;
    text-overflow: unset;
    white-space: normal;
  }

  overflow: hidden;
  padding: 10px;
  border: 1px solid #ccc;
  margin: 5px 0;
  border-radius: 5px;
  background-color: #f9f9f9;
`;
