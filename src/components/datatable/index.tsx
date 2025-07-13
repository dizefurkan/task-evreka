import React from "react";
import * as S from "./styles";

type Props = {
  data: any[];
  columns: string[];

  footer?: React.ReactNode;
  header?: React.ReactNode;

  onRowClick?: (row: any) => void;
  onColumnClick?: (column: string) => void;
  rowClassName?: string;
  columnClassName?: string;
};

function DataTable(props: Props) {
  return (
    <S.DataTableContainer>
      <S.Table>
        {props.header && <S.TableHeader>{props.header}</S.TableHeader>}
        <S.TableBody>
          {props.data.map((row, rowIndex) => (
            <S.TableRow
              key={rowIndex}
              className={props.rowClassName}
              onClick={() => props.onRowClick && props.onRowClick(row)}
            >
              {props.columns.map((column, colIndex) => (
                <S.TableCell
                  key={colIndex}
                  className={props.columnClassName}
                  onClick={() =>
                    props.onColumnClick && props.onColumnClick(column)
                  }
                >
                  {row[column]}
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
