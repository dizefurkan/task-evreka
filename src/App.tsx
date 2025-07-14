import { Route, Routes } from "react-router";
import UserList from "./pages/user-list";
import UserDetail from "./pages/user-detail";

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
