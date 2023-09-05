import "./styles/styles.css";
import api from "../../services/api";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Photo from "../../components/Photo";
import Details from "../../components/Details";

function UserDetails() {
  const params = useParams();
  const index = params.index;
  const page = params.page;

  const { data } = useQuery("getUser", () => {
    return api.get(`/?page=${params.page}&results=${index}&seed=abc`);
  });

  return (
    <div className="container-userDetails">
      <div className="header-content">
        {data && (
          <Photo
            users={data?.data.results}
            page={Number(page)}
            index={Number(index)}
          />
        )}
      </div>
      <div className="details-content">
        {data && (
          <Details
            users={data?.data.results}
            page={Number(page)}
            index={Number(index)}
          />
        )}
      </div>
    </div>
  );
}

export default UserDetails;
