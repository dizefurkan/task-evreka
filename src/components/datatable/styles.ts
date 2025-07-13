import styled from "styled-components";

export const DataTableContainer = styled.div`
  width: 100%;
  overflow-x: auto;
  margin: 20px 0;
  border-radius: 8px;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  font-size: 14px;
`;

export const TableHeader = styled.thead`
  background-color: #f5f5f5;
  color: #333;
  font-weight: bold;
`;

export const TableHeaderCell = styled.th`
  padding: 12px;
  text-align: left;
  border-bottom: 2px solid #ddd;
  cursor: pointer;
  &:hover {
    background-color: #e0e0e0;
  }
`;

export const TableBody = styled.tbody`
  background-color: #fff;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
  &:hover {
    background-color: #f1f1f1;
  }
`;

export const TableCell = styled.td`
  padding: 12px;
  border-bottom: 1px solid #ddd;
  text-align: left;
  cursor: pointer;
  &:hover {
    background-color: #f1f1f1;
  }
`;
