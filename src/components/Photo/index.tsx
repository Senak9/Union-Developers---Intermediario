import { User } from "../../types";
import "./styles/index.css";

interface PhotoProps {
  users: User[];
  page: number;
  index: number;
}

function Photo({ users, page, index }: PhotoProps) {
  console.log("USERS", users);
  return (
    <div className="container-photo">
      <img src={users[index - 1].picture.large} alt="" />
      <h2>
        {users[index - 1]?.name?.first} {users[index - 1]?.name?.last}
      </h2>
      <h2>{users[index - 1]?.name?.title}</h2>
    </div>
  );
}

export default Photo;
