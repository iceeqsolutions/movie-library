import ApiDataItems from "../components/ApiDataItems";
// import { trending_movies } from "../modules/ApiEndpoints";
import { HomeProps } from "../interfaces/PageInterfaces";

const Home: React.FC<HomeProps> = ({ apiEndpoint }) => {
  return (
    <>
      <ApiDataItems
        sectionHeader="10000+ MOVIES AND TV SHOWS"
        apiEndpoint={apiEndpoint}
        numberOfRecords={0}
        imgSrc="src/assets/starWarsPoster.png"
      />
    </>
  );
};

export default Home;
