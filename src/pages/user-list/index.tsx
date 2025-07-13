import { useRef } from "react";

import DataTable from "../../components/datatable";

import ViewOptions from "./view-options";
import DisplayDataMode from "./display-data-mode";
import AddNewUserButton from "./add-new-user";
import Pagination from "./pagination";

import * as S from "./styles";
import useUserList from "./useUserList";
import { UserListContext } from "./context";

export type UserListProps = {};

function UserList(props: UserListProps) {
  const userListRef = useRef<HTMLDivElement>(null);

  const userListValues = useUserList(props);
  const { view, users, displayDataMode } = userListValues;

  return (
    <UserListContext.Provider value={userListValues}>
      <S.PageSettingsContainer>
        <DisplayDataMode />
        <ViewOptions />
        <AddNewUserButton />
      </S.PageSettingsContainer>

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
      {displayDataMode === "pagination" && <Pagination />}
    </UserListContext.Provider>
  );
}

export default UserList;
