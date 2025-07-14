import { useCallback, useEffect, useMemo, useState } from "react";
import { LS_DISPLAY_DATA_MODE, LS_VIEW, type UserListProps } from ".";
import usePagination from "../../components/pagination/usePagination";

import { faker } from "@faker-js/faker";

export const LS_USERS = "users";

export const Roles = {
  Admin: "Admin",
  Editor: "Editor",
  User: "User",
  Manager: "Manager",
  Guest: "Guest",
};
export const roles = ["Admin", "Editor", "User", "Manager", "Guest"] as const;
export type Role = (typeof roles)[number];

export type User = {
  index: number;
  id: string;
  name: string;
  email: string;
  role: Role;
  createdAt: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
};

export type Users = User[];

const generateFakeUsers = (count: number) => {
  const users = [];

  for (let i = 0; i < count; i++) {
    const user: User = {
      index: i + 1,
      id: faker.string.uuid(),
      name: faker.person.fullName(),
      email: faker.internet.email(),
      role: faker.helpers.arrayElement(roles) as Role,
      createdAt: faker.date.anytime().toISOString(),
      coordinates: {
        latitude: faker.location.latitude(),
        longitude: faker.location.longitude(),
      },
    };

    users.push(user);
  }

  return users;
};
export const fakeUsers = generateFakeUsers(5000);

type View = "table" | "card";
type DisplayDataMode = "pagination" | "all";

function useUserList(_: UserListProps) {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [isNewUserLSDataAdded, setNewLSUserDataAdded] = useState(0); // it's just for trigger user
  const [usersData, setUsersData] = useState<Users>([]);
  const [view, setView] = useState<View>(
    (localStorage.getItem(LS_VIEW) as View) || "table"
  );
  const [displayDataMode, setDisplayDataMode] = useState<DisplayDataMode>(
    (localStorage.getItem(LS_DISPLAY_DATA_MODE) as DisplayDataMode) ||
      "pagination"
  );

  /**
   * Call this when new LS Users Data Add
   * it is for update the list without refresh the page
   */
  const refreshUserList = () => {
    setNewLSUserDataAdded((prev) => ++prev);
  };

  const pagination = usePagination({
    totalItems: 0,
    itemsPerPage: 10,
    currentPage: 1,
  });
  const { itemsPerPage, currentPage, getPaginatedData, updateTotalItems } =
    pagination;

  const searchQuery = searchKeyword.trim().toLowerCase();
  const users = useMemo(() => {
    if (searchKeyword) {
      return usersData.filter((user) => {
        return (
          user.name.toLowerCase().includes(searchQuery) ||
          user.email.toLowerCase().includes(searchQuery) ||
          user.role.toLowerCase().includes(searchQuery)
        );
      });
    }

    return usersData;
  }, [
    usersData,
    searchKeyword,
    currentPage,
    itemsPerPage,
    displayDataMode,
    isNewUserLSDataAdded,
  ]);

  useEffect(() => {
    updateTotalItems(users.length);
  }, [users, users.length, usersData, isNewUserLSDataAdded]);

  const getSavedUsersData = useCallback(() => {
    const lsData = localStorage.getItem(LS_USERS) || "[]";
    const parsedData = JSON.parse(lsData);

    return parsedData;
  }, []);

  useEffect(() => {
    const savedUsersData = getSavedUsersData();
    const usersData = savedUsersData.concat(fakeUsers);
    setUsersData(usersData);
  }, [isNewUserLSDataAdded]);

  return {
    searchKeyword,
    setSearchKeyword,

    users: displayDataMode === "pagination" ? getPaginatedData(users) : users,
    refreshUserList,

    view,
    setView: (view: "table" | "card") => {
      setView(view);
      localStorage.setItem(LS_VIEW, view);
    },
    displayDataMode,
    setDisplayDataMode: (mode: "pagination" | "all") => {
      setDisplayDataMode(mode);
      localStorage.setItem(LS_DISPLAY_DATA_MODE, mode);
    },

    pagination,
  };
}

export default useUserList;
