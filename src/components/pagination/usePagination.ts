import { useState } from "react";

export type UsePaginationReturnType = ReturnType<typeof usePagination>;

function usePagination(params: {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
}): {
  totalItems: number;
  itemsPerPage: number;

  currentPage: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  getPaginatedData: (data: any[]) => any[];

  setItemsPerPage: (size: number) => void;
  setCurrentPage: (page: number) => void;
  updateTotalItems: (totalCount: number) => void;
} {
  const [itemsPerPage, setItemsPerPage] = useState(params.itemsPerPage || 10);
  const [currentPage, setCurrentPage] = useState(params.currentPage || 1);
  const [totalItems, setTotalItems] = useState(0);

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

  const updateTotalItems = (count: number) => {
    setTotalItems(count);
    if (currentPage > Math.ceil(count / itemsPerPage)) {
      setCurrentPage(1);
    }
  };

  return {
    totalItems,
    itemsPerPage,
    currentPage,
    totalPages,
    hasNextPage,
    hasPreviousPage,
    getPaginatedData,
    setItemsPerPage,
    setCurrentPage,
    updateTotalItems,
  };

  function getPaginatedData(data: any[]) {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data.slice(startIndex, endIndex);
  }
}

export default usePagination;
