import { useCallback, useEffect, useState } from "react";
import type { UserListProps } from ".";
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
};

export type Users = User[];

const generateFakeUsers = (count: number) => {
  const users = [];

  for (let i = 0; i < count; i++) {
    const user = {
      index: i + 1,
      id: faker.string.uuid(),
      name: faker.person.fullName(),
      email: faker.internet.email(),
      role: faker.helpers.arrayElement(roles),
      createdAt: faker.date.anytime().toISOString(),
    };

    users.push(user);
  }

  return users;
};
const fakeUsers = generateFakeUsers(5000);

function useUserList(props: UserListProps) {
  const [isNewUserLSDataAdded, setNewLSUserDataAdded] = useState(0); // it is just for trigger user
  const [users, setUsers] = useState<Users>([]);
  const [view, setView] = useState<"table" | "card">("card");
  const [displayDataMode, setDisplayDataMode] = useState<"pagination" | "all">(
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
    totalItems: fakeUsers.length,
    itemsPerPage: 10,
    currentPage: 1,
  });

  const { itemsPerPage: pageSize, currentPage, getPaginatedData } = pagination;

  const getSavedUsersData = useCallback(() => {
    const lsData = localStorage.getItem(LS_USERS) || "[]";
    const parsedData = JSON.parse(lsData);

    return parsedData;
  }, []);

  useEffect(() => {
    const savedUsersData = getSavedUsersData();
    const usersData = savedUsersData.concat(fakeUsers);

    setUsers(
      displayDataMode === "pagination" ? getPaginatedData(usersData) : usersData
    );
  }, [currentPage, pageSize, displayDataMode, isNewUserLSDataAdded]);

  return {
    users,
    refreshUserList,

    view,
    setView,
    displayDataMode,
    setDisplayDataMode,

    pagination,
  };
}

export default useUserList;
