import { useRef } from "react";
import { useNavigate } from "react-router";

import ViewOptions from "./view-options";
import DisplayDataMode from "./display-data-mode";
import AddNewUserButton from "./add-new-user";
import Pagination from "./pagination";
import Filter from "./filter";

import DataTable from "../../components/datatable";
import EmptyState from "../../components/empty-state";
import Button from "../../components/button";
import UserCard from "../../components/user-card";

import FaExternalLinkAlt from "../../assets/icons/FaExternalLinkAlt";

import useUserList, { type User } from "./useUserList";
import { UserListContext } from "./context";
import * as S from "./styles";

export const LS_VIEW = "view";
export type UserListProps = {};

function UserList(props: UserListProps) {
  const navigate = useNavigate();
  const userListRef = useRef<HTMLDivElement>(null);
  const userListValues = useUserList(props);
  const {
    view,
    users,
    displayDataMode,
    searchKeyword,
    setSearchKeyword,
    pagination,
  } = userListValues;

  return (
    <UserListContext.Provider value={userListValues}>
      <S.PageSettingsContainer>
        <DisplayDataMode />
        <ViewOptions />
        <AddNewUserButton />
      </S.PageSettingsContainer>
      <Filter />
      {view === "table" && (
        <DataTable<User>
          data={users}
          columns={[
            {
              label: "#",
              render: (row, index) => (
                <span>
                  {1 +
                    index +
                    (pagination.currentPage - 1) * pagination.itemsPerPage}
                </span>
              ),
              width: "70px",
            },
            {
              label: "Name",
              render: (row) => <strong>{row.name}</strong>,
            },
            {
              label: "Email",
              render: (row) => <a>{row.email}</a>,
            },
            {
              label: "Role",
              render: (row) => <span className="capitalize">{row.role}</span>,
              width: "100px",
            },
            {
              label: "Created",
              render: (row) => (
                <span>{new Date(row.createdAt).toLocaleDateString()}</span>
              ),
              width: "120px",
            },
            {
              label: "",
              width: "80px",
              render: (row) => (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    marginRight: "12px",
                  }}
                >
                  <Button
                    type="link"
                    style={{ width: "100px", fontSize: "16px" }}
                    onClick={() => {
                      navigate(`/users/${row.id}`);
                    }}
                  >
                    <span style={{ width: "14px" }}>
                      <FaExternalLinkAlt />
                    </span>
                  </Button>
                </div>
              ),
            },
          ]}
        />
      )}
      {view === "card" && (
        <S.UserListContainer ref={userListRef}>
          {users.map((user) => (
            <UserCard
              tabIndex={0}
              key={user.id}
              style={{ width: "100%" }}
              user={user}
              onClick={() => {
                navigate(`/users/${user.id}`);
              }}
            />
          ))}
        </S.UserListContainer>
      )}
      {!users.length && (
        <EmptyState
          title={searchKeyword ? "No results found" : "No data available"}
          description={
            searchKeyword
              ? "Try adjusting your filters or searching with different keywords."
              : "There’s currently no data to display."
          }
          icon={searchKeyword ? "🔍" : "📄"}
        >
          {!!searchKeyword && (
            <Button
              onClick={() => {
                setSearchKeyword("");
              }}
            >
              Clear Search
            </Button>
          )}
        </EmptyState>
      )}

      {!!users.length && displayDataMode === "pagination" && <Pagination />}
    </UserListContext.Provider>
  );
}

export default UserList;
