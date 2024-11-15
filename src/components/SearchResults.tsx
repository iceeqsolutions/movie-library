import ApiDataItems from "../components/ApiDataItems";
import { SearchResultsProps } from "../interfaces/PageInterfaces";
const SearchResults: React.FC<SearchResultsProps> = ({ apiEndpoint }) => {
  return (
    <>
      {apiEndpoint && (
        <ApiDataItems
          sectionHeader="DATABASE SEARCH"
          apiEndpoint={apiEndpoint}
          numberOfRecords={20}
          imgSrc="src/assets/dbSearch.jpg"
        />
      )}
    </>
  );
};
export default SearchResults;
