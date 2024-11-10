import ApiDataItems from "../components/ApiDataItems";
import { popular_movies } from "../modules/ApiEndpoints";

const Popular = () => {
  return (
    <>
      <ApiDataItems
        sectionHeader="POPULAR MOVIES"
        apiEndpoint={popular_movies}
        numberOfRecords={12}
        imgSrc="src/assets/popcorns.jpg"
      />
    </>
  );
};

export default Popular;
