import { Route, Routes } from "react-router";
import { lazy } from "react";

const UserList = lazy(() => import("./pages/user-list"));
const UserDetail = lazy(() => import("./pages/user-detail"));

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <Routes>
        <Route path="/users/:id" element={<UserDetail />} />
        <Route index path="*" element={<UserList />} />
      </Routes>
    </div>
  );
}

export default App;
