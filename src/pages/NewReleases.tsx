import ApiDataItems from "../components/ApiDataItems";
import { UpcomingMoviesProps } from "../interfaces/PageInterfaces";

const NewReleases: React.FC<UpcomingMoviesProps> = ({ apiEndpoint }) => {
  return (
    <>
      <ApiDataItems
        sectionHeader="NEW RELEASES"
        apiEndpoint={apiEndpoint}
        numberOfRecords={12}
        imgSrc="src/assets/tvShows.jpg"
      />
    </>
  );
};

export default NewReleases;
