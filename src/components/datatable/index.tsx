import React from "react";
import * as S from "./styles";

type Column<T> = {
  label: React.ReactNode;
  width?: string;
  render: (row: T, index: number) => React.ReactNode;
};

type Props<T> = {
  data: T[];
  columns: Column<T>[];

  footer?: React.ReactNode;
  header?: React.ReactNode;

  onRowClick?: (row: T) => void;
  onColumnClick?: (column: Column<T>) => void;
};

function DataTable<T>(props: Props<T>) {
  const gridTemplateColumns = props.columns
    .map((col) => col.width || "1fr")
    .join(" ");

  const gridStyle = {
    display: "grid",
    gridTemplateColumns,
  };

  return (
    <S.DataTableContainer>
      <S.Table>
        <S.TableHeader style={gridStyle}>
          {props.columns.map((col, i) => (
            <S.TableHeaderCell key={i}>{col.label}</S.TableHeaderCell>
          ))}
        </S.TableHeader>
        <S.TableBody>
          {props.data.map((row, rowIndex) => (
            <S.TableRow
              key={rowIndex}
              style={gridStyle}
              onClick={() => props.onRowClick && props.onRowClick(row)}
            >
              {props.columns.map((column, colIndex) => (
                <S.TableCell
                  key={colIndex}
                  onClick={() =>
                    props.onColumnClick && props.onColumnClick(column)
                  }
                >
                  {column.render(row, rowIndex)}
                </S.TableCell>
              ))}
            </S.TableRow>
          ))}
        </S.TableBody>
        {props.footer && <tfoot>{props.footer}</tfoot>}
      </S.Table>
    </S.DataTableContainer>
  );
}

export default DataTable;
