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
  sectionHeader,
}) => {
  const [showData, setShowData] = useState<ApiDataItemProps[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);

  useEffect(() => {
    if (!apiEndpoint) {
      console.error("API endpoint is undefined");
      return;
    }
    axios
      .get(`${apiEndpoint}&page=${page}`)
      .then((response) => {
        setTotalPages(response.data.total_pages);
        setShowData(response.data.results.slice(0, numberOfRecords));
      })

      .catch((error) => {
        console.log(error);
      });
    setTimeout(() => {
      setLoading(true);
    }, 1000);
  }, [apiEndpoint, numberOfRecords, loading, page]);

  function prevPage() {
    if (page > 1) {
      setPage(page - 1);
    }
  }

  function nextPage() {
    if (page < totalPages) {
      setPage(page + 1);
    }
  }

  return (
    <ApiDataItemsContainer>
      {!loading && (
        <div className="loadingCircle">
          <CircularProgress size={70} color="warning" />
          <p>Loading...</p>
        </div>
      )}
      <div className="section">
        <h1>{sectionHeader}</h1>

        <div className="recordCard">
          {showData.map((item) => {
            const releaseYear = item.release_date
              ? item.release_date.substring(0, 4)
              : item.first_air_date.substring(0, 4);
            return (
              <div key={item.id} className="recordCardItem">
                <img
                  src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                  alt={item.title}
                />
                <h2>{item.title ? item.title : item.name}</h2>
                <p className="overview">{item.overview}</p>
                <p>
                  Rating:{" "}
                  <span className="rating">{item.vote_average.toFixed(1)}</span>
                </p>
                <p>Release year: {releaseYear}</p>
              </div>
            );
          })}
        </div>
        <div className="navigationButtons">
          <button className="btnNext" onClick={prevPage}>
            Prev Page
          </button>
          <button className="btnNext" onClick={nextPage}>
            Next Page
          </button>
        </div>
      </div>
    </ApiDataItemsContainer>
  );
};

export default ApiDataItems;
