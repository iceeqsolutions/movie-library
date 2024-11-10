import ApiDataItems from "../components/ApiDataItems";
import { top_rated_tv_shows } from "../modules/ApiEndpoints";

const TvShows = () => {
  return (
    <>
      <ApiDataItems
        sectionHeader="TV SHOWS"
        apiEndpoint={top_rated_tv_shows}
        numberOfRecords={12}
        imgSrc="src/assets/tvShows.jpg"
      />
    </>
  );
};

export default TvShows;
