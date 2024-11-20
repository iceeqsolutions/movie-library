import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import {
  trending_movies,
  popular_movies,
  top_rated_movies,
  top_rated_tv_shows,
  upcoming_movies,
} from "./modules/ApiEndpoints";

const apiKey: string = import.meta.env.VITE_API_KEY;

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Popular from "./pages/Popular";
import TopRated from "./pages/TopRated";
import TvShows from "./pages/TvShows";
import SearchResults from "./pages/SearchResults";
import MovieDetails from "./pages/MovieDetails";
import NewReleases from "./pages/NewReleases";
import Footnote from "./components/Footnote";

function App() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [urlString, setUrlString] = useState<string>("");
  const handleSearchTermsChange = (terms: string) => {
    setSearchTerm(terms);
  };

  const handleClick = () => {
    if (searchTerm) {
      const searchString = searchTerm.trim().split(" ").join("+");
      const newUrlString = `https://api.themoviedb.org/3/search/movie?query=${searchString}&api_key=${apiKey}`;
      setUrlString(newUrlString);
      setSearchTerm("");
    }
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home apiEndpoint={trending_movies} />} />
        <Route
          path="/popular-movies"
          element={<Popular apiEndpoint={popular_movies} />}
        />
        <Route
          path="/top-rated-movies"
          element={<TopRated apiEndpoint={top_rated_movies} />}
        />
        <Route
          path="/tv-shows"
          element={<TvShows apiEndpoint={top_rated_tv_shows} />}
        />
        <Route
          path="/new-releases"
          element={<NewReleases apiEndpoint={upcoming_movies} />}
        />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route
          path="/search-results"
          element={
            <SearchResults
              apiEndpoint={
                urlString
                  ? urlString
                  : `https://api.themoviedb.org/3/search/movie?query=&api_key=${apiKey}`
              }
              onSearchTermsChange={handleSearchTermsChange}
              handleClick={handleClick}
            />
          }
        />
      </Routes>
      <Footnote />
    </>
  );
}

export default App;
