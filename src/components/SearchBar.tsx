import { useState, useEffect } from "react";

const SearchBar = () => {
  const [searchTerms, setSearchTerms] = useState("");

  useEffect(() => {}, [searchTerms]);

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
