import { useState, useEffect } from "react";

interface SearchBarProps {
  searchTermsChange: (terms: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTermsChange }) => {
  const [searchTerms, setSearchTerms] = useState("");

  useEffect(() => {
    searchTermsChange(searchTerms);
  }, [searchTerms, searchTermsChange]);

  function addSearchTerms(evt: React.ChangeEvent<HTMLInputElement>) {
    setSearchTerms(evt.target.value);
  }

  function searchAPI() {
    const searchString = searchTerms.split(" ").join("+");
    console.log(searchString);
  }

  return (
    <>
      <div className="searchBar">
        <input
          type="text"
          placeholder="Search for Movies"
          onChange={addSearchTerms}
        />
        <button onClick={searchAPI}>Search</button>
      </div>
    </>
  );
};

export default SearchBar;
