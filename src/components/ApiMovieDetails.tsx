import { ApiDataItemsContainer } from "../styles/Styles.modules";
import {
  ApiMovieItemProps,
  ApiDataProps,
} from "../interfaces/ApiMovieDetailsInterfaces";
import { useEffect, useState } from "react";
import axios from "axios";

/*
Poster path - https://image.tmdb.org/t/p/w500${item.poster_path}
Backdrop path - https://image.tmdb.org/t/p/w500${item.backdrop_path} 
IMDB link - https://www.imdb.com/title/${item.imdb_id}/

*/

const ApiMovieDetails: React.FC<ApiDataProps> = ({ apiEndpoint }) => {
  const [showData, setShowData] = useState<ApiMovieItemProps | null>(null);

  useEffect(() => {
    if (!apiEndpoint) {
      console.error("API endpoint is undefined");
      return;
    }
    axios
      .get(`${apiEndpoint}`)
      .then((response) => {
        // console.log(response.data);
        setShowData(response.data);
      })

      .catch((error) => {
        console.log(error);
      });
    if (!apiEndpoint) {
      console.error("API endpoint is undefined");
      return;
    }
  }, [apiEndpoint]);

  if (!showData) {
    return (
      <ApiDataItemsContainer>
        <p>No data available...</p>
      </ApiDataItemsContainer>
    );
  }

  return (
    <ApiDataItemsContainer>
      <div className="mainContainer">
        <div className="section">
          <h2>{showData.title}</h2>
        </div>
      </div>
    </ApiDataItemsContainer>
  );
};

export default ApiMovieDetails;
