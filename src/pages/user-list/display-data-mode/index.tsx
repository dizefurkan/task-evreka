import { useContext } from "react";
import { UserListContext } from "../context";

const DisplayDataMode = () => {
  const { displayDataMode, setDisplayDataMode } = useContext(UserListContext);

  return (
    <div>
      <strong>Data Display Mode:</strong>{" "}
      <select
        value={displayDataMode}
        onChange={(e) =>
          setDisplayDataMode?.(e.target.value as "pagination" | "all")
        }
      >
        <option value="pagination" selected={displayDataMode === "pagination"}>
          Pagination
        </option>
        <option value="all" selected={displayDataMode === "all"}>
          All Data
        </option>
      </select>
    </div>
  );
};

export default DisplayDataMode;
