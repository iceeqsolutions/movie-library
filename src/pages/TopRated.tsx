import ApiDataItems from "../components/ApiDataItems";
import { TopRatedProps } from "../interfaces/PageInterfaces";

const TopRated: React.FC<TopRatedProps> = ({ apiEndpoint }) => {
  return (
    <>
      <ApiDataItems
        sectionHeader="TOP RATED MOVIES"
        apiEndpoint={apiEndpoint}
        numberOfRecords={12}
        imgSrc="src/assets/movieReels.jpg"
      />
    </>
  );
};

export default TopRated;
