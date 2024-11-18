export interface HomeProps {
  apiEndpoint: string;
}

export interface PopularProps {
  apiEndpoint: string;
}

export interface TopRatedProps {
  apiEndpoint: string;
}

export interface TvShowsProps {
  apiEndpoint: string;
}

export interface UpcomingMoviesProps {
  apiEndpoint: string;
}

export interface SearchResultsProps {
  apiEndpoint: string;
  onSearchTermsChange: (terms: string) => void;
  handleClick: () => void;
}
