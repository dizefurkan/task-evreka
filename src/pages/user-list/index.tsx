import { useRef } from "react";

import DataTable from "../../components/datatable";

import ViewOptions from "./view-options";
import DisplayDataMode from "./display-data-mode";
import AddNewUserButton from "./add-new-user";
import Pagination from "./pagination";

import * as S from "./styles";
import useUserList from "./useUserList";
import { UserListContext } from "./context";
import Filter from "./filter";
import EmptyState from "../../components/empty-state";
import Button from "../../components/button";

export type UserListProps = {};

function UserList(props: UserListProps) {
  const userListRef = useRef<HTMLDivElement>(null);

  const userListValues = useUserList(props);
  const { view, users, displayDataMode, searchKeyword, setSearchKeyword } =
    userListValues;

  return (
    <UserListContext.Provider value={userListValues}>
      <S.PageSettingsContainer>
        <DisplayDataMode />
        <ViewOptions />
        <AddNewUserButton />
      </S.PageSettingsContainer>
      <Filter />

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

      {view === "table" && (
        <DataTable
          data={users}
          columns={["index", "name", "email", "role", "createdAt"]}
        />
      )}
      {view === "card" && (
        <S.UserListContainer ref={userListRef}>
          {users.map((user) => (
            <S.User key={user.id}>
              <div>{user.name}</div>
              <div>{user.email}</div>
              <div>{user.role}</div>
              <div>{user.createdAt}</div>
              <button>go to detail</button>
            </S.User>
          ))}
        </S.UserListContainer>
      )}
      {!!users.length && displayDataMode === "pagination" && <Pagination />}
    </UserListContext.Provider>
  );
}

export default UserList;
