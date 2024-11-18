export interface ApiMovieItemProps {
  id: number;
  title: string;
  name: string;
  genres: string[];
  origin_country: string[];
  original_language: string;
  runtime: number;

  overview: string;

  poster_path: string;
  backdrop_path: string;

  popularity: number;
  vote_average: number;
  vote_count: number;

  first_air_date: string;
  release_date: string;

  budget: number;
  revenue: number;

  homepage: string;
  imdb_id: string;
}

export interface ApiDataProps {
  apiEndpoint: string;
}
