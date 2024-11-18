import { useState } from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import {
  trending_movies,
  popular_movies,
  top_rated_movies,
  top_rated_tv_shows,
} from "./modules/ApiEndpoints";

const apiKey: string = import.meta.env.VITE_API_KEY;

import Home from "./pages/Home";
import Popular from "./pages/Popular";
import TopRated from "./pages/TopRated";
import TvShows from "./pages/TvShows";
import SearchResults from "./pages/SearchResults";
import MovieDetails from "./pages/MovieDetails";

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
    </>
  );
}

export default App;

/* 
// trending_movies
adult: false
backdrop_path: "/7h6TqPB3ESmjuVbxCxAeB1c9OB1.jpg"
genre_ids: (3) [18, 27, 878]
id: 933260
media_type: "movie"
original_language: "en"
original_title: "The Substance"
overview: "Have you ever dreamt of a better version of yourself? You, only better in every way. You should try this new product, it's called The Substance. IT CHANGED MY LIFE."
popularity: 2126.642
poster_path: "/lqoMzCcZYEFK729d6qzt349fB4o.jpg"
release_date: "2024-09-07"
title: "The Substance"
video: false
vote_average: 7.3
vote_count: 1472

// trending_tv_shows
adult: false
backdrop_path: "/9faGSFi5jam6pDWGNd0p8JcJgXQ.jpg"
first_air_date: "2008-01-20"
genre_ids: (2) [18, 80]
id: 1396
media_type: "tv"
name: "Breaking Bad"
origin_country: ['US']
original_language: "en"
original_name: "Breaking Bad"
overview: "Walter White, a New Mexico chemistry teacher, is diagnosed with Stage III cancer and given a prognosis of only two years left to live. He becomes filled with a sense of fearlessness and an unrelenting desire to secure his family's financial future at any cost as he enters the dangerous world of drugs and crime."
popularity: 529.009
poster_path: "/ztkUQFLlC19CCMYHW9o1zWhJRNq.jpg"
vote_average: 8.915
vote_count: 14425
*/
