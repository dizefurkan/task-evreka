import ViewOptions from "./view-options";
import DisplayDataMode from "./display-data-mode";
import AddNewUserButton from "./add-new-user";
import Pagination from "./pagination";
import Filter from "./filter";
import List from "./list";

import useUserList from "./useUserList";
import { UserListContext } from "./context";

import * as S from "./styles";

export const LS_VIEW = "view";
export type UserListProps = {};

function UserList(props: UserListProps) {
  const userListValues = useUserList(props);
  const { users, displayDataMode } = userListValues;

  return (
    <UserListContext.Provider value={userListValues}>
      <S.PageSettingsContainer>
        <DisplayDataMode />
        <ViewOptions />
        <AddNewUserButton />
      </S.PageSettingsContainer>
      <Filter />
      <List />
      {!!users.length && displayDataMode === "pagination" && <Pagination />}
    </UserListContext.Provider>
  );
}

export default UserList;
