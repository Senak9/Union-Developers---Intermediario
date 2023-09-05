import { User } from "../../types";
import InfoBoxDetalis from "../InfoBoxDetalis";
import LocationBoxDetalis from "../LocationBoxDetalis";
import LoginBoxDetalis from "../LoginBoxDetalis";
import "./styles/index.css";

interface PhotoProps {
  users: User[];
  page: number;
  index: number;
}

function Details({ users, page, index }: PhotoProps) {
  console.log("USERS", users);

  const status: string = "noative";

  return (
    <div className="container-detalis">
      <div className="header-detalis">
        <InfoBoxDetalis
          users={users}
          page={page}
          index={index}
          status={status}
        />
        <LocationBoxDetalis
          users={users}
          page={page}
          index={index}
          status={status}
        />
        <LoginBoxDetalis
          users={users}
          page={page}
          index={index}
          status={status}
        />
      </div>
      <div className="body-detalis">
        <img src={users[index - 1].picture.large} alt="" />
        <h2>
          {users[index - 1]?.name?.first} {users[index - 1]?.name?.last}
        </h2>
        <h2 className="title-photo">{users[index - 1]?.name?.title}</h2>
      </div>
    </div>
  );
}

export default Details;
