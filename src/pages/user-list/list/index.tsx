import DataTable from "../../../components/datatable";
import FaExternalLinkAlt from "../../../assets/icons/FaExternalLinkAlt";
import type { User } from "../useUserList";
import { useContext, useRef } from "react";
import { UserListContext } from "../context";
import Button from "../../../components/button";
import { useNavigate } from "react-router";
import UserCard from "../../../components/user-card";
import { UserListContainer } from "../styles";
import EmptyState from "../../../components/empty-state";

function List() {
  const userListRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const { view, users, pagination, searchKeyword, setSearchKeyword } =
    useContext(UserListContext);

  return (
    <>
      {view === "table" && (
        <DataTable<User>
          data={users}
          columns={[
            {
              label: "#",
              render: (_, index) => (
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
        <UserListContainer ref={userListRef}>
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
        </UserListContainer>
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
            <Button onClick={() => setSearchKeyword("")}>Clear Search</Button>
          )}
        </EmptyState>
      )}
    </>
  );
}

export default List;
