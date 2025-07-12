import React from "react";
import * as S from "./styles";

type Props = {
  hasPrevious?: boolean;
  hasNext?: boolean;

  pageSize?: number;
  pageSizeOptions?: number[];
  currentPage?: number;
  totalPages: number;
  onPageChange?: (page: number) => void;
  onPageSizeChange: (size: number) => void;
};

function Pagination(props: Props) {
  const { hasNext, hasPrevious, currentPage, totalPages, pageSize } = props;

  return (
    <S.PaginationContainer>
      <div>
        <select
          value={pageSize}
          onChange={(e) => props.onPageSizeChange(Number(e.target.value))}
        >
          {props.pageSizeOptions?.map((size) => (
            <option key={size} value={size}>
              {size} per page
            </option>
          ))}
        </select>
      </div>

      <button
        disabled={!hasPrevious}
        className="prev"
        onClick={handlePreviousClick}
      >
        Previous
      </button>
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
      <button disabled={!hasNext} className="next" onClick={handleNextClick}>
        Next
      </button>
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
