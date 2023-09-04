import "./styles/index.css";

interface PaginationProps {
  page: number;
  total: number;
  offset: number;
  setOffset: (offset: number) => void;
  setPage: (page: number) => void;
}

function Pagination({
  page,
  total,
  offset,
  setOffset,
  setPage,
}: PaginationProps) {
  return (
    <div className="container-pagination">
      <div className="button">
        <button onClick={() => (page === 1 ? setPage(1) : setPage(page - 1))}>
          {"<"}
        </button>
        <button onClick={() => setPage(1)}> 1 </button>
        <button onClick={() => setPage(2)}> 2 </button>
        <button onClick={() => setPage(3)}> 3 </button>
        <button onClick={() => setPage(4)}> 4 </button>
        <button onClick={() => setPage(5)}> 5 </button>
        <button onClick={() => (page === 5 ? setPage(5) : setPage(page + 1))}>
          {">"}
        </button>
      </div>
    </div>
  );
}

export default Pagination;
