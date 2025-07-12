import React, { useMemo, useState } from "react";
import { faker } from "@faker-js/faker";
import styled from "styled-components";
import Pagination from "../../components/pagination";
import usePagination from "../../components/pagination/usePagination";

const UserListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;

  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 10px;
  margin: 20px auto;
`;

const User = styled.div`
  padding: 10px;
  border: 1px solid #ccc;
  margin: 5px 0;
  border-radius: 5px;
  background-color: #f9f9f9;
`;

const roles = ["Admin", "Editor", "User", "Manager", "Guest"];

// Belirli sayıda sahte kullanıcı oluştur
const generateFakeUsers = (count: number) => {
  const users = [];

  for (let i = 0; i < count; i++) {
    const user = {
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

function UserList() {
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const { totalPages, hasNextPage, hasPreviousPage, getPaginatedData } =
    usePagination({
      totalItems: fakeUsers.length,
      itemsPerPage: pageSize,
      currentPage,
    });

  const paginatedUsers = useMemo(
    () => getPaginatedData(fakeUsers),
    [currentPage, pageSize]
  );

  return (
    <div>
      <UserListContainer>
        {paginatedUsers.map((user) => (
          <User key={user.id}>
            <div>{user.name}</div>
            <div>{user.email}</div>
            <div>{user.role}</div>
            <div>{user.createdAt}</div>
          </User>
        ))}
      </UserListContainer>
      <Pagination
        hasPrevious={hasPreviousPage}
        hasNext={hasNextPage}
        pageSize={pageSize}
        currentPage={currentPage}
        totalPages={totalPages}
        pageSizeOptions={[10, 20]}
        onPageSizeChange={(size) => {
          setPageSize(size);
          setCurrentPage(1); // Sayfa boyutu değiştiğinde sayfayı
        }}
        onPageChange={(page) => {
          if (hasPreviousPage || hasNextPage) {
            setCurrentPage(page);
          }
        }}
      />
    </div>
  );
}

export default UserList;
