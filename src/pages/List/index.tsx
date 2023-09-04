import SearchBar from "../../components/SearchBar";
import UsersTable from "../../components/UsersTable";
import "./styles/index.css";
import api from "../../services/api";

function List() {
  // {
  // page: 1,
  // amount: 10
  // }
  // chamar api com react query
  // const {data} = ["todos", params]
  return (
    <div>
      <SearchBar />
      <UsersTable />
    </div>
  );
}

export default List;
