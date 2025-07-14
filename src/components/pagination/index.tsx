import React from "react";

import Button from "../button";

import * as S from "./styles";

type Props = {
  style?: React.CSSProperties;
  className?: string;

  hasPrevious?: boolean;
  hasNext?: boolean;

  itemsPerPage?: number;
  itemsPerPageOptions?: number[];
  currentPage?: number;
  totalPages: number;
  onPageChange?: (page: number) => void;
  onItemsPerPageChange: (size: number) => void;
};

function Pagination(props: Props) {
  const { hasNext, hasPrevious, currentPage, totalPages, itemsPerPage } = props;

  return (
    <S.PaginationContainer className={props.className} style={props.style}>
      <div>
        <select
          value={itemsPerPage}
          onChange={(e) => props.onItemsPerPageChange(Number(e.target.value))}
        >
          {props.itemsPerPageOptions?.map((size) => (
            <option key={size} value={size}>
              {size} per page
            </option>
          ))}
        </select>
      </div>

      <Button disabled={!hasPrevious} onClick={handlePreviousClick}>
        Previous
      </Button>
      <span className="page-info">
        Page{" "}
        <select
          value={currentPage}
          onChange={(e) => props.onPageChange?.(Number(e.target.value))}
        >
          {Array.from({ length: totalPages }, (_, index) => (
            <option key={index + 1} value={index + 1}>
              {index + 1}
            </option>
          ))}
        </select>{" "}
        of {totalPages}
      </span>
      <Button disabled={!hasNext} onClick={handleNextClick}>
        Next
      </Button>
    </S.PaginationContainer>
  );

  function handlePreviousClick() {
    if (props.currentPage && props.onPageChange) {
      props.onPageChange(props.currentPage - 1);
    }
  }

  function handleNextClick() {
    if (props.currentPage && props.onPageChange) {
      props.onPageChange(props.currentPage + 1);
    }
  }
}

export default Pagination;
