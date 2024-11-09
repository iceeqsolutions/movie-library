import ApiDataItems from "../components/ApiDataItems";
import { trending_movies } from "../modules/ApiEndpoints";

const Home = () => {
  return (
    <>
      <ApiDataItems
        sectionHeader="10000+ MOVIES AND TV SHOWS"
        apiEndpoint={trending_movies}
        numberOfRecords={0}
        imgSrc="src/assets/starWarsPoster.png"
      />
    </>
  );
};

export default Home;
