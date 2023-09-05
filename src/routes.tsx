import { Routes, Route } from "react-router-dom";
import List from "./pages/List";
import UserDetails from "./pages/UserDetails";

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<List />} />
      <Route path="/details/:index/:page" element={<UserDetails />} />
    </Routes>
  );
}

export default MainRoutes;
