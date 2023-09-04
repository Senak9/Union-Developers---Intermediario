import { User } from "../../types";
import "./styles/index.css";

interface UsersTableProps {
  users: User[];
}

function UsersTable({ users }: UsersTableProps) {
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
              <p className="table-column">{user.dob.date}</p>
              <p className="table-column">{user.dob.age}</p>
              <p className="table-column">Actions</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default UsersTable;
