import React, { useRef } from "react";
import { AutoSizer, List } from "react-virtualized";
import * as S from "./styles";

export type Column<T> = {
  label: React.ReactNode;
  width?: string;
  render: (row: T, index: number) => React.ReactNode;
};

type DataTableProps<T> = {
  listHeight: number;

  data: T[];
  columns: Column<T>[];

  footer?: React.ReactNode;
  header?: React.ReactNode;

  onRowClick?: (row: T) => void;
  onColumnClick?: (column: Column<T>) => void;
};

function DataTable<T>(props: DataTableProps<T>) {
  const rowHeight = 48;

  const gridTemplateColumns = props.columns
    .map((col) => col.width || "1fr")
    .join(" ");

  const gridStyle = {
    display: "grid",
    gridTemplateColumns,
    overflow: "auto hidden",
  };

  const tableWrapperRef = useRef<HTMLDivElement>(null);

  return (
    <S.DataTableContainer ref={tableWrapperRef}>
      <S.Table>
        <S.TableHeader style={gridStyle}>
          {props.columns.map((col, i) => (
            <S.TableHeaderCell key={i}>{col.label}</S.TableHeaderCell>
          ))}
        </S.TableHeader>

        <AutoSizer disableHeight>
          {({ width }) => (
            <div>
              <List
                width={width}
                containerStyle={{ paddingBottom: "20px" }}
                height={props.data.length ? props.listHeight : 0}
                rowCount={props.data.length}
                rowHeight={rowHeight}
                rowRenderer={({ index, key, style }) => {
                  const row = props.data[index];
                  return (
                    <S.TableRow
                      key={key}
                      style={{ ...style, ...gridStyle }}
                      onClick={() => props.onRowClick && props.onRowClick(row)}
                    >
                      {props.columns.map((column, colIndex) => (
                        <S.TableCell
                          key={colIndex}
                          onClick={() =>
                            props.onColumnClick && props.onColumnClick(column)
                          }
                        >
                          {column.render(row, index)}
                        </S.TableCell>
                      ))}
                    </S.TableRow>
                  );
                }}
              />
            </div>
          )}
        </AutoSizer>

        {props.footer && <tfoot>{props.footer}</tfoot>}
      </S.Table>
    </S.DataTableContainer>
  );
}
export default DataTable;
