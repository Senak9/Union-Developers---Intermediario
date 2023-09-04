import SearchBar from "../../components/SearchBar";
import UsersTable from "../../components/UsersTable";
import "./styles/index.css";
import api from "../../services/api";

function List() {
  return (
    <div>
      <SearchBar />
      <UsersTable />
    </div>
  );
}

export default List;
