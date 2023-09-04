import SearchBar from "../../components/SearchBar";
import UsersTable from "../../components/UsersTable";
import "./styles/index.css";
import api from "../../services/api";
import { useQuery } from "react-query";
import { useState } from "react";
import Pagination from "../../components/Pagination";

function List() {
  const [page, setPage] = useState<number>(1);

  const { data } = useQuery(["getUsers", page], () => {
    return api.get(`/?page=${page}&results=10&seed=abc`);
  });

  const [offset, setOffset] = useState<number>(0);

  console.log("olha aqui,", data?.data);
  return (
    <div className="container-list">
      <SearchBar />
      {data && <UsersTable users={data?.data.results} />}
      <Pagination
        page={page}
        total={120}
        offset={offset}
        setOffset={setOffset}
        setPage={setPage}
      />
    </div>
  );
}

export default List;
