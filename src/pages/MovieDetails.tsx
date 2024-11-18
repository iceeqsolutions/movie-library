import { useParams } from "react-router-dom";
import ApiMovieDetails from "../components/ApiMovieDetails";
const apiKey: string = import.meta.env.VITE_API_KEY;

const MovieDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  return (
    <>
      <ApiMovieDetails
        apiEndpoint={`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`}
      />
    </>
  );
};

export default MovieDetails;
