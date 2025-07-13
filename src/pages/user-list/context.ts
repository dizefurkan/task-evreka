import { createContext } from "react";
import type { UsePaginationReturnType } from "../../components/pagination/usePagination";

export const UserListContext = createContext({} as UserListContextType);

type UserListContextType = {
  displayDataMode?: "pagination" | "all";
  setDisplayDataMode?: React.Dispatch<
    React.SetStateAction<"pagination" | "all">
  >;

  view: "table" | "card";
  setView: React.Dispatch<React.SetStateAction<"table" | "card">>;

  pagination: UsePaginationReturnType;
};
