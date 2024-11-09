import ApiDataItems from "../components/ApiDataItems";
import { top_rated_movies } from "../modules/ApiEndpoints";

const Home = () => {
  return (
    <>
      <ApiDataItems
        sectionHeader="TOP RATED MOVIES"
        apiEndpoint={top_rated_movies}
        numberOfRecords={12}
      />
      <div>Home</div>;
    </>
  );
};

export default Home;
