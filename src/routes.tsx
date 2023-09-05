import { Routes, Route } from "react-router-dom";
import List from "./pages/List";
import UserDetails from "./components/UserDetails";

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<List />} />
      <Route path="/details" element={<UserDetails />} />
    </Routes>
  );
}

export default MainRoutes;
