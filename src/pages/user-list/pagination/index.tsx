import { useContext } from "react";
import { StickyPagination } from "../styles";
import { UserListContext } from "../context";

const Pagination = () => {
  const {
    pagination: {
      hasNextPage,
      hasPreviousPage,
      itemsPerPage,
      currentPage,
      totalPages,

      setItemsPerPage,
      setCurrentPage,
    },
  } = useContext(UserListContext);

  return (
    <StickyPagination
      hasPrevious={hasPreviousPage}
      hasNext={hasNextPage}
      itemsPerPage={itemsPerPage}
      currentPage={currentPage}
      totalPages={totalPages}
      itemsPerPageOptions={[10, 20]}
      onItemsPerPageChange={(size) => {
        setItemsPerPage(size);
        setCurrentPage(1);
      }}
      onPageChange={(page) => {
        if (hasPreviousPage || hasNextPage) {
          setCurrentPage(page);
        }
      }}
    />
  );
};

export default Pagination;
