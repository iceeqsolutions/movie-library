export interface ApiDataItemProps {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  release_date: string;
  vote_average: number;
  vote_count: number;
  media_type: string;
  name: string;
  first_air_date: string;
  genre_ids: number[];
  original_language: string;
  popularity: number;
  video: boolean;
  adult: boolean;
  original_title: string;
  origin_country: string[];
}

export interface ApiDataProps {
  apiEndpoint: string;
  numberOfRecords: number;
  sectionHeader: string;
}
