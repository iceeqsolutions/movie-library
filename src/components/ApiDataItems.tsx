import { ApiDataItemsContainer } from "../styles/Styles.modules";
import {
  ApiDataProps,
  ApiDataItemProps,
} from "../interfaces/ApiDataInterfaces";
import { useEffect, useState } from "react";
import axios from "axios";

const ApiDataItems: React.FC<ApiDataProps> = ({
  apiEndpoint,
  numberOfRecords,
}) => {
  const [showData, setShowData] = useState<ApiDataItemProps[]>([]);

  useEffect(() => {
    axios
      .get(apiEndpoint)
      .then((response) => {
        setShowData(response.data.results.slice(0, numberOfRecords));
      })
      .catch((error) => {
        console.log(error);
      });
  }, [apiEndpoint, numberOfRecords]);

  return (
    <ApiDataItemsContainer>
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
