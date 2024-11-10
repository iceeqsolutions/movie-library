import ApiDataItems from "../components/ApiDataItems";
import { top_rated_movies } from "../modules/ApiEndpoints";

const TopRated = () => {
  return (
    <>
      <ApiDataItems
        sectionHeader="TOP RATED MOVIES"
        apiEndpoint={top_rated_movies}
        numberOfRecords={12}
        imgSrc="src/assets/movieReels.jpg"
      />
    </>
  );
};

export default TopRated;
