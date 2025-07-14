import DataTable, { type Column } from "../../../components/datatable";
import FaExternalLinkAlt from "../../../assets/icons/FaExternalLinkAlt";
import type { User } from "../useUserList";
import { useCallback, useContext, useMemo, useRef } from "react";
import { UserListContext } from "../context";
import Button from "../../../components/button";
import { useNavigate } from "react-router";
import UserCard from "../../../components/user-card";
import { UserListContainer } from "../styles";
import EmptyState from "../../../components/empty-state";
import {
  AutoSizer,
  CellMeasurer,
  CellMeasurerCache,
  Grid,
} from "react-virtualized";
import useList from "./useList";

function ListPage() {
  const userListRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const { wrapperRef, listHeight } = useList();
  const { view, users, pagination, searchKeyword, setSearchKeyword } =
    useContext(UserListContext);

  const cacheRef = useRef(
    new CellMeasurerCache({
      fixedWidth: true,
      defaultHeight: 200,
    })
  );

  const getColumnCount = useCallback((containerWidth: number) => {
    if (containerWidth < 540) return 1;
    if (containerWidth < 768) return 2;
    return 3;
  }, []);

  const columns: Column<User>[] = useMemo(
    () => [
      {
        label: "#",
        render: (_, index) => (
          <span>
            {1 + index + (pagination.currentPage - 1) * pagination.itemsPerPage}
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
    ],
    []
  );

  return (
    <div ref={wrapperRef}>
      {view === "table" && (
        <DataTable<User>
          data={users}
          listHeight={listHeight}
          columns={columns}
        />
      )}
      {view === "card" && (
        <UserListContainer
          ref={userListRef}
          style={{ height: users.length ? listHeight + "px" : 0 }}
        >
          <AutoSizer>
            {({ width, height }) => {
              const columnCount = getColumnCount(width);
              const columnWidth = Math.floor(width / columnCount);
              const rowCount = Math.ceil(users.length / columnCount);

              return (
                <Grid
                  width={width}
                  height={height}
                  containerStyle={{ paddingBottom: "20px" }}
                  columnCount={columnCount}
                  columnWidth={columnWidth}
                  rowCount={rowCount}
                  rowHeight={cacheRef.current.rowHeight}
                  deferredMeasurementCache={cacheRef.current}
                  cellRenderer={(params) => {
                    const { columnIndex, rowIndex, key, style, parent } =
                      params;
                    const index = rowIndex * columnCount + columnIndex;
                    const user = users[index];
                    if (!user) return null;

                    return (
                      <CellMeasurer
                        cache={cacheRef.current}
                        columnIndex={columnIndex}
                        rowIndex={rowIndex}
                        parent={parent}
                        key={key}
                      >
                        {({ registerChild }) => (
                          <div
                            ref={registerChild}
                            style={{
                              ...style,
                              padding: 8,
                              boxSizing: "border-box",
                            }}
                          >
                            <UserCard
                              user={user}
                              onClick={() => navigate(`/users/${user.id}`)}
                              style={{ width: "100%" }}
                            />
                          </div>
                        )}
                      </CellMeasurer>
                    );
                  }}
                />
              );
            }}
          </AutoSizer>
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
    </div>
  );
}

export default ListPage;
