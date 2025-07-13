import { useMemo, useState } from "react";
import type { UserListProps } from ".";
import usePagination from "../../components/pagination/usePagination";

import { faker } from "@faker-js/faker";

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
      createdAt: faker.date.past().toISOString().split("T")[0], // YYYY-MM-DD formatında
    };

    users.push(user);
  }

  return users;
};
const fakeUsers = generateFakeUsers(5000);

function useUserList(props: UserListProps) {
  const [view, setView] = useState<"table" | "card">("card");
  const [displayDataMode, setDisplayDataMode] = useState<"pagination" | "all">(
    "pagination"
  );

  const pagination = usePagination({
    totalItems: fakeUsers.length,
    itemsPerPage: 10,
    currentPage: 1,
  });

  const { itemsPerPage: pageSize, currentPage, getPaginatedData } = pagination;

  const users = useMemo(
    () =>
      displayDataMode === "pagination"
        ? getPaginatedData(fakeUsers)
        : fakeUsers,
    [currentPage, pageSize, displayDataMode]
  );

  return {
    users,

    view,
    setView,
    displayDataMode,
    setDisplayDataMode,

    pagination,
  };
}

export default useUserList;
