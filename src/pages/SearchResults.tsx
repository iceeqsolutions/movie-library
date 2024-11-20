import ApiDataItems from "../components/ApiDataItems";
import { SearchResultsProps } from "../interfaces/PageInterfaces";
import SearchBar from "../components/SearchBar";
import { SearchBarContainer } from "../styles/SearchBar.modules";

const SearchResults: React.FC<SearchResultsProps> = ({
  apiEndpoint,
  onSearchTermsChange,
  handleClick,
}) => {
  return (
    <>
      <SearchBarContainer>
        <SearchBar
          searchTermsChange={onSearchTermsChange}
          handleClick={handleClick}
        />
        {apiEndpoint && (
          <ApiDataItems
            sectionHeader="DATABASE SEARCH"
            apiEndpoint={apiEndpoint}
            numberOfRecords={20}
            imgSrc="src/assets/dbSearch.jpg"
          />
        )}
      </SearchBarContainer>
    </>
  );
};
export default SearchResults;
