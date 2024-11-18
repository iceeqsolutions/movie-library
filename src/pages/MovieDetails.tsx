import { useParams } from "react-router-dom";

const MovieDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div>
      <h1>Movie Details for ID: {id}</h1>
    </div>
  );
};

export default MovieDetails;
