import { Route, Routes } from "react-router";
import { lazy } from "react";
import styled from "styled-components";

const UserList = lazy(() => import("./pages/user-list"));
const UserDetail = lazy(() => import("./pages/user-detail"));

const Wrapper = styled.div`
  height: 100%;
  padding: 0px 20px;

  @media screen and (max-width: 540px) {
    padding: 0px 10px;
  }
`;

function App() {
  return (
    <Wrapper>
      <Routes>
        <Route path="/users/:id" element={<UserDetail />} />
        <Route index path="*" element={<UserList />} />
      </Routes>
    </Wrapper>
  );
}

export default App;
