import ApiDataItems from "../components/ApiDataItems";
import { TvShowsProps } from "../interfaces/PageInterfaces";

const TvShows: React.FC<TvShowsProps> = ({ apiEndpoint }) => {
  return (
    <>
      <ApiDataItems
        sectionHeader="TV SHOWS"
        apiEndpoint={apiEndpoint}
        numberOfRecords={12}
        imgSrc="src/assets/tvShows.jpg"
      />
    </>
  );
};

export default TvShows;
