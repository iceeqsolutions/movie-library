import { useState, useEffect } from "react";

interface SearchBarProps {
  searchTermsChange: (terms: string) => void;
  handleClick: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchTermsChange,
  handleClick,
}) => {
  const [searchTerms, setSearchTerms] = useState("");

  useEffect(() => {
    searchTermsChange(searchTerms);
  }, [searchTerms, searchTermsChange]);

  function addSearchTerms(evt: React.ChangeEvent<HTMLInputElement>) {
    setSearchTerms(evt.target.value);
  }

  return (
    <>
      <div className="searchBar">
        <input
          type="text"
          placeholder="Search for Movies"
          onChange={addSearchTerms}
        />
        <button onClick={handleClick}>Search</button>
      </div>
    </>
  );
};

export default SearchBar;