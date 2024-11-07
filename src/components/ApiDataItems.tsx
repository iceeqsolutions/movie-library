import { ApiDataItemsContainer } from "../styles/Styles.modules";
import {
  ApiDataProps,
  ApiDataItemProps,
} from "../interfaces/ApiDataInterfaces";
import { useEffect, useState } from "react";
import axios from "axios";
import { CircularProgress } from "@mui/material";

const ApiDataItems: React.FC<ApiDataProps> = ({
  apiEndpoint,
  numberOfRecords,
}) => {
  const [showData, setShowData] = useState<ApiDataItemProps[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!apiEndpoint) {
      console.error("API endpoint is undefined");
      return;
    }
    axios
      .get(apiEndpoint)
      .then((response) => {
        setShowData(response.data.results.slice(0, numberOfRecords));
      })

      .catch((error) => {
        console.log(error);
      });
    setTimeout(() => {
      setLoading(true);
    }, 1000);
  }, [apiEndpoint, numberOfRecords]);

  return (
    <ApiDataItemsContainer>
      {!loading && (
        <div className="loadingCircle">
          <CircularProgress size={50} color="warning" />
          <p>Loading...</p>
        </div>
      )}
      <div className="recordCard">
        {showData.map((item) => {
          return (
            <div key={item.id} className="recordCardItem">
              <img
                src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                alt={item.title}
              />
              <h2>{item.title}</h2>
              <p>{item.overview}</p>
              <p>{item.release_date}</p>
              <p>{item.vote_average}</p>
              <p>{item.vote_count}</p>
            </div>
          );
        })}
      </div>
    </ApiDataItemsContainer>
  );
};

export default ApiDataItems;
