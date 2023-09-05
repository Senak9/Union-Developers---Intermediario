import { useNavigate } from "react-router-dom";
import { User } from "../../types";
import "./styles/index.css";
import { format } from "date-fns";

interface UsersTableProps {
  users: User[];
}

export function formatToDate(date: string) {
  const generatedDate = new Date(date);

  return format(generatedDate, "dd/MM/yyyy");
}

function UsersTable({ users }: UsersTableProps) {
  const navigate = useNavigate();
  return (
    <div className="container-table">
      <div className="table-head">
        <h3 className="table-column">ID</h3>
        <h3 className="table-column">First Name</h3>
        <h3 className="table-column">Last Name</h3>
        <h3 className="table-column">Title</h3>
        <h3 className="table-column">Date</h3>
        <h3 className="table-column">Age</h3>
        <h3 className="table-column">Actions</h3>
      </div>
      <div className="table-body">
        {users.map((user: User) => {
          return (
            <div className="table-row">
              <p className="table-column">{user.id.name}</p>
              <p className="table-column">{user.name.first}</p>
              <p className="table-column">{user.name.last}</p>
              <p className="table-column">{user.name.title}</p>
              <p className="table-column">{formatToDate(user.dob.date)}</p>
              <p className="table-column">{user.dob.age}</p>
              <p
                className="table-column purple"
                onClick={() => navigate("/details")}
              >
                View profile
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default UsersTable;
