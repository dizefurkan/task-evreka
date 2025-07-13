import { useState } from "react";

export type UsePaginationReturnType = ReturnType<typeof usePagination>;

function usePagination(params: {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
}): {
  itemsPerPage: number;

  currentPage: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  getPaginatedData: (data: any[]) => any[];

  setItemsPerPage: (size: number) => void;
  setCurrentPage: (page: number) => void;
} {
  const { totalItems } = params;
  const [itemsPerPage, setItemsPerPage] = useState(params.itemsPerPage || 10);
  const [currentPage, setCurrentPage] = useState(params.currentPage || 1);

  if (totalItems < 0) {
    throw new Error("totalItems cannot be negative");
  }
  if (currentPage <= 0) {
    throw new Error("currentPage must be greater than 0");
  }
  if (itemsPerPage <= 0) {
    throw new Error("itemsPerPage must be greater than 0");
  }

  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const hasNextPage = currentPage < totalPages;
  const hasPreviousPage = currentPage > 1;

  return {
    itemsPerPage,
    currentPage,
    totalPages,
    hasNextPage,
    hasPreviousPage,
    getPaginatedData,
    setItemsPerPage,
    setCurrentPage,
  };

  function getPaginatedData(data: any[]) {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data.slice(startIndex, endIndex);
  }
}

export default usePagination;
