import { useContext } from "react";
import { UserListContext } from "../context";
import { Label, Wrapper } from "./styles";

const DisplayDataMode = () => {
  const { displayDataMode, setDisplayDataMode } = useContext(UserListContext);

  return (
    <Wrapper>
      <Label>Display</Label>{" "}
      <select
        value={displayDataMode}
        onChange={(e) =>
          setDisplayDataMode?.(e.target.value as "pagination" | "all")
        }
      >
        <option value="pagination">Pagination</option>
        <option value="all">All Data</option>
      </select>
    </Wrapper>
  );
};

export default DisplayDataMode;
