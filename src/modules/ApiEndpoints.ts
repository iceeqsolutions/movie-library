const apiKey: string = import.meta.env.VITE_API_KEY;

// Movies
export const trending_movies =
  "https://api.themoviedb.org/3/trending/movie/week?api_key=" + apiKey;
export const upcoming_movies =
  "https://api.themoviedb.org/3/movie/upcoming?api_key=" + apiKey;
export const popular_movies =
  "https://api.themoviedb.org/3/movie/popular?api_key=" + apiKey;
export const top_rated_movies =
  "https://api.themoviedb.org/3/movie/top_rated?api_key=" + apiKey;
export const movies_now_playing =
  "https://api.themoviedb.org/3/movie/now_playing?api_key=" + apiKey;

// TV Shows
export const trending_tv_shows =
  "https://api.themoviedb.org/3/trending/tv/week?api_key=" + apiKey;
export const popular_tv_shows =
  "https://api.themoviedb.org/3/tv/popular?api_key=" + apiKey;
export const top_rated_tv_shows =
  "https://api.themoviedb.org/3/tv/top_rated?api_key=" + apiKey;
export const tv_shows_airing_today =
  "https://api.themoviedb.org/3/tv/airing_today?api_key=" + apiKey;
