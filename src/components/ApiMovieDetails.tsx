import { MovieDetailsContainer } from "../styles/Styles.modules";
import {
  ApiMovieItemProps,
  ApiDataProps,
} from "../interfaces/ApiMovieDetailsInterfaces";
import { useEffect, useState } from "react";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";

/*
Poster path - https://image.tmdb.org/t/p/w500${showData.poster_path}
Backdrop path - https://image.tmdb.org/t/p/w500${showData.backdrop_path} 
IMDB link - https://www.imdb.com/title/${showData.imdb_id}/

*/

const ApiMovieDetails: React.FC<ApiDataProps> = ({ apiEndpoint }) => {
  const [showData, setShowData] = useState<ApiMovieItemProps | null>(null);
  const [loading, setLoading] = useState(false);

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
    setTimeout(() => {
      setLoading(true);
    }, 500);
  }, [apiEndpoint]);

  if (!showData) {
    return (
      <MovieDetailsContainer>
        <p>No data available...</p>
      </MovieDetailsContainer>
    );
  }

  /*   if (loading) {
    return (
      <ApiDataItemsContainer>
        <div className="loadingCircle">
          <CircularProgress size={70} color="warning" />
          <p>Loading...</p>
        </div>
      </ApiDataItemsContainer>
    );
  } */
  const releaseYear =
    showData.release_date || showData.first_air_date
      ? showData.release_date
        ? showData.release_date.substring(0, 4)
        : showData.first_air_date.substring(0, 4)
      : "N/A";

  return (
    <MovieDetailsContainer>
      {!loading && (
        <div className="loadingCircle">
          <CircularProgress size={70} color="warning" />
          <p>Loading...</p>
        </div>
      )}
      <div className="mainContainer">
        <div className="section">
          <h1>{showData.title}</h1>
          <div key={showData.id} className="card">
            <div className="cardTop">
              <img
                src={`https://image.tmdb.org/t/p/w500${showData.poster_path}`}
                alt={showData.title}
              />
              <div className="detailsContainer">
                {showData.backdrop_path ? (
                  <img
                    className="backdrop"
                    src={`https://image.tmdb.org/t/p/w500${showData.backdrop_path}`}
                    alt={showData.title}
                  />
                ) : null}
                <p className="overview">{showData.overview}</p>
              </div>
            </div>
            <div className="cardMiddle">
              <h3>
                Rating:{" "}
                <span className="rating">
                  {showData.vote_average.toFixed(1)}
                </span>
              </h3>
            </div>
            <div className="cardBottom">
              <div className="left">
                <p>Release year: {releaseYear}</p>
                <p>Movie length: {showData.runtime} minutes</p>
                <p>Movie language: {showData.original_language}</p>
                <p>
                  Homepage:{" "}
                  <a href={showData.homepage} target="_blank">
                    Official Homepage
                  </a>
                </p>
                <p>
                  IMDB:{" "}
                  <a
                    href={`https://www.imdb.com/title/${showData.imdb_id}/`}
                    target="_blank"
                  >
                    {showData.title}
                  </a>
                </p>
              </div>
              <div className="right">
                <p>Movie budget: ${showData.budget.toLocaleString("en-US")}</p>
                <p>
                  Generated revenue: ${showData.revenue.toLocaleString("en-US")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MovieDetailsContainer>
  );
};

export default ApiMovieDetails;
