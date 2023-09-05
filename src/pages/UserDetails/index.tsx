import "./styles/styles.css";
import api from "../../services/api";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

function UserDetails() {
  const params = useParams();
  const index = params.index;

  const { data } = useQuery("getUser", () => {
    return api.get(`/?page=${params.page}&results=${index}&seed=abc`);
  });

  console.log(params);
  console.log(data);
  return (
    <div className="container-userDetails">
      <div className="header-content">sss</div>
      <div></div>
      dddd
    </div>
  );
}

export default UserDetails;
