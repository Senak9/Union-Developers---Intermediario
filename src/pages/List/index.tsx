import SearchBar from "../../components/SearchBar";
import UsersTable from "../../components/UsersTable";
import "./styles/index.css";
import api from "../../services/api";
import { useQuery } from "react-query";
import { useState } from "react";

function List() {
  const [page, setPage] = useState<number>(1);

  const { data } = useQuery(["getUsers", page], () => {
    return api.get(`/?page=${page}&results=10`);
  });
  console.log("olha aqui,", data?.data);
  return (
    <div>
      <SearchBar />
      <UsersTable users={data?.data.results} />
    </div>
  );
}

export default List;
