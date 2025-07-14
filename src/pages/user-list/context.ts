import { createContext } from "react";
import type useUserList from "./useUserList";

export const UserListContext = createContext({} as UserListContextType);

type UserListContextType = ReturnType<typeof useUserList>;
