import ApiDataItems from "../components/ApiDataItems";
import { PopularProps } from "../interfaces/PageInterfaces";

const Popular: React.FC<PopularProps> = ({ apiEndpoint }) => {
  return (
    <>
      <ApiDataItems
        sectionHeader="POPULAR MOVIES"
        apiEndpoint={apiEndpoint}
        numberOfRecords={12}
        imgSrc="src/assets/popcorns.jpg"
      />
    </>
  );
};

export default Popular;
