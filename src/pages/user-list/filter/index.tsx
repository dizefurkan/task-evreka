import { useContext, useEffect } from "react";
import { useSearchParams } from "react-router";

import Input from "../../../components/input";
import Form from "../../../components/form";

import { UserListContext } from "../context";

import * as S from "./styles";

function Filter() {
  const [searchParams, setSearchParams] = useSearchParams(undefined);

  const { searchKeyword, setSearchKeyword, pagination } =
    useContext(UserListContext);

  useEffect(() => {
    setSearchKeyword(searchParams.get("search") || "");
  }, []);

  return (
    <S.FilterWrapper>
      <Form.Item
        help={
          pagination.totalItems > 0
            ? `${pagination.totalItems} data ${
                searchKeyword ? "found" : "listed"
              }`
            : undefined
        }
      >
        <Input
          type="search"
          placeholder="Search for Name, email, role"
          value={searchKeyword}
          onChange={(e) => {
            setSearchParams((searchParams) => {
              searchParams.set("search", e.target.value);
              return searchParams;
            });
            setSearchKeyword(e.target.value);
          }}
        />
      </Form.Item>
    </S.FilterWrapper>
  );
}

export default Filter;
