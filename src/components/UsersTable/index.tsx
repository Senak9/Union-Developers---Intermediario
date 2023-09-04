import "./styles/index.css";

function UsersTable() {
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
        <div className="table-row">
          <p className="table-column">ID</p>
          <p className="table-column">First Name</p>
          <p className="table-column">Last Name</p>
          <p className="table-column">Title</p>
          <p className="table-column">Date</p>
          <p className="table-column">Age</p>
          <p className="table-column">Actions</p>
        </div>
        <div className="table-row">
          <p className="table-column">ID</p>
          <p className="table-column">First Name</p>
          <p className="table-column">Last Name</p>
          <p className="table-column">Title</p>
          <p className="table-column">Date</p>
          <p className="table-column">Age</p>
          <p className="table-column">Actions</p>
        </div>
      </div>
    </div>
  );
}

export default UsersTable;
