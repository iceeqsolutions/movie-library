import { ApiDataItemsContainer } from "../styles/Styles.modules";
import {
  ApiDataProps,
  ApiDataItemProps,
} from "../interfaces/ApiDataInterfaces";
import { useEffect, useState } from "react";
import axios from "axios";
import { CircularProgress } from "@mui/material";
import SectionBanner from "./SectionBanner";

const ApiDataItems: React.FC<ApiDataProps> = ({
  apiEndpoint,
  numberOfRecords,
  sectionHeader,
  imgSrc,
}) => {
  const [showData, setShowData] = useState<ApiDataItemProps[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [featured, setFeatured] = useState<ApiDataItemProps[]>([]);
  const featuredPage = 10;

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
    if (!apiEndpoint) {
      console.error("API endpoint is undefined");
      return;
    }
    axios.get(`${apiEndpoint}&page=${featuredPage}`).then((response) => {
      setFeatured(response.data.results.slice(0, 20));
    });
    setTimeout(() => {
      setLoading(true);
    }, 1000);
  }, [apiEndpoint, numberOfRecords, page]);

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
      <div className="mainContainer">
        <div className="scrollContainer">
          <div className="scrollingWrapper">
            {featured.map((item) => {
              return (
                <div key={item.id} className="card">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                    alt={item.title}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {<SectionBanner imgSrc={imgSrc} sectionHeader={sectionHeader} />}

        <div className="section">
          <div className="recordCard">
            {showData.map((item) => {
              const releaseYear =
                item.release_date || item.first_air_date
                  ? item.release_date
                    ? item.release_date.substring(0, 4)
                    : item.first_air_date.substring(0, 4)
                  : "N/A";
              return (
                <div key={item.id} className="recordCardItem">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                    alt={item.title}
                  />
                  <h3>{item.title ? item.title : item.name}</h3>
                  <p className="overview">{item.overview}</p>
                  <p>
                    Rating:{" "}
                    <span className="rating">
                      {item.vote_average.toFixed(1)}
                    </span>
                  </p>
                  <p>Release year: {releaseYear}</p>
                </div>
              );
            })}
          </div>
          <div className="navigationButtons">
            {page == 1 && numberOfRecords > 0 && (
              <button className="btnPrevDisable" onClick={prevPage}>
                Prev Page
              </button>
            )}
            {page > 1 && numberOfRecords > 0 && (
              <button className="btnPrev" onClick={prevPage}>
                Prev Page{" "}
              </button>
            )}
            <div className="pageNumber">
              {numberOfRecords > 0 && <p>Page - {page}</p>}
            </div>
            {page < totalPages && numberOfRecords > 0 && (
              <button className="btnNext" onClick={nextPage}>
                Next Page
              </button>
            )}
            {page == totalPages && numberOfRecords > 0 && (
              <button className="btnNextDisable" onClick={nextPage}>
                Next Page
              </button>
            )}
          </div>
        </div>
      </div>
    </ApiDataItemsContainer>
  );
};

export default ApiDataItems;
