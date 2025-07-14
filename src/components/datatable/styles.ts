import styled from "styled-components";

export const DataTableContainer = styled.div`
  width: 100%;
  overflow-x: auto;
  margin: 20px 0;
  border-radius: 8px;
`;

export const Table = styled.div`
  width: 100%;
  border-collapse: collapse;

  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  font-size: 14px;
`;

export const TableHeader = styled.div``;

export const TableHeaderCell = styled.div`
  padding: 12px;
  text-align: left;
  border-bottom: 2px solid #ddd;
  cursor: pointer;
  &:hover {
    background-color: #e0e0e0;
  }
`;

export const TableBody = styled.div`
  background-color: #fff;
`;

export const TableRow = styled.div`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
  &:hover {
    background-color: #f1f1f1;
  }
`;

export const TableCell = styled.div`
  padding: 12px 8px;
  border-bottom: 1px solid #ddd;
  text-align: left;
  cursor: pointer;
  &:hover {
    background-color: #f1f1f1;
  }
`;
